import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { User } from "lucide-react";
import Link from "next/link";

export const HeaderMenubar = () => {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>
          <User />
        </MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            <Link href="/login">Log in</Link>
          </MenubarItem>
          <MenubarItem>
            <Link href="signup">Sign up</Link>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>Favourite</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>
                <Link href="/saved">Saved</Link>
              </MenubarItem>
              <MenubarItem>
                <Link href="/cart">Cart</Link>
              </MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};
