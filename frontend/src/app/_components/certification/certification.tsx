'use client';

import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import classNames from 'classnames';
import { TCertificateDTO } from '@models/home-page/dto';
import { CertificateModel } from '@models/home-page';
import { useBreakpoints } from 'hooks/use-breakpoints';
import { useClickOutside } from 'hooks/use-click-outside';
import { HeaderSection } from 'components/header-section';
import { Certificate } from './components/certificate';
import styles from './certification.module.scss';

type TCertification = {
  plainData: TCertificateDTO[];
};

export const Certification: React.FC<Pick<React.HTMLAttributes<HTMLDivElement>, 'className'> & TCertification> = ({
  className,
  plainData,
}) => {
  const data = plainData.map((plainRow) => CertificateModel.toModel(plainRow));
  const certificatesRef = useRef<HTMLDivElement | null>(null);
  const [openIdx, setOpenIdx] = useState<null | number>(null);
  const { isScreenSmUp } = useBreakpoints();

  const handleClick = useCallback((idx: number, event: React.MouseEvent<HTMLDivElement>) => {
    if (isScreenSmUp) return;

    event.preventDefault();
    event.stopPropagation();

    setOpenIdx(idx + 1);
  }, [isScreenSmUp]);

  useClickOutside(certificatesRef, () => {
    setOpenIdx(null);
  });

  useEffect(() => {
    if (isScreenSmUp && openIdx) setOpenIdx(null);
  }, [isScreenSmUp, openIdx]);

  return (
    <div className={classNames(styles.certification, className)}>
      <div className={styles.header}>
        <HeaderSection className={styles.title} component="h3">
          Cert
          {' '}
          <br />
          ificates
          <i>.</i>
        </HeaderSection>
      </div>
      <div className={styles.certificatesWrapper}>
        <div className="padding">
          <div ref={certificatesRef} className={classNames(styles.certificates)}>
            {data.map((certificate, idx) => (
              <Certificate
                key={certificate.id}
                onClick={(e) => handleClick(idx, e)}
                className={classNames(styles.certificate, { [styles.isOpen!]: idx === openIdx })}
                data={certificate}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
