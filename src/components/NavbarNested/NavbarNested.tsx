import {IconBook, IconHome, IconSun, IconMoon } from '@tabler/icons-react';
import {MantineColorScheme, ScrollArea, useMantineColorScheme} from '@mantine/core';
import { LinksGroup } from '../NavbarLinksGroup/NavbarLinksGroup';
import { UserButton } from '../UserButton/UserButton';
import classes from './NavbarNested.module.css';


export function NavbarNested() {
  const { colorScheme } = useMantineColorScheme();

  const dynamicIcon = colorScheme === ('dark' as MantineColorScheme)
    ? IconMoon : IconSun;

  const navbarData = [
    { label: 'Home', icon: IconHome, link: '/' },
    {
      label: 'Semester',
      icon: IconBook,
      links: [
        { label: 'AY2425-S1', link: '/ay2425-s1' },
        { label: 'AY2425-S2', link: '/ay2425-s2' },
        { label: 'AY2526-S1', link: '/ay2526-s1' },
      ],
    },
    {
      label: 'Settings',
      icon: dynamicIcon,
      links: [
        { label: 'Light mode', theme: 'light' as MantineColorScheme },
        { label: 'Dark mode', theme: 'dark' as MantineColorScheme },
        { label: 'Auto', theme: 'auto' as MantineColorScheme },
      ],
    },
  ];

  const links = navbarData.map((item) => <LinksGroup {...item} key={item.label} />);

  return (
    <nav className={classes.navbar}>
      <div className={classes.header}>
        <UserButton />
      </div>

      <ScrollArea className={classes.links}>
        <div className={classes.linksInner}>{links}</div>
      </ScrollArea>
    </nav>
  );
}
