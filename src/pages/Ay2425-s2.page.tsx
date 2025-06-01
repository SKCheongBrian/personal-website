import { ScrollArea } from '@mantine/core';
import { Construction } from '@/components/Construction/Construction';
import { Semester, SemesterContent } from '@/components/Semester/Semester';
import { LayoutPage } from '@/pages/Layout.page';

export function Ay2425S2Page() {
  const semesterContent: SemesterContent = {
    semester: 'AY 24/25 Semester 1',
    recitationTimings: [
      {
        day: 'Wednesday',
        time: '1000',
        recNum: '03',
        venue: 'COM4-SR31',
      },
      {
        day: 'Wednesday',
        time: '1100',
        recNum: '04',
        venue: 'COM4-SR31',
      },
      {
        day: 'Wednesday',
        time: '1400',
        recNum: '07',
        venue: 'COM4-SR31',
      },
    ],
    consultationTimings: [
      {
        day: 'Friday',
        time: '1600 -- 1700',
        venue: 'COM2-B1-03',
      },
    ],
    files: [
      {
        name: 'Recitation 1',
        slides: '/~bskch/files/ay2425s2/recitation1.pdf',
      },
      {
        name: 'Recitation 2',
        slides: '/~bskch/files/ay2425s2/recitation2.pdf',
      },
      {
        name: 'Recitation 3',
        slides: '/~bskch/files/ay2425s2/recitation3.pdf',
        extra: {
          name: 'Extra question',
          link: '/~bskch/files/ay2425s2/Main.java',
        },
      },
      {
        name: 'Recitation 4',
        slides: '/~bskch/files/ay2425s2/recitation4.pdf',
      },
      {
        name: 'Recitation 5',
        slides: '/~bskch/files/ay2425s2/recitation5.pdf',
      },
      {
        name: 'Recitation 6',
        slides: '/~bskch/files/ay2425s2/recitation6.pdf',
      },
      {
        name: 'Recitation 7',
        slides: '/~bskch/files/ay2425s2/recitation7.pdf',
      },
      {
        name: 'Recitation 8',
        slides: '/~bskch/files/ay2425s2/recitation8.pdf',
      },
      {
        name: 'Recitation 9',
        slides: '/~bskch/files/ay2425s2/recitation9.pdf',
        extra: {
          name: 'Stream Prac',
          link: '/~bskch/files/ay2425s2/stream-practice.zip',
        },
      },
    ],
  };

  return (
    <LayoutPage>
      <ScrollArea h="100vh" type="scroll" scrollHideDelay={500}>
        <Semester {...semesterContent} />
      </ScrollArea>
    </LayoutPage>
  );
}
