import React, { Component } from 'react'
import { GridRow, GridColumn, Grid } from 'semantic-ui-react';
import logo from '../../images/logoWhite.png';

class Footer extends Component {
  render() {
    return (
      <div>
        <Grid style={{ margin: '0px' }}>
          <GridRow centered style={{ background: 'rgba(14,39,81,1)', color: 'white', padding: '40px 0' }}>
            <GridColumn computer={3} tablet={7} mobile={12}>
              <img width='180px' src={logo} />
            </GridColumn>
            <GridColumn computer={3} tablet={7} mobile={12}>
              <h4 style={{ textAlign: 'center' }}>ADDRESS</h4>
              <p>Downtown Building 3rd Floor F 316<br />
                Kigali, Rwanda</p>
            </GridColumn>
            <GridColumn computer={3} tablet={7} mobile={12}>
              <h4 style={{ textAlign: 'center' }}>E-MAIL</h4>
              <p>alex@viebeg.com<br />tobias@viebeg.com<br />
              </p>
            </GridColumn>
            <GridColumn computer={3} tablet={7} mobile={12}>
              <h4 style={{ textAlign: 'center' }}>PHONE</h4>
              <p>
                +250 787 104 894
							</p>
            </GridColumn>
          </GridRow>
        </Grid>
      </div>
    )
  }
}
export default Footer;
