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
                        <header className="major">
                        <h4>
                            Mondays 6:15pm - 7:15pm @ Maitri Studio, East Belfast
                        </h4>
                        </header>

                        Join me on Monday nights for a class that will help promote space in the body and the mind setting you up for the week ahead.
                        Suitable for beginners and more experianced yogis.
                        <p />
                        <div>
                        
                        Monday night sessions are now fully booked - new block starting 1st November 2021.
                        </div>
                    </p>
                    <br/>
                    <p>
                        <header className="major">
                        <h4>
                            Mondays 10:00am - 11:00am @ The Den Studio, South Belfast
                        </h4>
                        </header>

                        Monday morning class suitable for beginners. These classes are accessible to all regardless of experiance or ability.
                        Each week we will explore moving the body within our own unique limits; incorporating our breath into our movements and introduce a little bit of stillness to the mind.

                        <p />
                        <div>
                        <p />
                        New four week block of classes starting 4th October.
                        <p />
                        Cost £36 for the full block of classes or £10 per class. Students £8 with valid student card.
                        </div>
                    </p>
                    
                    <br/>
                    <p>
                        <header className="major">
                        <h4>
                            Mum and baby Yoga starting in November
                        </h4>
                        </header>
                        Get in touch for more details.
                    </p>
                </div>

                </div>
                <ul className="actions">
                        
                    <li><a href="https://bookwhen.com/peacelifeyoga" className="button special">Book Now</a></li>
                        
                </ul>
            </div>
            
        </footer>

    </section>
};

export default Schedule
