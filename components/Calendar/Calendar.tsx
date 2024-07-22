import React from 'react';
import CalendarUnit from './CalendarUnit';

export default function Calendar() {
    const now = new Date();
    // console.log('now', now);
    const dayOfWeek = now.getDay();
    let lastSunday: Date = now;

    // console.log('day of week', dayOfWeek);

    // 0 1 2 3 4 5 6 7
    // today is 1
    // so we subtract 1
    if (dayOfWeek !== 0) {
        lastSunday = new Date(now.getTime() - dayOfWeek * 86400000);
    }
    // console.log('last sunday', lastSunday);

    let nextFourWeeks: List<Date> = [];
    for (let i: number = 0; i < 28; i++) {
        let newDay = new Date(lastSunday.getTime() + i * 86400000);
        nextFourWeeks.push(newDay);

        // console.log('day', newDay.toString(), newDay);
        // if (i % 7 == 0) {
        //     console.log(i, nextFourWeeks);
        // }
    }

    return (
        <div className='border-red-500 border-2'>
            {/* <CalendarUnit dateNum={1} isHighlighted={false} /> */}
            calendar
        </div>
    );
}
