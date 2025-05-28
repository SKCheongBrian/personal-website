import { Text, Title } from '@mantine/core';
import classes from './Construction.module.css';

export function Construction() {
  return (
    <>
      <Title className={classes.title} ta="center" mt={100}>
        Oops!
      </Title>
      <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
        Sorry! This page isn't ready yet. Come again another time.
      </Text>
    </>
  );
}
