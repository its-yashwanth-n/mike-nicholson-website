import { useEffect, useState } from "react";
import { collection, doc, getDocs, updateDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

const SESSION_KEY = "sessionExpiryTime";
const SESSION_LENGTH_MS = 24 * 60 * 60 * 1000;

/**
 * Reads (and, at most once per 24h per visitor) increments the site-wide
 * visit counter shared with the mikenicholson-web Firestore project. Mirrors
 * the old Angular site's counter.service.ts / app.component.ts behaviour.
 */
export function usePageViews() {
  const [views, setViews] = useState<number | null>(null);

  useEffect(() => {
    let cancelled = false;

    getDocs(collection(db, "count"))
      .then((snapshot) => {
        if (cancelled || snapshot.empty) return;

        const countDoc = snapshot.docs[0];
        const hits = Number(countDoc.data().hits) || 0;
        setViews(hits);

        const expiry = Number(localStorage.getItem(SESSION_KEY) ?? 0);
        if (Date.now() >= expiry) {
          localStorage.setItem(SESSION_KEY, String(Date.now() + SESSION_LENGTH_MS));
          updateDoc(doc(db, "count", countDoc.id), { hits: hits + 1 }).catch(() => {});
          setViews(hits + 1);
        }
      })
      .catch(() => {});

    return () => {
      cancelled = true;
    };
  }, []);

  return views;
}
