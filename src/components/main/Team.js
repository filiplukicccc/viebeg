
import React, { Component } from 'react'
import { Grid, GridRow, GridColumn, Image } from 'semantic-ui-react';
import tobias from '../../images/F4.png';
import alex from '../../images/F1.jpg';
import css from '../styles/styles.css'
import style from '../styles/styleHol.css'

class Managment extends Component {
	render() {
		return (
			<div style={{ position: 'relative', background: 'white', width: '100%', paddingTop: '90px' }}>
				<h2 className={css.managment + " " + css.manAfr} style={{ marginBottom: '25px', textAlign: 'center' }}>Managment</h2>
				<div style={{ textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '50px' }}>
					<span className={css.border}></span>
					<span style={{ width: '8px', height: '8px', background: '#003571', display: 'inline-block', borderRadius: '50%', margin: '0 20px' }}></span>
					<span className={css.border}></span>
				</div>
				<Grid style={{ width: '100%', background: 'white', margin: '0px' }}>
					<GridRow style={{ background: 'white' }} centered>
						<GridColumn style={{ background: 'white' }} className={style.imgHoli} computer={4} mobile={14}>
							<Image style={{ width: '280px', margin: '0 auto' }} src={tobias} circular />
							<h3 className={css.employers}>Tobias Reiter, MSc.</h3>
							<h4 className={css.employersH4}>Founder and Director of Corporate Development</h4>
							<p>While studying International Business Administration at Vienna University of Economics and Business, Tobias developed an arbitrage alert service. His academic experience in St. Petersburg, Russia, at the Graduate School of Management and at the University of Groningen in the Netherlands, where Tobias earned a Master‘s degree in International Business and Management, has enabled him to build an international business network. Tobias Reiter’s work experience in Africa, the U.S. and Asia as well as his various entrepreneurial activities allowed him to acquire experience in a number of different industries.</p>
						</GridColumn>
						<GridColumn style={{ background: 'white' }} className={style.imgHoli} computer={4} mobile={14}>
							<Image style={{ width: '280px', margin: '0 auto' }} src={alex} circular />
							<h3 className={css.employers}>Alex Musyoka, BSc.</h3>
							<h4 className={css.employersH4}>Managing Director</h4>
							<p>Born in Nairobi, Kenya, Alex Musyoka has acquired a deep understanding of the pharmaceutical industry. Before joining VIEBEG MEDICAL, Alex worked as a manager for more than 8 years for several companies engaging in pharmaceutical distribution in East Africa. He holds a Bachelor’sdegree in Business Administration. Alex’ received valuable training abroad, such as in Dubai, where he worked closely with experts on finding high quality products that suit the East African market. Besides his precious product know-how and market knowledge, Alex is extremely skilled when it comes to analyse the market, business development and networking.</p>
						</GridColumn>
					</GridRow>
				</Grid>
			</div>
		)
	}
}

export default Managment;
