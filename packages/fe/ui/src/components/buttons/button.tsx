import { Button as MantineButton, ButtonProps } from "@mantine/core";
// import { cn } from "@/lib/utils"; // Utility for merging Tailwind classes

interface Props extends ButtonProps {
  variant?: "primary" | "secondary" | "outline" | "danger" | "loading";
  className?: string;
}

export const Button: React.FC<Props> = ({ variant = "primary", className, children, ...props }) => {
  const variants = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white",
    secondary: "bg-gray-600 hover:bg-gray-700 text-white",
    outline: "border border-gray-400 text-gray-600 hover:bg-gray-100",
    danger: "bg-red-600 hover:bg-red-700 text-white",
    loading: "opacity-50 cursor-not-allowed",
  };

  return (
    //   className={cn("px-4 py-2 rounded-lg", variants[variant], className)}
    <MantineButton
    // {...props}
      className={variants[variant]}
      {...props}
    >
      {children}
    </MantineButton>
  );
};
