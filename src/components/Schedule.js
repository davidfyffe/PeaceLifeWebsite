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
        let newDate = new Date(dt.getFullYear(), dt.getMonth(), dt.getDate());
        newDate.setDate(dt.getDate() + (n * 7));
        return newDate;
    }

    let generateTable = function () {
        let startDate = new Date(2020, 10, 16); //9th March
        var i;
        for (i = 1; i <= 8; i++) {
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

    return <section id="schedule">
        <footer id="schedule">
        <div className="inner">
            <div className="table-wrapper2">
                <header className="major">
                    <h3>Class Schedule</h3>

                </header>

                <div className="content">
                <p>
                Classes have moved to Zoom until after Christmas.
                </p>
                <p>
                <header className="major">
                    <h4>
                    Mondays 6:30pm - 7:30pm
                    </h4>
                </header>
                Join me on Monday nights for a class that will help promote space in the body and the mind setting you up for the week ahead.
                <p/>
                <header className="major">
                    <h4>
                        Fridays 12:05pm to 12:50pm
                    </h4>
                </header>
                Friday lunchtime class is a mellow flow lasting 45 minutes aimed at winding down for the weekend.

                <p/>
                Both classes are suitable for beginners or more experienced yogis.
                All you will need is a device such as a laptop or tablet to access Zoom and a yoga mat.
                </p>
                <p>
                Contact me below or by social media to reserve a place or if you have any questions please get in touch.
                </p>
                </div>

            </div>
        </div>
    </footer>
    </section>
};

export default Schedule
