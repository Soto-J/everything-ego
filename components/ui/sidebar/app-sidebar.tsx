"use client";

import { Activity } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

import { authClient } from "@/lib/auth/auth-client";
import { GiMusicalNotes } from "react-icons/gi";
import { IoIosLogOut } from "react-icons/io";

import { Separator } from "@/components/ui/separator";
import { Button } from "../button";
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

const NAVIGATION_ITEMS = [
  "home",
  "about",
  "calendar",
  "gallery",
  "testimonials",
  "contact",
];

export default function AppSidebar() {
  const pathName = usePathname();

  const {
    data: session,
    isPending, //loading state
    error, //error object
  } = authClient.useSession();

  return (
    <Sidebar variant="inset">
      <SidebarHeader className="flex items-center justify-center">
        <div className="pt-6 text-xl">
          <span className="font-medium">ÉGO</span> | A Gift To The Soul
        </div>
      </SidebarHeader>

      <Separator className="via-primary my-4 h-px bg-linear-to-r from-transparent to-transparent" />

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
                          "flex items-center justify-between gap-3 px-4 py-3",
                          "rounded-lg transition-colors duration-200",
                        )}
                      >
                        <span className="text-xl capitalize">{href}</span>

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

      <Activity mode={session?.user ? "visible" : "hidden"}>
        <SidebarFooter>
          <Button onClick={() => authClient.signOut()}>
            Logout
            <IoIosLogOut />
          </Button>
        </SidebarFooter>
      </Activity>
    </Sidebar>
  );
}
