import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic05 from '../assets/images/pic05.jpg'
import pic06 from '../assets/images/pic06.jpg'

import headdown from '../assets/images/IMG_7058.jpg'
import bumup from '../assets/images/IMG_7232.jpg'
import grouptalk from '../assets/images/IMG_7233.jpg'
import layflat from '../assets/images/IMG_7235.jpg'
import downdog from '../assets/images/IMG_7236.jpg'
import lunge from '../assets/images/IMG_7237.jpg'
import crossleg from '../assets/images/IMG_7238.jpg'
import handup from '../assets/images/image2.jpeg'
import twisty from '../assets/images/twisty.jpeg'


class HomeIndex extends React.Component {
    render() {

        return (
            <Layout>
                <Helmet
                    title="PeaceLife Yoga"
                    meta={[
                        { name: 'description', content: 'PeaceLife Yoga' },
                        { name: 'keywords', content: 'PeaceLife, Yoga, Belfast, Northern Ireland' },
                    ]}
                >
                </Helmet>

                <Banner />

                <div id="main">
                    <section id="one" className="tiles">
                        <article style={{backgroundImage: `url(${handup})`}}>
                            <header className="major">
                                <h3>FUK</h3>
                                <p>There's a crack in ceiling</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${grouptalk})`}}>
                            <header className="major">
                                <h3>Chat and a natter</h3>
                                <p>Group bonding is important</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${twisty})`}}>
                            <header className="major">
                                <h3>Eagle pose</h3>
                                <p>Twisty</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${lunge})`}}>
                            <header className="major">
                                <h3>Lunge</h3>
                                <p>I will be the twister queen</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${downdog})`}}>
                            <header className="major">
                                <h3>Bridge</h3>
                                <p>Over troubled water</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        {/*<article style={{backgroundImage: `url(${pic06})`}}>*/}
                        {/*    <header className="major">*/}
                        {/*        <h3>Etiam</h3>*/}
                        {/*        <p>Feugiat amet tempus</p>*/}
                        {/*    </header>*/}
                        {/*    <Link to="/landing" className="link primary"></Link>*/}
                        {/*</article>*/}
                        <article >
                            <table>
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
                                    <td>01 Jan 202</td>
                                    <td>complete</td>
                                </tr>
                                <tr>
                                    <td>week 2</td>
                                    <td>01 Jan 202</td>
                                    <td>complete</td>
                                </tr>
                                <tr>
                                    <td>week 3</td>
                                    <td>01 Jan 202</td>
                                    <td>complete</td>
                                </tr>
                                <tr>
                                    <td>week 4</td>
                                    <td>01 Jan 202</td>
                                    <td>spaces available</td>
                                </tr>
                                <tr>
                                    <td>week 5</td>
                                    <td>01 Jan 202</td>
                                    <td>spaces available</td>
                                </tr>
                                <tr>
                                    <td>week 6</td>
                                    <td>01 Jan 202</td>
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
                        </article>
                    </section>
                    {/*<section id="two">*/}
                    {/*        <div className="inner">*/}
                    {/*            <header className="major">*/}
                    {/*                <h2>Current Classes</h2>*/}
                    {/*            </header>*/}
                    {/*            <div className="table-wrapper">*/}
                    {/*                <table>*/}
                    {/*                    <thead>*/}
                    {/*                    <tr>*/}
                    {/*                        <th></th>*/}
                    {/*                        <th>When</th>*/}
                    {/*                        <th>Status</th>*/}
                    {/*                    </tr>*/}
                    {/*                    </thead>*/}
                    {/*                    <tbody>*/}
                    {/*                    <tr>*/}
                    {/*                        <td>week 1</td>*/}
                    {/*                        <td>01 Jan 202</td>*/}
                    {/*                        <td>complete</td>*/}
                    {/*                    </tr>*/}
                    {/*                    <tr>*/}
                    {/*                        <td>week 2</td>*/}
                    {/*                        <td>01 Jan 202</td>*/}
                    {/*                        <td>complete</td>*/}
                    {/*                    </tr>*/}
                    {/*                    <tr>*/}
                    {/*                        <td>week 3</td>*/}
                    {/*                        <td>01 Jan 202</td>*/}
                    {/*                        <td>complete</td>*/}
                    {/*                    </tr>*/}
                    {/*                    <tr>*/}
                    {/*                        <td>week 4</td>*/}
                    {/*                        <td>01 Jan 202</td>*/}
                    {/*                        <td>spaces available</td>*/}
                    {/*                    </tr>*/}
                    {/*                    <tr>*/}
                    {/*                        <td>week 5</td>*/}
                    {/*                        <td>01 Jan 202</td>*/}
                    {/*                        <td>spaces available</td>*/}
                    {/*                    </tr>*/}
                    {/*                    <tr>*/}
                    {/*                        <td>week 6</td>*/}
                    {/*                        <td>01 Jan 202</td>*/}
                    {/*                        <td>spaces available</td>*/}
                    {/*                    </tr>*/}
                    {/*                    </tbody>*/}
                    {/*                    /!*<tfoot>*!/*/}
                    {/*                    /!*<tr>*!/*/}
                    {/*                    /!*    <td colSpan="2"></td>*!/*/}
                    {/*                    /!*    <td>100.00</td>*!/*/}
                    {/*                    /!*</tr>*!/*/}
                    {/*                    /!*</tfoot>*!/*/}
                    {/*                </table>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</section>*/}
                </div>

            </Layout>
        )
    }
}

export default HomeIndex