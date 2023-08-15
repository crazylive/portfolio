import path from 'path';
import minimist from 'minimist';
import { Component, TComponentConstructor } from '@snippets/core/component';

const args = minimist(process.argv);

const entityType = args.type;
const basePath = path.resolve(args.path.replace(/\\/g, '/'));

const name = args.path.split('/').reverse()[0] || args.name;

import(`./components/${entityType}`)
  .then((module: { default: new (config: TComponentConstructor) => Component }) => {
    const ComponentClass = module.default;

    const component = new ComponentClass({ basePath, name });

    component.make();
  });
