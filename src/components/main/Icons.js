import React from 'react'
import { Grid, GridRow, GridColumn } from 'semantic-ui-react';
import medal from '../../images/medal.png';
import services from '../../images/customer-service.png';
import doctor from '../../images/doctor.png';
import discount from '../../images/discount.png';
import style from '../styles/styleHol.css';


const Icons = () =>
	(
		<div>
			<Grid style={{ margin: '0px' }}>
				<GridRow style={{ background: 'white', paddingTop: '80px' }} centered>
					<GridColumn textAlign='center' className={style.flatDiv} computer={3} tablet={7} mobile={12}>
						<div className={style.flatBack}>
							<img src={medal} />
							<h3>QUALITY</h3>
						</div>
					</GridColumn>
					<GridColumn className={style.flatDiv} textAlign='center' computer={3} tablet={7} mobile={12}>
						<div className={style.flatBack}>
							<img src={services} />
							<h3>SERVICES</h3>
						</div>
					</GridColumn>
					<GridColumn className={style.flatDiv} textAlign='center' computer={3} tablet={7} mobile={12}>
						<div className={style.flatBack}>
							<img src={doctor} />
							<h3>VALUE</h3>
						</div>
					</GridColumn>
					<GridColumn className={style.flatDiv} textAlign='center' computer={3} tablet={7} mobile={12}>
						<div className={style.flatBack}>
							<img src={discount} />
							<h3>ATTRACTIVE PRICES</h3>
						</div>
					</GridColumn>
				</GridRow>
			</Grid>
		</div>
	)


export default Icons;