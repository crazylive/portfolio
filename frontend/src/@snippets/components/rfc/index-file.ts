import { Snippet } from '../../core/snippet';

export class IndexFile extends Snippet {
  fileExtension = 'ts';

  get content() {
    return `export { ${this.componentNamePascal} } from './${this.componentName}';
`;
  }
}
