import { ChangeThemeButton } from "@/components/custom/ChangeTheme";
import { DatePicker } from "@/components/custom/DatePicker";
import { Modal } from "@/components/custom/Modal";
import { Button } from "@/components/ui/button";
import { Drawer } from "@/components/custom/Drawer";

export default function Home() {
  return (
    <div className="flex gap-2">
      <ChangeThemeButton />
      <DatePicker placeholder="Pick a date" />
      <Modal
        trigger={<Button>Open Modal</Button>}
        // closeContent={<Button>Close</Button>}
        // headerContent={<h1>Header</h1>}
        footerContent={<Button>Save</Button>}
        // title="Modal"
      >
        <p>Content</p>
      </Modal>
      <Drawer
        // direction="left"
        trigger={<Button>Open Drawer</Button>}
        closeContent={<Button>Close</Button>}
        // footerContent={<Button>Save</Button>}
        // title="Drawer"
        // description="Description"
      >
        <p>Content</p>
      </Drawer>
    </div>
  );
}
