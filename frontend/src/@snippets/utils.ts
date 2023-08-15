export const capitalizeFirstLetter = (string: string) => string.slice(0, 1).toUpperCase() + string.slice(1, string.length);

export const transformKebabToCamel = (string: string) => string.toLowerCase()
  .replace(
    /([-_][a-z])/g,
    (group) => group
      .toUpperCase()
      .replace('-', '')
      .replace('_', ''),
  );

export const transformKebabToPascal = (string: string) => capitalizeFirstLetter(transformKebabToCamel(string));

export const transformKebabToSnake = (string: string) => string.replace('-', '_');
