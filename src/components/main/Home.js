import React, { Component } from 'react'
import Navbar from './Navbar';
import Video from './Video';
import About from './About'
import Icons from './Icons'
import Mission from './Mission';
import Counter from './Counter';
import Team from './Team';
import Contact from './Contact';
import Footer from './Footer';
import ScrollableAnchor from 'react-scrollable-anchor';
import { configureAnchors } from 'react-scrollable-anchor';

configureAnchors({ offset: -60, scrollDuration: 800 })


export default class HomeMedical extends Component {

	render() {
		return (
			<div>
				<ScrollableAnchor id={'home'}>
					<Navbar />
				</ScrollableAnchor>
				<Video />
				<ScrollableAnchor id={'about'}>
					<About />
				</ScrollableAnchor>
				<Icons />
				<Mission />
				<Counter />
				<ScrollableAnchor id={'managment'}>
					<Team />
				</ScrollableAnchor>
				<ScrollableAnchor id={'contact'}>
					<Contact />
				</ScrollableAnchor>
				<Footer />
			</div>
		)
	}
}
