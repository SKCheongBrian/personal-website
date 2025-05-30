import { Title, Text, Divider, Code, Blockquote, Anchor } from "@mantine/core";
import Markdown from "markdown-to-jsx";
import { IconCircle } from "@tabler/icons-react";

export function Blog({ content }: {content: string}) {
  
  return (
    <>
      <Markdown
        options={{
          overrides: {
            h1: {
              component: Title,
              props: {
	      	c: 'blue',
                order: 1,
                mx: '40',
                my: 'md',
              },
            },
            h2: {
              component: Title,
              props: {
	      	c: 'blue',	      
                order: 2,
                mx: '40',
                my: 'md'
              },
            },
	    h3: {
	      component: Title,
	      props: {
	      	c: 'blue',	      
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
              }
            },
            hr: {
              component: Divider,
              props: {
                my: 'md',
              }
            },
            code: {
              component: Code,
              props: {
                block: true,
                mx: '100',
              }
            },
            em: {
              component: Code,
              props: {
              
              }
            },
            blockquote: {
              component: Blockquote,
              props: {
                color: 'gray',
                mx: '80',
                my: 'xs'
              }
            }
          },
        }}>
        {content}
      </Markdown>
    </>
  );
}
