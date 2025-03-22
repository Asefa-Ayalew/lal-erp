"use client";

import React from "react";
import { Card, Group, Text, Button, Divider } from "@mantine/core";
import classes from "./Card.module.css";

interface ReusableCardProps {
  title: string;
  newAllowed: boolean;
  onAddClick?: () => void;
  children?: React.ReactNode;
}

export const ReusableCard: React.FC<ReusableCardProps> = ({ title, newAllowed, onAddClick, children }) => {
  return (
    <Card withBorder radius="md" className={`${classes.card} ${classes.whiteBackground}`}>
      <Group justify="space-between">
        <Text className={classes.title}>{title}</Text>
        {newAllowed && (
          <Button size="xs" variant="filled" color="blue" onClick={onAddClick}>
            Add
          </Button>
        )}
      </Group>
      <Divider my="sm" />
      
      {/* Table or any other child component */}
      {children} 
      
    </Card>
  );
};
