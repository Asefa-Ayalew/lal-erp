"use client";

import { Button } from "@mantine/core";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import { useState, useEffect } from "react";
import styles from "./ReusableCard.module.css"; // Create a CSS module for styling

interface ReusableCardProps {
  children: React.ReactNode;
  title?: React.ReactNode;
  subTitle?: React.ReactNode;
  action?: React.ReactNode;
  collapsible?: boolean;
  defaultCollapsed?: boolean;
  className?: string;
  width?: string;
  onCollapseToggle?: (isCollapsed: boolean) => void;
}

export function ReusableCard({
  children,
  title = "Users",
  subTitle = "sub title",
  action,
  collapsible = true,
  defaultCollapsed = true,
  className = "",
  width = "100%",
  onCollapseToggle,
}: ReusableCardProps) {
  const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed);

  // Toggle collapse/expand
  const toggleCollapse = () => {
    setIsCollapsed((prev) => !prev);
  };

  // Notify parent when collapse state changes
  useEffect(() => {
    if (onCollapseToggle) {
      onCollapseToggle(isCollapsed);
    }
  }, [isCollapsed, onCollapseToggle]);

  return (
    <div
      className={`${styles.container} ${className} pt-4`}
      style={{ width }}
    >
      {/* Header */}
      <div className={styles.header}>
        <div>
          <div className={styles.title}>{title}</div>
          {subTitle && <div className={styles.subTitle}>{subTitle}</div>}
        </div>

        {/* Action Area */}
        <div className={styles.action}>
          {!isCollapsed && action} {/* Show action only when expanded */}

          {/* Collapse/Expand Button */}
          {collapsible && (
            <Button
              onClick={toggleCollapse}
              variant="outline"
              className={styles.toggleButton}
            >
              {isCollapsed ? "Expand" : "Collapse"}
            </Button>
          )}
        </div>
      </div>

      {/* Body */}
      {!isCollapsed && (
        <div className={styles.body} >
          {children}
        </div>
      )}
    </div>
  );
}