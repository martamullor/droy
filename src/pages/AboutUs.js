/* eslint-disable indent */
import React, { Component } from 'react'
import NavBar from '../components/droy/NavBar'
import { Link } from 'react-router-dom'
import '../styles/about-us.css'

class AboutUs extends Component {
    render() {
        return (
            <main>
                <div className='fixed-nav'>
                    <NavBar />
                </div>
                <section className='section-home-about'>
                    <h2 className='title-home'>Free Website Builder</h2>
                    <h1 className='text-home'>Create awesome websites! <br /> No coding and free.</h1>
                    <Link className='button-home' to='/login'>Empieza ahora</Link>
                </section>
                <section className='section-container'>
                    <div className='section-container-info'>
                        <h3>What is Mobirise?</h3>
                        <p>Mobirise is a free offline app for Windows and Mac to easily
                        create small/medium websites, landing pages, online resumes and portfolios.
                        2500+ beautiful website blocks, templates and themes help you to start easily.</p>
                    </div>
                    <div className='section-container-info'>
                        <h3>Who is it for?</h3>
                        <p>Mobirise is a free offline app for Windows and Mac to easily
                        create small/medium websites, landing pages, online resumes and portfolios.
                        2500+ beautiful website blocks, templates and themes help you to start easily.</p>
                    </div>
                    <div className='section-container-info'>
                        <h3>Why Mobirise?</h3>
                        <p>Mobirise is a free offline app for Windows and Mac to easily
                        create small/medium websites, landing pages, online resumes and portfolios.
                        2500+ beautiful website blocks, templates and themes help you to start easily.</p>
                    </div>
                </section>
                <section className='section-container-column'>
                    <h3 className='section-title'>How DROY works?</h3>
                    <div className='section-container-info'>
                        <h3>Drag blocks to page</h3>
                        <p>Start with creating a new website and picking up the theme. Then expand the blocks
                        panel with the big red plus button in the lower right corner and start dragging the
                        blocks you like.</p>
                    </div>
                </section>
            </main>
        )
    }
}

export default AboutUs
