"use client";

import { Box, Group, ScrollArea } from "@mantine/core";
import LinksGroup from "./nav-bar-links-group";
import classes from "./side-nav.module.css";
import { appConfig } from "@/config/menu";

interface ShellProps {
  children: React.ReactNode;
}

export function SideNav({ children }: ShellProps): React.ReactNode { 
   const links = appConfig.map((item) => <LinksGroup {...item} key={item.label} />);

  return (
    <nav className={classes.navbar}>
      <Box className={classes.header}>
        <Group className="font-black text-green-600 text-xl text-center m-2 pl-4">
          Asefa Ayalew
        </Group>
      </Box>
      <ScrollArea className={classes.links}>
        <div className={classes.linksInner}>{links}</div>
        <main>{children}</main>
      </ScrollArea>
    </nav>
  );
}

export default SideNav;
