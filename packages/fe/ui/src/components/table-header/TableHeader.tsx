"use client";

import React from "react";
import { Card, Group, Text, Button, Divider } from "@mantine/core";
import classes from "./TableHeader.module.css";
import { IconPlus } from "@tabler/icons-react";
interface TableHeaderProps {
  title: string;
  newAllowed: boolean;
  onAddClick?: () => void;
  children?: React.ReactNode;
}

export const TableHeader: React.FC<TableHeaderProps> = ({ title, newAllowed, onAddClick, children }) => {
  return (
    <Card withBorder radius="md" className={`${classes.card} ${classes.whiteBackground}`}>
      <Group justify="space-between">
        <Text className={classes.title}>{title}</Text>
        {newAllowed && (
          <Button size="xs" variant="filled" color="blue" onClick={onAddClick}>
            <IconPlus size={16} />Add
          </Button>
        )}
      </Group>
      <Divider my="sm" />
      
      {/* Table or any other child component */}
      {children} 
      
    </Card>
  );
};
