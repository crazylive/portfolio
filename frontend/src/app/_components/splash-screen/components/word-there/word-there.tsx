import React from 'react';
import classNames from 'classnames';
import { animated } from '@react-spring/web';
import { SymbolT } from 'components/symbols/symbol-t';
import { SymbolH } from 'components/symbols/symbol-h';
import { SymbolE } from 'components/symbols/symbol-e';
import { SymbolR } from 'components/symbols/symbol-r';
import { SymbolExclamation } from 'components/symbols/symbol-exclamation';
import type { TSymbolSpring, TWordSpring } from '../hi-there';
import styles from './word-there.module.scss';

type TWordThere = {
  wordSpring: TWordSpring;
  symbolSprings: TSymbolSpring[];
};

export const WordThere: React.FC<Pick<React.HTMLAttributes<HTMLDivElement>, 'className'> & TWordThere> = ({
  className,
  wordSpring,
  symbolSprings,
}) => (
  <animated.div className={className} style={{ right: wordSpring.right }}>
    <SymbolT
      width="1.96em"
      height="2.63em"
      pathElements={[
        { strokeDashoffset: symbolSprings[0]?.dashoffsetReverse },
        { strokeDashoffset: symbolSprings[2]?.dashoffset },
      ]}
    />
    <SymbolH
      className={styles.symbolH}
      width="2.04em"
      height="2.63em"
      pathElements={[
        { strokeDashoffset: symbolSprings[0]?.dashoffset },
        { strokeDashoffset: symbolSprings[2]?.dashoffsetReverse },
        { strokeDashoffset: symbolSprings[3]?.dashoffset },
      ]}
    />
    <SymbolE
      className={classNames(styles.symbol, styles.symbolE1)}
      width="1.66em"
      height="2.63em"
      pathElements={[
        { strokeDashoffset: symbolSprings[0]?.dashoffsetReverse },
        { strokeDashoffset: symbolSprings[1]?.dashoffsetReverse },
        { strokeDashoffset: symbolSprings[2]?.dashoffsetReverse },
        { strokeDashoffset: symbolSprings[3]?.dashoffsetReverse },
      ]}
    />
    <SymbolR
      className={classNames(styles.symbol, styles.symbolR)}
      width="2.04em"
      height="2.63em"
      pathElements={[
        { strokeDashoffset: symbolSprings[1]?.dashoffsetReverse },
        { strokeDashoffset: symbolSprings[0]?.dashoffsetReverse },
        { strokeDashoffset: symbolSprings[3]?.dashoffsetReverse },
      ]}
    />
    <SymbolE
      className={classNames(styles.symbol, styles.symbolE2)}
      width="1.66em"
      height="2.63em"
      pathElements={[
        { strokeDashoffset: symbolSprings[0]?.dashoffsetReverse },
        { strokeDashoffset: symbolSprings[1]?.dashoffsetReverse },
        { strokeDashoffset: symbolSprings[2]?.dashoffsetReverse },
        { strokeDashoffset: symbolSprings[3]?.dashoffsetReverse },
      ]}
    />
    <SymbolExclamation
      uniqueName="symbolExclamation"
      className={classNames(styles.symbol, styles.symbolExcl)}
      width="0.68em"
      height="2.68em"
      pathElements={[
        { strokeDashoffset: symbolSprings[3]?.dashoffset },
        { className: styles.circle, radius: symbolSprings[4]?.radius },
      ]}
    />
  </animated.div>
);
