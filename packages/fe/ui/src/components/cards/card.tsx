"use client";

import React from "react";
import { Card, Group, Text, Button, Divider } from "@mantine/core";
import classes from "./Card.module.css";

interface ReusableCardProps {
  title: string;
  onAddClick?: () => void;
  children?: React.ReactNode;
}

export const ReusableCard: React.FC<ReusableCardProps> = ({ title, onAddClick, children }) => {
  return (
    <Card withBorder radius="md" className={`${classes.card} ${classes.whiteBackground}`}>
      <Group justify="space-between">
        <Text className={classes.title}>{title}</Text>
        {onAddClick && (
          <Button size="xs" variant="filled" color="blue" onClick={onAddClick}>
            Add
          </Button>
        )}
      </Group>
      <Divider my="sm" />
      {children} {/* Table or any other child component */}
    </Card>
  );
};
