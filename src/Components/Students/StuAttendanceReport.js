import FullCalendar from '@fullcalendar/react';
import React from 'react';
import dayGridPlugin from '@fullcalendar/daygrid'

const classAttend = [
    {
        date: '2022-06-02',
        title: 'absent',
        color: 'red'
    },
    {
        date: '2022-06-04',
        title: 'Present',
        color: 'green'
    }, {
        date: '2022-06-03',
        title: 'absent',
        color: 'red'
    }, {
        date: '2022-06-01',
        title: 'Present',
        color: 'green'
    }, {
        date: '2022-06-05',
        title: 'Present',
        color: 'green'
    },
]


const StuAttendanceReport = () => {
    return (
        <div
            className="h-[600px] w-[50%] mx-auto"
        >
            <FullCalendar
                events={classAttend}
                eventTimeFormat={'DD-MM-YYYY'}
                eventDisplay={'background'}
                height={'100%'}
                plugins={[dayGridPlugin]}
                windowResize={e => console.log(e.view.getCurrentData())}
                initialView="dayGridMonth"
            />
        </div>
    );
};

export default StuAttendanceReport;