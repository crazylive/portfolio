import { SpringValue } from '@react-spring/web';

export type TSymbol = {
  height?: string | number;
  width?: string | number;
  pathElements?: {
    className?: string;
    strokeDashoffset?: SpringValue<number>;
    radius?: SpringValue<number>;
  }[];
};
