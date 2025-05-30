import { Box, Button, Divider, Table, Text, Title } from '@mantine/core';
import classes from './Semester.module.css';


export interface SemesterContent {
  semester: string;
  recitationTimings: { day: string; time: string; recNum: string; venue: string }[];
  consultationTimings: { day:string; time: string; venue: string}[];
  files: { name: string; slides: string; extra?: { name: string; link: string }; }[]
}

export function Semester(semesterContent: SemesterContent) {
  const recitationTimingRows = semesterContent.recitationTimings.map(
    (row) => {
      return (<Table.Tr key={row.recNum}>
        <Table.Td>{row.day}</Table.Td>
        <Table.Td>{row.time}</Table.Td>
        <Table.Td>{row.recNum}</Table.Td>
        <Table.Td>{row.venue}</Table.Td>
      </Table.Tr>);
    }
  );

  const consultationRows = semesterContent.consultationTimings.map(
    (row) => {
      return (<Table.Tr key={row.day}>
        <Table.Td>{row.day}</Table.Td>
        <Table.Td>{row.time}</Table.Td>
        <Table.Td>{row.venue}</Table.Td>
      </Table.Tr>);
    }
  );

  const fileRows = semesterContent.files.map(
    (row) => {
      return (
        <Table.Tr>
          <Table.Td>
            <Text
              variant='subtle'
              component='a'
              ta="center"
              href={row.slides}
              className={classes.link}
              download
            >
              {row.name}
            </Text>
          </Table.Td>
          <Table.Td>{row.extra
            ?
            <Text
              variant='subtle'
              component='a'
              ta="center"
              href={row.extra.link}
              className={classes.link}
              download
            >
              {row.extra.name}
            </Text>
            : " "}
          </Table.Td>
        </Table.Tr>
      );
    }
  );

  return (
    <>
      <Title order={1} ta="center" className={classes.title} mt="xl">
        {semesterContent.semester}
      </Title>
      <Title order={2} mt='sm' ta='center' className={classes.subtitle} >
        Recitation Timings
      </Title>
      <Box w="50%" mx='auto' mt='sm' mb='xl'>
        <Table withTableBorder withColumnBorders>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Day</Table.Th>
              <Table.Th>Time</Table.Th>
              <Table.Th>Recitation Number</Table.Th>
              <Table.Th>Venue</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{recitationTimingRows}</Table.Tbody>
        </Table>
      </Box>
      <Divider/>
      <Title order={2} mt='lg' ta='center' className={classes.subtitle} >
        Consultation Timings
      </Title>
      <Box w="50%" mx='auto' mt='sm' mb='xl'>
        <Table withTableBorder withColumnBorders>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Day</Table.Th>
              <Table.Th>Time</Table.Th>
              <Table.Th>Venue</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{consultationRows}</Table.Tbody>
        </Table>
      </Box>
      <Divider/>
      <Title order={2} mt='lg' ta='center' className={classes.subtitle} >
        Files and Extra Things
      </Title>
      {semesterContent.files.length > 0
        ?
        <Box w="50%" mx='auto' mt='sm' mb='xl'>
          <Table withTableBorder withColumnBorders>
            <Table.Thead>
              <Table.Tr>
                <Table.Th ta='center'>Slides</Table.Th>
                <Table.Th ta='center'>Extras</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{fileRows}</Table.Tbody>
          </Table>
        </Box>
        : <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" my="xl">
          Sorry! It seems no files have been uploaded yet
        </Text>}
    </>
  );
}