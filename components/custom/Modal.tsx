"use client";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";

export function Modal({
  trigger,
  headerContent,
  footerContent,
  closeContent,
  children,
  title = "",
}: {
  trigger: React.ReactNode;
  headerContent?: React.ReactNode;
  footerContent?: React.ReactNode;
  closeContent?: React.ReactNode;
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogTitle>{title}</DialogTitle>
        {headerContent && <DialogHeader>{headerContent}</DialogHeader>}
        {children}
        {footerContent || closeContent ? (
          <DialogFooter className="flex gap-2">
            {footerContent}
            {closeContent && <DialogClose asChild>{closeContent}</DialogClose>}
          </DialogFooter>
        ) : null}
      </DialogContent>
    </Dialog>
  );
}
