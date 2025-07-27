import * as FaIcons from "react-icons/fa"; // Font Awesome icons

type FaIconName = keyof typeof FaIcons;

interface DynamicIconProps {
  iconName: FaIconName;
  className?: string;
}

export type { FaIconName, DynamicIconProps };
