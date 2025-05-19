import Bag from '@svg/bag.svg';
import Car from '@svg/car.svg';
import Gameboy from '@svg/gameboy.svg';
import GraduationCap from '@svg/graduation-cap.svg';
import House from '@svg/house.svg';
import MessageText from '@svg/message-text.svg';

import { Category, Option } from '@types';

export const EXPENSE_OPTIONS: Option[] = [
  { icon: <Bag />, value: 'food', label: 'еда' },
  { icon: <Car />, value: 'transportation', label: 'транспорт' },
  { icon: <House />, value: 'housing', label: 'жилье' },
  { icon: <Gameboy />, value: 'entertaining', label: 'развлечения' },
  { icon: <GraduationCap />, value: 'education', label: 'образование' },
  { icon: <MessageText />, value: 'other', label: 'другое' },
];

export const SORT_OPTIONS = [
  { value: 'date-desc', label: 'дате ↓' },
  { value: 'date-asc', label: 'дате ↑' },
];

export const CATEGORY_LABELS: { [key: Category]: string } = {
  food: 'еда',
  housing: 'жилье',
  entertainment: 'развлечения',
  transportation: 'транспорт',
  education: 'образование',
  other: 'другое',
};

export const CATEGORY_OPTIONS = [
  { value: 'food', label: 'еда' },
  { value: 'housing', label: 'жилье' },
  { value: 'entertainment', label: 'развлечения' },
  { value: 'transportation', label: 'транспорт' },
  { value: 'education', label: 'образование' },
  { value: 'other', label: 'другое' },
];
