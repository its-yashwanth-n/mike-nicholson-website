import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Same Firebase project the existing mikenicholson-web site uses for its visit
// counter, so the count carries over rather than resetting for the new site.
// (Firebase web config values are not secrets - access is governed by Firestore rules.)
const firebaseConfig = {
  apiKey: 'AIzaSyBQ6VCJbbbhBjjqNORhtnPNvq9T_XpEW2Y',
  authDomain: 'mikenicholson-web.firebaseapp.com',
  databaseURL: 'https://mikenicholson-web.firebaseio.com',
  projectId: 'mikenicholson-web',
  storageBucket: 'mikenicholson-web.appspot.com',
  messagingSenderId: '856761450066',
  appId: '1:856761450066:web:1a884a27ebf127c5',
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
