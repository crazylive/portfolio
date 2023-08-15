import { Snippet } from '../../core/snippet';

export class ComponentFile extends Snippet {
  fileExtension = 'tsx';

  get content() {
    return `import React from 'react';
import classNames from 'classnames';
import styles from './${this.componentName}.module.scss';

type T${this.componentNamePascal} = {

};

export const ${this.componentNamePascal}: React.FC<Pick<React.HTMLAttributes<HTMLDivElement>, 'className'> & T${this.componentNamePascal}> = ({
  className,
}) => (
  <div className={classNames(styles.${this.componentNameCamel}, className)}>
    ${this.componentName}
  </div>
);
`;
  }
}
