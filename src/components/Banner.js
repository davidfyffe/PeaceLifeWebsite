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
<p>Hello my name is Diana. I founded PeaceLife Yoga so I could share my passion for yoga with others.
<br />
<br />
I offer down to earth beginners yoga classes at <a href="https://maitristudio.net/">Maitri Studio</a> in East Belfast, ideal for anyone stepping on the mat for the first time or returning to yoga after a break.
<br/>
<br/>
In my classes I aim to create a tranquil atmosphere where you can switch off from the outside world. I can offer small private group sessions which can be tailored to your needs,
and in the near future I will also be running mindfulness classes.
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
