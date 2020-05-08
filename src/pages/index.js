import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'


class HomeIndex extends React.Component {
    render() {

        return (
            <Layout>
                <Helmet
                    title="matt"
                    meta={[
                        { name: 'description', content: 'Sample' },
                        { name: 'keywords', content: 'sample, something' },
                    ]}
                >
                </Helmet>

                <Banner />

                <div id="main">
                    <section id="one" className="tiles">
                        <article style={{backgroundColor: `teal`}}>
                            <header className="major">
                                <h3 style ={{color: `white`}}>Applied Medical</h3>
                                <p style ={{color: `white`}}>UX Design | UI Design</p>
                            </header>
                            <Link to="/applied" className="link primary"></Link>
                        </article>
                        <article style={{backgroundColor: `black`}}>
                            <header className="major">
                                <h3 style ={{color: `white`}}>Appicture</h3>
                                <p style ={{color: `white`}}>UX Design | UI Design</p>
                            </header>
                            <Link to="/appicture" className="link primary"></Link>
                        </article>
                        <article style={{backgroundColor: `gray`}}>
                            <header className="major">
                                <h3>Epinex Diagonstics</h3>
                                <p>Digital Marketing</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundColor: `goldenrod`}}>
                            <header className="major">
                                <h3>Golden Vision Optometry</h3>
                                <p>Web Design | Digital Marketing</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundColor: `#7A8DB5`}}>
                            <header className="major">
                                <h3 style={{color: `white`}}>Wander</h3>
                                <p style={{color: `white`}}>UI Design | UX Case Study</p>
                            </header>
                            <Link to="/wander" className="link primary"></Link>
                        </article>
                        <article style={{backgroundColor: `darkgreen`}}>
                            <header className="major">
                                <h3 style={{color: `white`}}>Etiam</h3>
                                <p style={{color: `white`}}>Feugiat amet tempus</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                    </section>
                
                </div>

            </Layout>
        )
    }
}

export default HomeIndex