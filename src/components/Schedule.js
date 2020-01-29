import React from 'react'

const Schedule = (props) => (
    <footer id="schedule">
        <div className="inner">
            <div className="table-wrapper2">
                <header className="major">
                    <h3>Class Schedule</h3>
                    <p>Upcoming class dates</p>
                </header>
                <table >
                    <thead>
                    <tr>
                        <th></th>
                        <th>When</th>
                        <th>Status</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>week 1</td>
                        <td>13 Jan 2002</td>
                        <td>complete</td>
                    </tr>
                    <tr>
                        <td>week 2</td>
                        <td>20 Jan 2002</td>
                        <td>complete</td>
                    </tr>
                    <tr>
                        <td>week 3</td>
                        <td>27 Jan 2002</td>
                        <td>complete</td>
                    </tr>
                    <tr>
                        <td>week 4</td>
                        <td>03 Feb 2002</td>
                        <td>spaces available</td>
                    </tr>
                    <tr>
                        <td>week 5</td>
                        <td>10 Feb 2002</td>
                        <td>spaces available</td>
                    </tr>
                    <tr>
                        <td>week 6</td>
                        <td>17 Feb 2002</td>
                        <td>spaces available</td>
                    </tr>
                    </tbody>
                    {/*<tfoot>*/}
                    {/*<tr>*/}
                    {/*    <td colSpan="2"></td>*/}
                    {/*    <td>100.00</td>*/}
                    {/*</tr>*/}
                    {/*</tfoot>*/}
                </table>
            </div>
        </div>
    </footer>
);

export default Schedule
