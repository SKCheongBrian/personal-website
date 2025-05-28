import { Text, Title, Box } from '@mantine/core';
import classes from './Contact.module.css';

export function Contact() {
  return (
    <>
      <Title className={classes.title} ta="center" mt={100}>
        Contact Me
      </Title>
      <Title order={2} ta='center' mt='xl' >
        Email
      </Title>
      <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl" mb='sm'>
        Here is my email address. You can email me here to ask questions or to arrange consultations.
        Go ahead and click the link below to start writing an email (provided you have a default
        email client configured).
      </Text>
      <Box ta="center" mb='xl'>
        <a href="mailto:bskch@nus.edu.sg?subject=[From SoC Webpage]">bskch@nus.edu.sg</a>
      </Box>


    </>
  );
}
