import React, { Component } from 'react';
import movie from '../../images/Heart.mp4';
import { Grid, GridRow, GridColumn } from 'semantic-ui-react';
import { zoomInDown, fadeIn } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
import css from '../styles/styles.css'

const styles = {
  zoomInDown: {
    animation: 'x 3s',
    animationName: Radium.keyframes(zoomInDown, 'zoomInDown')
  }
}


class Video extends Component {
  render() {
    return (
      <Grid style={{ marginLeft: '-15px', marginRight: '0px' }}>
        <GridRow centered>
          <GridColumn width={16}>
            <div style={{ position: 'fixed', width: '100%' }}>
              <div className={css.videoDiv + " " + css.imgAfr}>
                <div style={{ flexDirection: 'column', background: 'rgba(0,53,113,0.84)' }} className={css.shadowDiv}>
                  <StyleRoot>
                    <h1 style={styles.zoomInDown}>Welcome to  <span style={{ display: 'inline', fontSize: '50px', fontWeight: '400' }}> VIEBEG</span></h1>
                  </StyleRoot>
                  <p style={{ fontSize: '18px' }}><i>Medical and Dental Supplies Ltd.</i></p>
                </div>
                <video style={{ width: '100%' }} className={css.videoCover} autoPlay loop src={movie}>
                </video>
                <div></div>
              </div>
            </div>
          </GridColumn>
        </GridRow>
      </Grid>
    )
  }
}
export default Video;