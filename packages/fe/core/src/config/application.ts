import type { Icon as TablerIcon, IconProps } from '@tabler/icons-react';
import {
  IconAdjustmentsCog,
  IconBasketCog,
  IconBuildingBank,
  IconBuildingStore,
  IconCalendarEvent,
  IconUsersGroup,
} from '@tabler/icons-react';
import { JSX, ForwardRefExoticComponent, RefAttributes } from 'react';

interface ApplicationType {
  key: string;
  name: string;
  icon: ForwardRefExoticComponent<IconProps & RefAttributes<TablerIcon>>;
}

export const Applications = [
  { key: 'administration', name: 'Administration', icon: IconAdjustmentsCog },
  { key: 'guarantee', name: 'Guarantee', icon: IconBuildingBank },
  { key: 'iam', name: 'Identity & Access', icon: IconUsersGroup },
  { key: 'marketplace', name: 'Marketplace', icon: IconBuildingStore },
  { key: 'planning', name: 'Planning', icon: IconCalendarEvent },
  { key: 'tendering', name: 'Tendering', icon: IconBasketCog },
  { key: 'vendors', name: 'Vendor Management', icon: IconBuildingStore },
  // { key: 'contract', name: 'Contract', icon: IconFileSpreadsheet },
];

export const CurrentApplication = (key = 'iam'): ApplicationType => {
  const application =
    Applications.find((app) => app.key === key) ?? Applications[0];
  return application;
};
