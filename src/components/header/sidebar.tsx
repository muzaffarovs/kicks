import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Searchbar from "./searchbar";
import { Categories, ListItem, NavigationMenuDemo } from "./navigation-menu";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";

export const HeaderSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Menu className="block md:hidden" role="button" />
      </SheetTrigger>
      <SheetContent className="pt-8" side="left">
        <SheetHeader>
          <SheetTitle>
            <img className="w-24" src="/logo.png" alt="Logo" />
          </SheetTitle>
          <Searchbar />
        </SheetHeader>
        <NavigationMenu className="w-full border mt-3 rounded-md shadow-sm">
          <NavigationMenuList>
            <NavigationMenuItem className="w-full">
              <NavigationMenuTrigger>Women</NavigationMenuTrigger>
              <NavigationMenuContent className="w-full border">
                {Categories.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem className="w-full">
              <NavigationMenuTrigger>Men</NavigationMenuTrigger>
              <NavigationMenuContent className="w-full border">
                {Categories.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem className="w-full">
              <NavigationMenuTrigger>Children</NavigationMenuTrigger>
              <NavigationMenuContent className="w-full border">
                {Categories.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </SheetContent>
    </Sheet>
  );
};
