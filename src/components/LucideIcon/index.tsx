import { icons } from "lucide-react";

interface LucideIconProps {
  name: string;
  color: string;
  size?: string;
}

interface Icons {
  [key: string]: React.ComponentType<any>; // Add this index signature
}

const LucideIcon = ({ name, color, size }: LucideIconProps) => {
  const LucideIcon = (icons as Icons)[name];
  return (
    <LucideIcon
      color={color}
      className={size}
    />
  );
};

export default LucideIcon;
