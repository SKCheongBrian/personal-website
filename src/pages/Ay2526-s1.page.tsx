import { ScrollArea } from '@mantine/core';
import { Construction } from '@/components/Construction/Construction';
import { Semester, SemesterContent } from '@/components/Semester/Semester';
import { LayoutPage } from '@/pages/Layout.page';

export function Ay2526S1Page() {
    const semesterContent: SemesterContent = {
        semester: 'AY 25/26 Semester 1',
        recitationTimings: [
            {
                day: 'Wednesday',
                time: '1200',
                recNum: '03',
                venue: 'COM3-01-23',
            },
            {
                day: 'Wednesday',
                time: '1300',
                recNum: '04',
                venue: 'COM3-01-23',
            },
            {
                day: 'Wednesday',
                time: '1400',
                recNum: '05',
                venue: 'COM3-01-23',
            },
        ],
        consultationTimings: [
            {
                day: 'Email for consult',
                time: 'Email for consult',
                venue: 'COM2-B1-03',
            },
        ],
        files: [
            {
                name: 'Recitation 1',
                slides: '/~bskch/files/ay2526s1/recitation1.pdf',
            },
            {
                name: 'Recitation 2',
                slides: '/~bskch/files/ay2526s1/recitation2.pdf',
            },
            {
                name: 'Recitation 3',
                slides: '/~bskch/files/ay2526s1/recitation3.pdf',
                extra: {
                    name: 'Bridging Methods',
                    link: '/~bskch/files/ay2526s1/bridging-methods.pdf',

                },
            },
            {
                name: 'Recitation 4',
                slides: '/~bskch/files/ay2526s1/recitation4.pdf',
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
