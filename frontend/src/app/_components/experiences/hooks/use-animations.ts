import { useSpring, useSpringRef, useSprings } from '@react-spring/web';
import { useCallback } from 'react';

export const useAnimations = (dataCount: number) => {
  const cardsSpringRef = useSpringRef();
  const [cardSprings, api] = useSprings(dataCount, () => ({
    ref: cardsSpringRef,
    from: {
      translateX: 'translateX(100%)',
    },
    to: {
      translateX: 'translateX(0)',
    },
    config: {
      tension: 280, friction: 60,
    },
  }), []);

  const progressSpringRef = useSpringRef();
  const progressSpring = useSpring({
    ref: progressSpringRef,
    height: '0%',
  });

  const handleScroll = useCallback((progress: number) => {
    const percentProgress = 100 * progress;
    const percentPerItem = 100 / dataCount;
    const currentItemIdx = Math.floor(percentProgress / percentPerItem);

    progressSpringRef.set({ height: `${percentProgress}%` });
    api.start((apiIndex) => {
      if (currentItemIdx === dataCount) {
        return {
          translateX: 'translateX(0%)',
        };
      }

      return {
        translateX: apiIndex === currentItemIdx ? 'translateX(0%)' : 'translateX(100%)',
      };
    });
  }, [dataCount, progressSpringRef, api]);

  return {
    progressSpring,
    cardSprings,
    handleScroll,
  };
};
