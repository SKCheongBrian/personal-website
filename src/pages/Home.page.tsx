import { Welcome } from '../components/Welcome/Welcome';
import { LayoutPage } from '@/pages/Layout.page';

export function HomePage() {
    return (
        <LayoutPage>
            <Welcome />
        </LayoutPage>
    );
}
