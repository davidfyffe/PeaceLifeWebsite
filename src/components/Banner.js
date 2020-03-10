import React from 'react'

const Banner = (props) => (
    <section id="banner" className="major">
        <div className="inner">
            <header className="major">
                {/* <h1>Hi, my name is Diana</h1> */}
                <h2>Welcome to Peacelife Yoga</h2>
            </header>
            <div className="content">
                {/* <p>I am a Yogi in training.<br />
                    I can help you start your journey in Yoga with <em>posture</em>, <em>breathing</em> and <em>balance</em>.<br />
                I am in East Belfast, and have a lovely cosy studio space on Belmont Road. </p> */}

                <p>My name is Diana.
                    <br />
                    I am half way through my yoga teacher training and have started to share my journey and put all that I am learning into practice.
                    <br /> I am now taking small beginner yoga classes at reasonable rates in a cosy studio space in East Belfast.
                    I also offer small private group sessions - where catering for after your yoga and
                    relaxation is an option either in the studio space or below in the gorgeous café.
<br />Yoga really brought a sense of peace and calm into my life – I would love to
                    share it with you so if you are new to yoga and want to know more or want to get back into it please drop me a message with any questions.
<br />
                    <br />Namaste
<br />Diana</p>
                <ul className="actions">
                    <li><a href="#schedule" className="button next scrolly">Jump to class schedule</a></li>
                </ul>
            </div>
        </div>
    </section>
)

export default Banner
