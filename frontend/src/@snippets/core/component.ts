import { Snippet } from '@snippets/core/snippet';
import fs from 'fs';

export type TComponentConstructor = {
  basePath: string;
  name: string;
}

export abstract class Component {
  /**
   * The base path where to save entities
   */
  protected readonly basePath: string;

  /**
   * The component name
   */
  protected readonly name: string;

  constructor({ basePath, name }: TComponentConstructor) {
    this.basePath = basePath;
    this.name = name;
  }

  abstract get entities(): Snippet[];

  abstract create(): void

  /**
   * The method serves as an entry point for creating a new component, and it also executes the 'create' method with some validations before
   */
  make() {
    const isComponentExist = fs.existsSync(this.basePath);

    if (isComponentExist) throw new Error(`The "${this.name}" component already exists in the "${this.basePath}" directory`);

    this.create();
  }
}
