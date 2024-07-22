import Image from 'next/image';
import Calendar from '@/components/Calendar/Calendar';

export default function Home() {
    return (
        <main className='text-5xl'>
            y'all free?
            <Calendar />
        </main>
    );
}
