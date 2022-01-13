import React from 'react'
import profilePic from '../assets/images/DianaOnTable.png'

const Banner = (props) => (
    <section id="banner" className="major">
        <div className="inner">
            <header className="major">
                <h2><strong>Welcome to Peacelife Yoga</strong></h2>
            </header>
            <div className="content">
                <span className="image left"><img src={profilePic} alt="" /></span>
<p>Hello my name is Diana. I founded PeaceLife Yoga so I could share my passion for yoga with others.
<br />
<br />
I offer down to earth yoga classes in East Belfast.
 Classes are ideal for anyone stepping on the mat for the first time or returning to yoga after a break.
<br/>
<br /><strong>
I am also delighted to be offering Parent and Baby Yoga classes in Belmont Church Tower, East Belfast.
</strong> 

</p>

                <ul className="actions">
                    <li><a href="#schedule" className="button next scrolly">Jump to class schedule</a></li>
                    <li><a href="https://bookwhen.com/peacelifeyoga" className="button special">Book Now</a></li>
                </ul>
            </div>
        </div>
    </section>
)

export default Banner
