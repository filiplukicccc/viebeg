import React, { Component } from 'react';
import { Grid, GridRow, GridColumn } from 'semantic-ui-react';
import CountUp from 'react-countup';
import image from '../../images/med1.jpg';
import { Parallax } from 'react-parallax';
import TrackVisibility from 'react-on-screen';
import css from '../styles/styles.css'

class Counter extends Component {
  render() {
    return (
      <div style={{ width: '100%' }}>
        <Parallax bgImage={image} strength={-100} >
          <div className={css.counterHome}>
            <div style={{ width: '100%', height: '100%', background: 'rgba(0,0,0,0.90)', position: 'absolute', top: '0px', left: '0px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <TrackVisibility throttleInterval={300} style={{ width: '100%' }}>
                {
                  ({ isVisible }) => isVisible ?
                    <Grid className={css.counterGrid} style={{ width: '100%', zIndex: '2', color: 'white' }}>
                      <GridRow centered>
                        <GridColumn textAlign='center' computer={3} tablet={7} mobile={15}><p><CountUp duration={4.75} start={0} end={230} /></p> <p>CLIENTS</p>
                        </GridColumn>
                        <GridColumn textAlign='center' computer={3} tablet={7} mobile={15}><p><CountUp duration={3.75} start={0} end={15} /></p> <p> YEARS OF EXPIRIENCE</p></GridColumn>
                        <GridColumn textAlign='center' computer={3} tablet={7} mobile={15}><p><CountUp duration={4.75} start={0} end={2} /></p>  <p>CONTINENTS</p></GridColumn>
                        <GridColumn textAlign='center' computer={3} tablet={7} mobile={15}><p><CountUp duration={3.75} start={0} end={21} /></p> <p>EMPLOYEES</p></GridColumn>
                      </GridRow>
                    </Grid> : ''
                }
              </TrackVisibility>
            </div>
          </div>
        </Parallax>
      </div>
    )
  }
}

export default Counter;
