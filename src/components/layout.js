import React from 'react'

import '../assets/scss/main.scss'
import Header from './Header'

import Contact from './Contact'
import Footer from './Footer'
import Schedule from "./Schedule";

class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isMenuVisible: false,
            loading: 'is-loading'
        };
        this.handleToggleMenu = this.handleToggleMenu.bind(this)
    }

    componentDidMount () {
        this.timeoutId = setTimeout(() => {
            this.setState({loading: ''});
        }, 100);
    }

    componentWillUnmount () {
        if (this.timeoutId) {
            clearTimeout(this.timeoutId);
        }
    }

    handleToggleMenu() {
        this.setState({
            isMenuVisible: !this.state.isMenuVisible
        })
    }

    render() {
        const { children } = this.props;

        return (
            <div className={`body ${this.state.loading} ${this.state.isMenuVisible ? 'is-menu-visible' : ''}`}>
                <div id="wrapper">
                    <Header />   
                    {children}
                    <Schedule/>
                    <Contact />
                    <Footer />
                </div>
            </div>
        )
    }
}

export default Layout
