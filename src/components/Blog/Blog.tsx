import Markdown from 'markdown-to-jsx';
import { Anchor, Blockquote, Code, Divider, Text, Title } from '@mantine/core';
import classes from './Blog.module.css';
import { theme } from '../../theme'

export function Blog({ content }: { content: string }) {
  return (
    <>
      <Markdown
        options={{
          overrides: {
            h1: {
              component: Title,
              props: {
                className: classes.title,
                order: 1,
                mx: '40',
                my: 'md',
              },
            },
            h2: {
              component: Title,
              props: {
                className: classes.subtitle,
                order: 2,
                mx: '40',
                my: 'md',
              },
            },
            h3: {
              component: Title,
              props: {
                className: classes.subsubtitle,
                order: 3,
                mx: '40',
                my: 'md',
              },
            },
            p: {
              component: Text,
              props: {
                c: 'dimmed',
                mx: '80',
                my: 'xs',
              },
            },
            a: {
              component: Anchor,
              props: {
                underline: 'never',
                className: classes.anchor,
              },
            },
            hr: {
              component: Divider,
              props: {
                my: 'md',
              },
            },
            code: {
              component: Code,
              props: {
                block: true,
                mx: '100',
              },
            },
            em: {
              component: Code,
              props: {},
            },
            blockquote: {
              component: Blockquote,
              props: {
                color: theme.colors?.myColor?.[4],
                mx: '80',
                my: 'xs',
              },
            },
          },
        }}
      >
        {content}
      </Markdown>
    </>
  );
}
