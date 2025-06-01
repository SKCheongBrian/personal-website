import { useState } from 'react';
import { IconChevronRight } from '@tabler/icons-react';
import { useNavigate, Link } from 'react-router-dom';
import {
  Box,
  Collapse,
  Group,
  MantineColorScheme,
  Text,
  ThemeIcon,
  UnstyledButton,
  useMantineColorScheme,
} from '@mantine/core';
import classes from './NavbarLinksGroup.module.css';

interface LinksGroupProps {
  icon: React.FC<any>;
  label: string;
  initiallyOpened?: boolean;
  links?: { label: string; link?: string; theme?: MantineColorScheme }[];
  link?: string
}

export function LinksGroup({ icon: Icon, label, initiallyOpened, links, link }: LinksGroupProps) {
  const hasLinks = Array.isArray(links);
  const [opened, setOpened] = useState(initiallyOpened || false);
  const navigate = useNavigate();
  const { setColorScheme } = useMantineColorScheme();
  const items = (hasLinks ? links : []).map((subitem) => {
    const isThemeItem = !!subitem.theme;

    return (
      <Text
        key={subitem.label}
        component={Link}
        to={subitem.link || '#'}
        className={classes.link}
        onClick={() => {
          if (isThemeItem) {
            setColorScheme(subitem.theme!);
          }
        }}
      >
        {subitem.label}
      </Text>
    );
  });

  return (
    <>
      <UnstyledButton onClick={() => {
        if (hasLinks) {
          setOpened((o) => !o);
        } else if (link) {
          navigate(link);
        }
      }} className={classes.control}>
        <Group justify="space-between" gap={0}>
          <Box style={{ display: 'flex', alignItems: 'center' }}>
            <ThemeIcon variant="light" color="myColor.4" size={30}>
              <Icon size={18} />
            </ThemeIcon>
            <Box ml="md">{label}</Box>
          </Box>
          {hasLinks && (
            <IconChevronRight
              className={classes.chevron}
              stroke={1.5}
              size={16}
              style={{ transform: opened ? 'rotate(-90deg)' : 'none' }}
            />
          )}
        </Group>
      </UnstyledButton>
      {hasLinks ? <Collapse in={opened}>{items}</Collapse> : null}
    </>
  );
}
