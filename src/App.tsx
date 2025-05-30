import '@mantine/core/styles.css';

import { MantineProvider, createTheme, MantineColorsTuple } from '@mantine/core';
import { Router } from './Router';
import { theme } from './theme';

export default function App() {
  return (
    <MantineProvider theme={theme} >
      <Router />
    </MantineProvider>
  );
}
