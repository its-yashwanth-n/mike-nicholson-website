import type { ComponentType, SVGProps } from "react";
import { NavLink } from "react-router-dom";
import { BookOpen, Film, Home, Link as LinkIcon, Paintbrush, Plane, Sailboat, Smile } from "lucide-react";
import { primaryNav } from "@/data/nav";

const icons: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  "/": Home,
  "/books": BookOpen,
  "/films": Film,
  "/art": Paintbrush,
  "/rowing": Sailboat,
  "/rubbery-figures": Smile,
  "/travel": Plane,
  "/links": LinkIcon,
};

/** Fixed left-hand navigation, mirroring the old site's side menu. Desktop only. */
export function Sidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 z-30 hidden w-60 flex-col overflow-y-auto bg-accent text-white md:flex">
      <NavLink
        to="/"
        className="flex h-20 shrink-0 items-center justify-center font-wordmark text-2xl font-light tracking-wide text-white"
      >
        <span className="align-top text-sm">Mike</span>Nicholson
      </NavLink>
      <div className="mx-5 h-px shrink-0 bg-white/20" />
      <nav aria-label="Primary" className="flex flex-1 flex-col gap-1 px-3 py-4">
        {primaryNav.map((item) => {
          const Icon = icons[item.to];
          return (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                  isActive ? "bg-white/15 text-white" : "text-white/75 hover:bg-white/10 hover:text-white"
                }`
              }
            >
              {Icon && <Icon className="size-5 shrink-0" aria-hidden="true" />}
              {item.label}
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
}
