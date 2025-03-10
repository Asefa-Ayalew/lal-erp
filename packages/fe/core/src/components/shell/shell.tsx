"use client";
import {
  AppShell,
  Avatar,
  Box,
  Burger,
  Button,
  Divider,
  Flex,
  Group,
  Menu,
  ScrollArea,
  Select,
  Text,
  Title,
} from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { Notifications } from "@mantine/notifications";
import {
  IconGridDots,
  IconHelpCircle,
  IconLogout,
  IconMenu2,
  IconMessages,
  IconPasswordUser,
  IconSettings,
  IconUserCircle,
} from "@tabler/icons-react";
import React, { useState } from "react";
import { LinksGroup } from "./navbar-link-group";
import { useDisclosure, useNetwork } from "@mantine/hooks";
import styles from "./shell.module.css";
import { appConfig } from "src/config/menu";
import { Applications } from "src/config/application";
import { useLocale } from "../../../../../../apps/back-office/bsc/src/app/locale-provider";
import DarkModeToggle from "../dark-mode-toggle";

interface ShellProps {
  children: React.ReactNode;
}

export function Shell({ children }: ShellProps): React.ReactNode {
  const links = appConfig.map((item) => (
    <LinksGroup {...item} key={item.label} />
  ));
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);
  const [currentApplication, setCurrentApplication] = useState("BSC");
  const applications = Applications.filter(
    ({ name }) => name !== currentApplication
  ).map((item) => (
    <Menu.Item
      component="a"
      href={`/${item.key}`}
      key={item.key}
      leftSection={<item.icon size={14} />}
    >
      {item.name}
    </Menu.Item>
  ));
  const networkStatus = useNetwork();

  const { t } = useLocale();
  const { locale, setLocale } = useLocale(); // Use locale context

  return (
    <ModalsProvider>
      <Notifications />
      <AppShell
        header={{ height: "48px" }}
        layout="alt"
        navbar={{
          width: 250,
          breakpoint: "sm",
          collapsed: {
            mobile: !mobileOpened,
            desktop: !desktopOpened,
          },
        }}
        padding="md"
      >
        <AppShell.Header>
          <Group align="center" h="100%" justify="space-between" px="sm">
            <Group align="center" gap={12} h="100%">
              <Burger
                hiddenFrom="sm"
                onClick={toggleMobile}
                opened={mobileOpened}
                size="sm"
              />
              <Button
                leftSection={<IconMenu2 size={16} />}
                onClick={toggleDesktop}
                pr={0}
                variant="white"
                visibleFrom="sm"
              />

              <Title c="primary" fz={16}>
                {"Ministry of Tourism"}
              </Title>
            </Group>
            <Flex gap={4}>
              <Group className="hidden md:flex">
                <Select
                  data={[
                    { value: "en", label: "English" },
                    { value: "am", label: "አማርኛ" },
                  ]}
                  value={locale} // Bind to context locale
                  onChange={(val) => setLocale(val as "en" | "am")}
                  classNames={{
                    input: "w-28 bg-white dark:bg-gray-900 dark:text-white",
                    dropdown: "dark:bg-gray-800 dark:text-white",
                    option: "dark:hover:bg-gray-700 dark:hover:text-white",
                  }}
                  style={{
                    width: "7px",
                    marginTop: "2px",
                    paddingBottom: "2px",
                    cursor: "pointer",
                  }}
                />
                <Box style={{ marginRight: "8px" }}>
                  <DarkModeToggle />
                </Box>
              </Group>{" "}
              <Menu shadow="md" width={250}>
                <Menu.Target>
                  <div style={{ paddingTop: "8px", cursor: "pointer"}}>
                    <IconGridDots size={16} />
                    <Divider className="mb-10" />
                  </div>
                </Menu.Target>
                <Menu.Dropdown>
                  <Menu.Label>Applications</Menu.Label>
                  {applications}
                </Menu.Dropdown>
              </Menu>
              <Menu arrowPosition="center" shadow="md" width={200} withArrow>
                <Menu.Target>
                  <Button variant="subtle">
                    <Flex gap={4} >
                      <Avatar color="primary" radius="xl" size="sm" />
                      <Text>{"Nolawi Mekuriaw"}</Text>
                    </Flex>
                  </Button>
                </Menu.Target>

                <Menu.Dropdown>
                  <Menu.Item
                    component="a"
                    href={``}
                    leftSection={<IconUserCircle size={14} />}
                  >
                    Profile
                  </Menu.Item>
                  <Menu.Item
                    component="a"
                    href="/iam/change-password"
                    leftSection={<IconPasswordUser size={14} />}
                  >
                    Change Password
                  </Menu.Item>

                  <Menu.Item leftSection={<IconSettings size={14} />}>
                    Settings
                  </Menu.Item>
                  <Menu.Divider />
                  <Menu.Item leftSection={<IconMessages size={14} />}>
                    FAQ
                  </Menu.Item>
                  <Menu.Item leftSection={<IconHelpCircle size={14} />}>
                    Help
                  </Menu.Item>

                  <Menu.Divider />

                  <Menu.Item leftSection={<IconLogout size={14} />}>
                    Logout
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu>
            </Flex>
          </Group>
        </AppShell.Header>
        <AppShell.Navbar className={styles.side}>
          <AppShell.Section>
            <Box className={styles.header}>
              <Box className="flex-grow">
                <Box
                  style={{
                    height: "42px",
                    backgroundColor: "#f1f1ff",
                    alignItems: "center",
                  }}
                >
                  <h2
                    style={{
                      paddingLeft: "20px",
                      paddingTop: "10px",
                      fontFamily: "sans-serif",
                      fontWeight: "bold",
                    }}
                  >
                    {currentApplication}
                  </h2>
                </Box>
                <Burger
                  color="white"
                  hiddenFrom="sm"
                  onClick={toggleMobile}
                  opened={mobileOpened}
                  size="sm"
                />
              </Box>
            </Box>
          </AppShell.Section>
          <AppShell.Section component={ScrollArea} grow>
            {links}
          </AppShell.Section>
          <AppShell.Section>
            <div className=" text-xs  border-t p-2">
              <div className="flex justify-between items-center">
                <Text color={networkStatus.online ? "teal" : "red"} size="sm">
                  {networkStatus.online ? "Online" : "Offline"}
                </Text>
                <div className="text-center">
                  {process.env.NEXT_PUBLIC_VERSION}
                </div>{" "}
              </div>
              <div className="flex gap-2 justify-between items-center">
                <Flex gap={"xl"}>
                  <Box>WDU</Box>
                  <Box> &copy; 2025 </Box>
                </Flex>
              </div>
            </div>
          </AppShell.Section>
        </AppShell.Navbar>
        <AppShell.Main>{children}</AppShell.Main>
      </AppShell>
    </ModalsProvider>
  );
}

export default Shell;
