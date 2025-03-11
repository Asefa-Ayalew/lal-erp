import { Card as MantineCard } from "@mantine/core";

interface CardProps {
  title: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ title, children, footer }) => {
  return (
    <MantineCard shadow="md" padding="lg" radius="md" className="border border-gray-200 rounded-lg">
      <h3 className="text-lg font-semibold">{title}</h3>
      <div className="py-2">{children}</div>
      {footer && <div className="mt-4 border-t pt-2">{footer}</div>}
    </MantineCard>
  );
};
