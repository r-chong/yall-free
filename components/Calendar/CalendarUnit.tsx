import React from 'react';

export default function CalendarUnit(dateNum: number, isHighlighted: boolean) {
    return <div className='p-2 text-xl text-red-500'>{dateNum}</div>;
}
