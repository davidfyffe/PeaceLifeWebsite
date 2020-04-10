import React from 'react'
import profilePic from '../assets/images/DianaProfile1.png'

const Banner = (props) => (
    <section id="banner" className="major">
        <div className="inner">
            <header className="major">
                <h2>Welcome to Peacelife Yoga</h2>
            </header>
            <div className="content">
                <span className="image left"><img src={profilePic} alt="" /></span>
<p>Hello my name is Diana and I am a trainee yoga teacher and founder of Peacelife Yoga.
<br />
I am half way through my teaching and have started putting all that I am learning into practice by offering small down to earth beginners yoga classes above Ronnies on the Belmont Road.
<br/>
This is a beautiful space with a really tranquil atmosphere. I also offer small private group sessions which can be tailored to your needs.
<br />
<br />
So go on.... take some time out for yourself and step into the wonderful world of yoga, the benefits are endless - drop me a message to book.
<br />
*please note pre booking is essential
<br />
</p>

                <ul className="actions">
                    <li><a href="#schedule" className="button next scrolly">Jump to class schedule</a></li>
                </ul>
            </div>
        </div>
    </section>
)

export default Banner
