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
                                <h3>Applied Medical</h3>
                                <p>UX Design | UI Design</p>
                            </header>
                            <Link to="/applied" className="link primary"></Link>
                        </article>
                        <article style={{backgroundColor: `black`}}>
                            <header className="major">
                                <h3>Appicture</h3>
                                <p>UX Design | UI Design</p>
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
                        <article style={{backgroundColor: `darkblue`}}>
                            <header className="major">
                                <h3>Wander</h3>
                                <p>UI Design | UX Case Study</p>
                            </header>
                            <Link to="/wander" className="link primary"></Link>
                        </article>
                        <article style={{backgroundColor: `darkgreen`}}>
                            <header className="major">
                                <h3>Etiam</h3>
                                <p>Feugiat amet tempus</p>
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