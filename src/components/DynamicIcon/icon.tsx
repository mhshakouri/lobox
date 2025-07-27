import * as FaIcons from 'react-icons/fa'; // Font Awesome icons

import type { DynamicIconProps } from './types';

const DynamicIcon = ({ iconName, className }: DynamicIconProps) => {

  const IconComponent = (FaIcons as Record<string, React.ComponentType<{ className?: string }> | undefined>)[iconName];

  if (!IconComponent) {
    return <></>;
  }

  return <IconComponent className={className}/>;
};

export default DynamicIcon;