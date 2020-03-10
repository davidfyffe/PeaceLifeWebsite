import React from 'react'

const Schedule = () => {

    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];

    let classSchedule = [{}];

    function add_weeks(dt, n) {
        let newDate = new Date();
        newDate.setDate(dt.getDate() + (n * 7));
        return newDate;
    }

    let generateTable = function () {
        let startDate = new Date(2020, 2, 9); //9th March
        var i;
        for (i = 1; i <= 6; i++) {
            let newWeek = add_weeks(startDate, i - 1); //week 1 = 9th March. not 9th + 1 week.
            classSchedule.push(
                {
                    week: `week ${i}`,
                    when: `${newWeek.getDate()} ${months[newWeek.getMonth()]} ${newWeek.getFullYear()}`,
                    status: newWeek < new Date() ? 'complete' : newWeek.getTime() === new Date().getTime() ? "tonight!" : "scheduled"
                }
            )
        }
    };

    generateTable();

    function generateRows() {
        return (
            classSchedule.map((row) => (

                    <tr>
                        <td>{row.week}</td>
                        <td>{row.when}</td>
                        <td>{row.status}</td>
                    </tr>
                )
            ))
    }

    return <footer id="schedule">
        <div className="inner">
            <div className="table-wrapper2">
                <header className="major">
                    <h3>Class Schedule</h3>
                    <p>Upcoming class dates</p>
                </header>
                <table>
                    <thead>
                    <tr>
                        <th></th>
                        <th>When</th>
                        <th>Status</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        generateRows()
                    }
                    </tbody>
                </table>
            </div>
        </div>
    </footer>

};

export default Schedule
