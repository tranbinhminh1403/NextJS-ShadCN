"use client";

import * as React from "react";
import {
  Drawer as DrawerComponent,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export function Drawer({
  trigger,
  closeContent,
  footerContent,
  title = "",
  description = "",
  children,
  direction = "right",
}: {
  trigger: React.ReactNode;
  closeContent?: React.ReactNode;
  footerContent?: React.ReactNode;
  title?: string;
  description?: string;
  children: React.ReactNode;
  direction?: "left" | "right" | "top" | "bottom";
}) {
  return (
    <DrawerComponent direction={direction}>
      <DrawerTrigger asChild>{trigger}</DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>{title}</DrawerTitle>
            <DrawerDescription>{description}</DrawerDescription>
          </DrawerHeader>
          <div className="p-4">{children}</div>
          {footerContent || closeContent ? (
            <DrawerFooter>
              {footerContent}
              {closeContent && (
                <DrawerClose asChild>{closeContent}</DrawerClose>
              )}
            </DrawerFooter>
          ) : null}
        </div>
      </DrawerContent>
    </DrawerComponent>
  );
}
