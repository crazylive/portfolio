import React from 'react';
import { animated } from '@react-spring/web';
import { SymbolH } from 'components/symbols/symbol-h';
import { SymbolI } from 'components/symbols/symbol-i';
import type { TSymbolSpring, TWordSpring } from '../hi-there';
import styles from './word-hi.module.scss';

type TWordHi = {
  wordSpring: TWordSpring;
  symbolSprings: TSymbolSpring[];
};

export const WordHi: React.FC<Pick<React.HTMLAttributes<HTMLDivElement>, 'className'> & TWordHi> = ({
  className,
  wordSpring,
  symbolSprings,
}) => (
  <animated.div className={className} style={{ right: wordSpring.right }}>
    <SymbolH
      width="2.04em"
      height="2.63em"
      pathElements={[
        { strokeDashoffset: symbolSprings[0]?.dashoffsetReverse },
        { strokeDashoffset: symbolSprings[2]?.dashoffset },
        { strokeDashoffset: symbolSprings[3]?.dashoffsetReverse },
      ]}
    />
    <SymbolI
      className={styles.symbolI}
      width="0.60em"
      height="2.63em"
      pathElements={[
        { strokeDashoffset: symbolSprings[2]?.dashoffsetReverse },
      ]}
    />
  </animated.div>
);
