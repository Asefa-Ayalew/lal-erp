import type { Icon as TablerIcon, IconProps } from '@tabler/icons-react';
import {
  IconAdjustments,
  IconAdjustmentsCog,
  IconBasketCog,
  IconBook,
  IconBuildingBank,
  IconBuildingStore,
  IconCalendar,
  IconCalendarEvent,
  IconUsers,
  IconUsersGroup,
} from '@tabler/icons-react';
import { JSX, ForwardRefExoticComponent, RefAttributes } from 'react';

interface ApplicationType {
  key: string;
  name: string;
  icon: ForwardRefExoticComponent<IconProps & RefAttributes<TablerIcon>>;
}

export const Applications = [
    { key: 'registration', name: 'Registration', icon: IconAdjustments },
    { key: 'balancedScoreCard', name: 'Balanced Score Card', icon: IconBuildingBank },
    { key: 'propertyManagement', name: 'Property Management', icon: IconUsers },
    { key: 'researchPublication', name: 'Research Publication', icon: IconBook },
    { key: 'communityService', name: 'Community Service', icon: IconCalendar },
    { key: 'humanResource', name: 'Human Resource', icon: IconUsersGroup },
];

export const CurrentApplication = (key = 'registration'): ApplicationType => {
  const application =
    Applications.find((app) => app.key === key) ?? Applications[0];
  return application;
};
