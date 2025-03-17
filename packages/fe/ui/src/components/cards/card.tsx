import { Card } from "@mantine/core";


interface CardProps {
  title: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}

export const LalErpCard: React.FC<CardProps> = ({ title, children, footer }) => {
  return (
    <Card shadow="md" padding="lg" radius="md" className="border border-gray-200 rounded-lg">
      {children}
    </Card>
  );
};
