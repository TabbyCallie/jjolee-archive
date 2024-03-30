"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/utils/cn";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export default function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {/* <NavigationMenuItem>
          <Link href="/art" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Works
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem> */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Webtoons</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 w-[calc(100vw-1.5rem)] sm:w-[400px] md:w-[500px] lg:grid-cols-[2fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted/80 p-6 no-underline outline-none focus:shadow-md"
                    href="/webtoon/lost-in-translation"
                  >
                    {/* <Icons.logo className="h-6 w-6" /> */}

                    <div className="mb-2 text-lg font-medium">
                      Lost in Translation
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      The up-and-coming K-pop group Mayhem is steadily climbing
                      the charts, but fame doesn&apos;t come for free. Bad Boy
                      front man of the group Wyld knows this all too well.
                      Forced to take on a controversial persona behind his
                      fellow members&apos; backs to help keep the momentum
                      going, can Wyld keep sight of himself beneath all the lies
                      and scandals? Or will he become his own false persona?
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/webtoon/from-jae-to-eaj" title="from Jae to Eaj">
                disclaimer: this is a fanmade project for Jae&apos;s birthday.
                (please leave a comment for Jae in either episode! I will be
                sending this to him on his birthday! please keep this project a
                secret!!!)
              </ListItem>
              <ListItem href="/webtoon/july-17th" title="JULY 17TH">
                a very special day for a very special boy.
              </ListItem>
              <ListItem
                href="/webtoon/rewriting-extinction"
                title="Rewriting Extinction"
              >
                An anthology dedicated to saving as many species from extinction
                as humanly possible.
              </ListItem>
              <ListItem
                href="/webtoon/what-the-moon-hides"
                title="What The Moon Hides"
                className="col-span-2"
              >
                For years, Sett has been searching for a worthy opponent skilled
                enough to challenge his strength... Until he finally meets a
                stranger who dares take on the task. But this stranger seems to
                have more hidden beneath the surface... Perhaps more than what
                Sett bargained for.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-5 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
