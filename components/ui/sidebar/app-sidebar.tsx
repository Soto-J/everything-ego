"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

import { GiMusicalNotes } from "react-icons/gi";

import { Separator } from "@/components/ui/separator";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Activity } from "react";

const NAVIGATION_ITEMS = [
  "home",
  "biography",
  "calendar",
  "gallary",
  "testimonials",
  "contact",
];

export default function AppSidebar() {
  const pathName = usePathname();
  return (
    <Sidebar variant="inset">
      <SidebarHeader className="flex items-center justify-center">
        <span>EGO | A Gift To The Soul</span>
      </SidebarHeader>

      <Separator className="via-secondary/60 my-4 h-px bg-linear-to-r from-transparent to-transparent" />

      <SidebarContent>
        <SidebarMenu>
          <SidebarGroup className="space-y-2">
            {NAVIGATION_ITEMS.map((href) => {
              const path = href === "home" ? "/" : `/${href}`;
              const isActive = pathName === path;

              return (
                <SidebarMenuItem key={href} className="cursor-pointer">
                  <SidebarMenuButton
                    isActive={isActive}
                    render={
                      <Link
                        href={path}
                        className={cn(
                          "flex items-center justify-between gap-3 px-4 py-3 italic",
                          "rounded-lg transition-colors duration-200 md:text-lg",
                        )}
                      >
                        <span className="capitalize">{href}</span>

                        <Activity mode={isActive ? "visible" : "hidden"}>
                          <GiMusicalNotes />
                        </Activity>
                      </Link>
                    }
                  />
                </SidebarMenuItem>
              );
            })}
          </SidebarGroup>
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}
