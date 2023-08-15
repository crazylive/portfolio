import { transformKebabToCamel, transformKebabToPascal, transformKebabToSnake } from '../utils';

export abstract class Snippet {
  /**
   * The name of file
   */
  readonly fileName: string;

  /**
   * The extension of file
   */
  abstract readonly fileExtension: string;

  /**
   * The name of component
   */
  readonly componentName: string;

  /**
   * The component name from $prompt
   */
  readonly name: string;

  constructor({ componentName, fileName, name } : { componentName: string; fileName: string; name: string; }) {
    this.componentName = componentName;
    this.fileName = fileName;
    this.name = name;
  }

  abstract get content(): string;

  get componentNameCamel() {
    return transformKebabToCamel(this.componentName);
  }

  get componentNamePascal() {
    return transformKebabToPascal(this.componentName);
  }

  get nameSnake() {
    return transformKebabToSnake(this.name);
  }
}
