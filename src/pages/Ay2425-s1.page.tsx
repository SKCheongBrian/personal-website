import { LayoutPage } from '@/pages/Layout.page';
import { Semester, SemesterContent } from '@/components/Semester/Semester';
import { ScrollArea } from '@mantine/core';

export function Ay2425S1Page() {

  const semesterContent: SemesterContent = {
    semester: "AY 24/25 Semester 1",
    recitationTimings: [
      {
        day: "Wednesday",
        time: "1000",
        recNum: "01",
        venue: "COM3-01-23",
      },
      {
        day: "Wednesday",
        time: "1100",
        recNum: "02",
        venue: "COM3-01-23",
      },
      {
        day: "Wednesday",
        time: "1300",
        recNum: "04",
        venue: "COM3-01-23",
      },
      {
        day: "Wednesday",
        time: "1400",
        recNum: "05",
        venue: "COM3-01-23",
      },
    ],
    consultationTimings: [
      {
        day: "Friday",
        time: "1530 -- 1630",
        venue: "COM2-B1-03",
      },
    ],
    files: [
      {
        name: "Problem set 6",
        slides: '/~bskch/files/ay2425s1/problemset-6.pdf'
      },
      {
        name: "Problem set 8",
        slides: '/~bskch/files/ay2425s1/problemset-8.pdf'
      },
      {
        name: "Problem set 9",
        slides: '/~bskch/files/ay2425s1/problemset-9.pdf'
      },
    ],
  };

  return (
    <LayoutPage>
      <ScrollArea h='100vh' type='scroll' scrollHideDelay={500}>
        <Semester {...semesterContent}/>
      </ScrollArea>
    </LayoutPage>
  );
}
