import { Text, Title } from '@mantine/core';
import classes from './Welcome.module.css';

export function Welcome() {
    return (
        <>
            <Title className={classes.title} ta="center" mt={100}>
                Welcome to{' '}
                <Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'blue' }}>
                    My SoC Webpage
                </Text>
            </Title>
            <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
              I'm Brian. You're most likely a CS2030S student.

              Feel free to download the slides and any other material that I upload here.
            </Text>
        </>
    );
}
