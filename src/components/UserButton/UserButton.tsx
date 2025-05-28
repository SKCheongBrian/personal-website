import { Avatar, Group, Text, UnstyledButton } from '@mantine/core';
import classes from './UserButton.module.css';

export function UserButton() {
  const mailme = () => {
    window.location.href = 'mailto:bskch@nus.edu.sg?subject=[From SoC Webpage]';
  };

  return (
    <UnstyledButton className={classes.user} onClick={mailme}>
      <Group>
        <Avatar
          src="https://avatars.githubusercontent.com/u/54849126?v=4"
          radius="xl"
        />

        <div style={{ flex: 1 }}>
          <Text size="sm" fw={500}>
            Brian Cheong
          </Text>

          <Text c="dimmed" size="xs">
            bskch@nus.edu.sg
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  );
}
