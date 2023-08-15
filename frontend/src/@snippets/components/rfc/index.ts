import fs from 'fs';
import path from 'path';
import { Component } from '../../core/component';
import { ComponentFile } from './component-file';
import { ScssModuleFile } from './scss-module-file';
import { IndexFile } from './index-file';

export default class extends Component {
  get entities() {
    const defaultNames = {
      componentName: this.name,
      fileName: this.name,
      name: this.name,
    };

    return [
      new IndexFile({ name: this.name, componentName: this.name, fileName: 'index' }),
      new ComponentFile(defaultNames),
      new ScssModuleFile(defaultNames),
    ];
  }

  create() {
    fs.mkdirSync(this.basePath, { recursive: true });
    this.entities.forEach((entity) => {
      const fileContent = entity.content;
      const filePathName = `${entity.fileName}.${entity.fileExtension}`;
      const filePath = path.resolve(this.basePath, filePathName);

      fs.writeFileSync(filePath, fileContent);
    });
  }
}
