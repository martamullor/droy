/* eslint-disable indent */
import React, { Component } from 'react'
import NavBar from '../components/droy/NavBar'
import { Link } from 'react-router-dom'
import '../styles/about-us.css'

class AboutUs extends Component {
    render () {
        return (
            <main>
                <NavBar />
                <section className='section-home-about'>
                    <h2>Free Website Builder</h2>
                    <h1>Create awesome websites! No coding and free.</h1>
                    <Link to='/login'>Empieza ahora</Link>
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
            </main>
        )
    }
}

export default AboutUs
