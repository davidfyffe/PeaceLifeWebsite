import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import grouptalk from '../assets/images/IMG_7233.jpg'
import lunge from '../assets/images/IMG_7237.jpg'
import handup from '../assets/images/image2.jpeg'
import twisty from '../assets/images/twisty.jpeg'
import savasana from '../assets/images/SavasnaOther.jpeg'
import diCert from '../assets/images/DiCert_crop.jpeg'


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
                                <h3>Extended side angle pose</h3>
                                <p>Strengthens the legs, knees and ankles, while also stretching and toning the abdominal muscles</p>
                            </header>
                        </article>
                        
                        <article style={{backgroundImage: `url(${twisty})`}}>
                            <header className="major">
                                <h3>Balancing poses</h3>
                                <p>Promote concentration and calm, strengthen our muscles and build our coordination and balance</p>
                            </header>
                        </article>

                        <article style={{backgroundImage: `url(${lunge})`}}>
                            <header className="major">
                                <h3>High lunge</h3>
                                <p>Strengthens and tones the thighs, hips and buttocks, while the balancing aspect helps to develop flexible stability</p>
                            </header>
                        </article>

                        <article style={{backgroundImage: `url(${grouptalk})`}}>
                            <header className="major">
                                <h3>Private group sessions</h3>
                                <p>A great way to bond and relax with friends or colleagues</p>
                            </header>
                        </article>

                        <article style={{backgroundImage: `url(${savasana})`}}>
                            <header className="major">
                                <h3>Savasana - relaxation</h3>
                                <p>Savasana at the end of class. It allows us to reap the benefits of our physical endeavours</p>
                            </header>
                        </article>
                        <article style={{backgroundImage: `url(${diCert})`}}>
                            <header className="major">
                                <h3>Yoga Alliance Professional</h3>
                                <p>Half way through my teaching training journey</p>
                            </header>
                        </article>
                    </section>
                </div>
            </Layout>
        )
    }
}

export default HomeIndex