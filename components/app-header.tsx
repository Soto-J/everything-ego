"use client";

import { usePathname } from "next/navigation";
import { SidebarTrigger } from "./ui/sidebar";

export default function AppHeader() {
  const pathName = usePathname();

  const route = pathName === "/" ? "home" : pathName.slice(1);

  return (
    <div className="flex items-center gap-4">
      <SidebarTrigger
        variant="outline"
        className="border-sidebar-border/70 hover:border-sidebar-primary/50 hover:bg-sidebar-accent/10 hover:shadow-sidebar-primary/10 focus-visible:border-sidebar-primary focus-visible:ring-sidebar-primary/20 my-2 ml-2 size-9 transition-all duration-200 hover:scale-[1.02] hover:shadow-md active:scale-[0.98]"
        aria-controls="main-sidebar"
      />
      <div className="capitalize font-semibold text-2xl">{route}</div>
    </div>
  );
}
