import React from 'react';
import sanitizeHtml from 'sanitize-html';
import classNames from 'classnames';

type TInnerHtml = {
  html: string;
  useStylesForContent?: boolean;
  component?: 'div' | 'span';
  allowedTags?: string[];
  attributesForAll?: string[];
  allowedAttributes?: object;
}

export const InnerHtml: React.FC<Pick<React.HTMLAttributes<HTMLDivElement>, 'className'> & TInnerHtml> = ({
  className,
  html,
  useStylesForContent = true,
  component: Component = 'div',
  allowedTags = [],
  attributesForAll = [],
  allowedAttributes = {},
}) => {
  const cleanHTML = sanitizeHtml(html, {
    allowedTags: [
      'p',
      'em',
      'strong',
      'strike',
      'abbr',
      'blockquote',
      'cite',
      'q',
      'i',
      'b',
      'u',
      'br',
      'ol',
      'ul',
      'li',
      'pre',
      'br',
      'a',
      ...allowedTags,
    ],
    allowedAttributes: {
      '*': ['style', 'class', ...attributesForAll],
      a: ['href', 'target', 'rel'],
      ...allowedAttributes,
    },
  });

  return <Component className={classNames(className, { content: useStylesForContent })} dangerouslySetInnerHTML={{ __html: cleanHTML }} />;
};
