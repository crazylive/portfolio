import { Snippet } from '../../core/snippet';

export class ScssModuleFile extends Snippet {
  fileExtension = 'module.scss';

  get content() {
    return `@import 'src/styles';

.${this.componentNameCamel} {
  display: block;
}
`;
  }
}
