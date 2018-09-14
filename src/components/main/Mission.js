import React from 'react'
import { Grid, GridRow, GridColumn } from 'semantic-ui-react';
import css from '../styles/styles.css'


const Mission = () =>
	(
		<div style={{ position: 'relative', background: 'white', width: '100%', paddingTop: '40px' }}>
			<div>
				<h2 className={css.h2Afr} style={{ textAlign: 'center' }}>Mission <span style={{ color: '#003571' }}>statement</span></h2>
				<div style={{ textAlign: 'center', paddingTop: '15px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
					<span className={css.border}></span>
					<span style={{ width: '8px', height: '8px', background: '#003571', display: 'inline-block', borderRadius: '50%', margin: '0 20px' }}></span>
					<span className={css.border}></span>
				</div>
			</div>
			<Grid style={{ margin: '0px', background: 'white' }}>
				<GridRow style={{ background: 'white', paddingTop: '80px' }} centered>
					<GridColumn style={{ background: 'white' }} className={css.flatDiv} textAlign='center' computer={12} tablet={14} mobile={15}>
						<p style={{ marginBottom: '40px' }}>VIEBEG Medical and Dental Supplies Ltd. supplies customers, such as hospitals and dentists with pharmaceutical products all over Kigali and Rwanda. Apart from offering dental products, VIEBEG also supplies other medical products and medical equipment. Our goal is to not only supply Kigali and other provinces of Rwanda but also Kongo, Burund, Kenya,Uganda, South Sudan and Tanzania. This expansion will be made on the principle of our mission, which is to bring customer satisfaction to our clients through innovation, efficient service delivery, competence, competitive pricing and flexibility.</p>
					</GridColumn>
				</GridRow>
			</Grid>
		</div>
	)


export default Mission;