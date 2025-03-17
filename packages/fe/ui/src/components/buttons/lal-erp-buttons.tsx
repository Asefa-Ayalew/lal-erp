"use client";

import { Button } from "@mantine/core";
import { Loader, Trash, Edit, Check, X, RefreshCw } from "lucide-react"; // Icons
import "../../../global.css";

interface ButtonProps {
  variant?: "primary" | "secondary" | "outline" | "danger" | "loading";
  size?: "sm" | "md" | "lg";
  isDisabled?: boolean;
  buttonName?: string;
  onClicked: (action: string) => void;
  showIcon?: boolean;
}

const variants = {
  primary: "bg-blue-600 hover:bg-blue-700 text-white",
  secondary: "bg-gray-600 hover:bg-gray-700 text-white",
  outline: "border border-gray-400 text-gray-600 hover:bg-gray-100",
  danger: "bg-red-600 hover:bg-red-700 text-white",
  loading: "opacity-50 cursor-not-allowed",
};

const sizeClasses = {
  sm: "px-2 py-1 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg",
};

export const LalErpButton = ({
  variant = "primary",
  buttonName = "Click Me",
  size = "md",
  isDisabled = false,
  onClicked,
  showIcon = true,
}: ButtonProps) => {
  return (
    <Button
      disabled={isDisabled}
      className={`${variants[variant]} ${sizeClasses[size]} flex items-center gap-2`}
      onClick={() => onClicked(buttonName)}
    >
      {showIcon && variant === "loading" && <Loader className="animate-spin" size={16} />}
      {buttonName}
    </Button>
  );
};

// Save & Submit Button Group
export const LalErpSaveButton = (props: ButtonProps) => (
  <div className="flex space-x-4">
    <LalErpButton {...props} buttonName="Save" variant="primary" />
    <LalErpButton {...props} buttonName="Submit" variant="secondary" />
  </div>
);

// Edit & Delete Button Group
export const LalErpEditDeleteButtons = (props: ButtonProps) => (
  <div className="flex space-x-4">
    <LalErpButton {...props} buttonName="Edit" variant="outline" showIcon />
    <LalErpButton {...props} buttonName="Delete" variant="danger" showIcon />
  </div>
);

// Approve & Reject Buttons
export const LalErpApproveRejectButtons = (props: ButtonProps) => (
  <div className="flex space-x-4">
    <LalErpButton {...props} buttonName="Approve" variant="primary" showIcon />
    <LalErpButton {...props} buttonName="Reject" variant="danger" showIcon />
  </div>
);

// Cancel & Reset Buttons
export const LalErpCancelResetButtons = (props: ButtonProps) => (
  <div className="flex space-x-4">
    <LalErpButton {...props} buttonName="Cancel" variant="secondary" showIcon />
    <LalErpButton {...props} buttonName="Reset" variant="outline" showIcon />
  </div>
);
