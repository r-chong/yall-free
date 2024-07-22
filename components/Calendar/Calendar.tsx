import React from 'react';

export default function Calendar() {
    const now = new Date();
    const dayOfWeek = now.getDay();
    let lastSunday: string = '';

    console.log('day of week', dayOfWeek);

    // 0 1 2 3 4 5 6 7
    // today is 1
    // so we subtract 1
    if (dayOfWeek === 0) {
        lastSunday = now.toISOString();
    } else {
        lastSunday = new Date(now.getTime() - dayOfWeek * 86400000)
            .toISOString()
            .substr(0, 10);
    }
    console.log('last sunday', lastSunday);

    return <div className='border-red-500 border-2'>calendar</div>;
}
