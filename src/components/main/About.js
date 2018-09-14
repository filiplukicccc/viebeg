import React, { Component } from 'react'
import { Grid, GridRow, GridColumn } from 'semantic-ui-react';
import { fadeInLeft, fadeInRight, zoomIn } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
import TrackVisibility from 'react-on-screen';
import css from '../styles/styles.css'

const styles = {
  fadeInLeft: {
    animation: 'x 3.5s',
    animationName: Radium.keyframes(fadeInLeft, 'fadeInLeft')
  },
  fadeInRight: {
    animation: 'x 3.5s',
    animationName: Radium.keyframes(fadeInRight, 'fadeInRight')
  },
  zoomIn: {
    animation: 'x 2.5s',
    animationName: Radium.keyframes(zoomIn, 'zoomIn')
  }
}

class AboutTechnologies extends Component {
  render() {
    return (
      <div style={{ marginTop: '700px', position: 'relative', background: 'white' }}>
        <Grid style={{ margin: '0px' }}>
          <GridRow centered>
            <GridColumn computer={12}>
              <p style={{ marginTop: '50px' }}>VIEBEG Medical and Dental Supplies is a leading medical supplies and equipment provider based in Kigali, Rwanda. The company offers high quality medical and dental supplies as well as equipment at the most attractive prices. VIEBEG was founded on the principles of quality, value and service. The company imports pharmaceutical products from reliable suppliers from Europe and Asia and distributes them in East Africa.</p>
            </GridColumn>
          </GridRow>
        </Grid>
        <TrackVisibility once throttleInterval={100}>
          {
            ({ isVisible }) => isVisible ?
              <StyleRoot>
                <div style={styles.zoomIn}>
                  <h2 className={css.h2Afr} style={{ textAlign: 'center' }}>About <span style={{ color: '#003571' }}>Us</span></h2>
                  <p style={{ textAlign: 'center' }}>First you should know</p>
                  <div style={{ textAlign: 'center', paddingTop: '15px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '50px' }}>
                    <span className={css.border}></span>
                    <span style={{ width: '8px', height: '8px', background: '#003571', display: 'inline-block', borderRadius: '50%', margin: '0 20px' }}></span>
                    <span className={css.border}></span>
                  </div>
                </div>
              </StyleRoot> : ''
          }
        </TrackVisibility>
        <Grid style={{ margin: '0px' }}>
          <GridRow centered>
            <GridColumn computer={12}>
            </GridColumn>
          </GridRow>
          <GridRow centered>
            <GridColumn computer={6} tablet={7} mobile={14}>
              <TrackVisibility once throttleInterval={100}>
                {
                  ({ isVisible }) => isVisible ?
                    <StyleRoot>
                      <div style={styles.fadeInLeft}>
                        <p><span style={{ height: '20px', background: '#003571', display: 'inline-block', width: '2px' }}></span><span style={{ color: '#003571', fontSize: '17px', paddingLeft: '5px' }}>VIEBEG Medical and Dental Supplies Ltd.</span> is a leading medical supplies and equipment provider in East Africa. We offer high quality medical and dental supplies and equipment at the most attractive prices. VIEBEG was founded on the principles of quality, value and service. Our mission is to bring convenience to our clients through innovation, efficient service delivery, competence and flexibility. We are dedicated to ensuring that our clients’ needs are met with the highest level of satisfaction.</p>
                      </div>
                    </StyleRoot> : ''
                }
              </TrackVisibility>
            </GridColumn>
            <GridColumn computer={6} tablet={7} mobile={14}>
              <TrackVisibility once throttleInterval={100}>
                {
                  ({ isVisible }) => isVisible ?
                    <StyleRoot>
                      <div style={styles.fadeInRight}>
                        <p><span style={{ height: '20px', background: '#003571', display: 'inline-block', width: '2px' }}></span><span style={{ color: '#003571', fontSize: '17px', paddingLeft: '5px' }}>Our long-term goals </span>are to help companies realising their growth potential by providing them with outstanding operational support. We are striving to make each customer experience with our business one that exceeds their expectations and brings value to their business. VIEBEG Medical and Dental Supplies Ltd. has over 15 years combined experience servicing the Pharmaceutical and Diagnostic sectors throughout Central and East Africa. Our sales representatives are fully up to date and knowledgeable about the fields we support. All our sales representatives attend regular training with our key suppliers ensuring they have the knowledge to support our customers. </p>
                      </div>
                    </StyleRoot> : ''
                }
              </TrackVisibility>
            </GridColumn>
          </GridRow>
        </Grid>
      </div>
    )
  }
}

export default AboutTechnologies;

