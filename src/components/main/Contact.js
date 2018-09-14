import React, { Component } from 'react'
import { Grid, GridRow, GridColumn, Form, Input, TextArea, Dimmer, Loader, Icon } from 'semantic-ui-react';
import Map from './Map';
import css from '../styles/styles.css';
import style from '../styles/styleHol.css';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      subject: "",
      message: "",
      serverMessage: "",
      loader: 'none'
    }
  }


  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  validate = () => {
    let condition;
    let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (this.state.name !== "" && this.state.email !== "" && this.state.email.match(emailRegex) && this.state.subject !== "" && this.state.message !== "") {
      return condition = true
    } else {
      return condition = false
    }
  }

  sendMail = async (e) => {
    let condition = this.validate();
    if (condition) {
      this.setState({
        loader: 'block'
      })
      const data = {
        name: this.state.name,
        email: this.state.email,
        subject: this.state.subject,
        message: this.state.message
      }
      await fetch('https://viebeg.com/api/groupForm', {
        body: JSON.stringify(data),
        headers: {
          'content-type': 'application/json'
        },
        method: 'POST'
      }).then((response) => response.text())
        .then((responseText) => {
          let res = JSON.parse(responseText)
          if (res.success == true) {
            this.setState({
              serverMessage: 'Email sent successfully!',
              loader: 'none'
            })
          } else {
            this.setState({
              serverMessage: 'An error has occurred!'
            })
          }
        })
    }
  }

  cleanState = (e) => {
    this.setState({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
  }



  render() {
    const { name, email, subject, message } = this.state
    return (
      <div style={{ width: '100%', background: 'white', position: 'relative', paddingTop: '90px' }}>
        <h2 style={{ textAlign: 'center' }} className={style.contactH2Gr}>CONTACT<span style={{ color: '#003571' }}> US</span></h2>
        <p style={{ textAlign: 'center', marginBottom: '20px' }}>Feel free to contact us</p>
        <div style={{ textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '50px' }}>
          <span className={css.border}></span>
          <span style={{ width: '8px', height: '8px', background: '#003571', display: 'inline-block', borderRadius: '50%', margin: '0 20px' }}></span>
          <span className={css.border}></span>
        </div>
        <Grid style={{ margin: '0px' }}>
          <Grid.Row centered>
            <GridColumn computer={10} tablet={12} moble={16}>
              <div>
                <Form onSubmit={(e) => { this.sendMail(); this.cleanState(); }}>
                  <div className={style.inputsDiv}>
                    <Input
                      placeholder='Name'
                      name='name'
                      value={name}
                      onChange={this.handleChange}
                      className={style.inputs}
                    />
                    <Input
                      placeholder='Email'
                      name='email'
                      value={email}
                      onChange={this.handleChange}
                      className={style.inputs}
                    />
                    <Input
                      placeholder='Subject'
                      name='subject'
                      value={subject}
                      onChange={this.handleChange}
                      className={style.inputs}
                    />
                  </div>
                  <TextArea
                    placeholder='Message...'
                    name='message'
                    value={message}
                    onChange={this.handleChange}
                  />
                  <div style={{ display: `${this.state.loader}` }}>
                    <Dimmer active style={{ background: 'rgba(0,0,0,0.25)', borderRadius: '5px' }}>
                      <Loader size='big'>Loading</Loader>
                    </Dimmer>
                  </div>
                  <Form.Button className={style.buttonCon} content='Send' />
                </Form>
                <div style={{ textAlign: 'center' }}>{this.state.serverMessage}</div>
              </div>
            </GridColumn>
          </Grid.Row>
        </Grid>
        <div style={{ textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '50px', marginTop: '30px' }}>
          <span className={style.borderCon}></span>
          <span style={{ width: '8px', height: '8px', background: '#003571', display: 'inline-block', borderRadius: '50%', margin: '0 20px' }}></span>
          <span className={style.borderCon}></span>
        </div>
        <Grid style={{ margin: '0px' }}>
          <GridRow>
            <GridColumn computer={8} tablet={16} mobile={16}>
              <Grid>
                <GridRow className={style.branch} centered>
                  <GridColumn computer={8} tablet={16} mobile={16}>
                    <div style={{ marginTop: '100px' }} className={style.contact}>
                      <div className={style.contactDiv}>
                        <span style={{ color: '#003571' }}>ADDRESS</span><br />
                        <span style={{ color: '#414a4c' }}>Downtown Building 3rd Floor F 316<br />Kigali, Rwanda</span>
                      </div>
                      <Icon name='location arrow' size='big' className={css.iconWhite} />
                    </div>
                    <div className={style.contact}>
                      <div className={style.contactDiv} >
                        <span style={{ color: '#003571' }}>SAY HELLO </span><br />
                        <span style={{ color: '#414a4c' }}>alex@viebeg.com<br />tobias@viebeg.com</span>
                      </div>
                      <Icon name='mail' size='big' className={css.iconWhite} />
                    </div>
                    <div className={style.contact}>
                      <div className={style.contactDiv} >
                        <span style={{ color: '#003571' }}>PHONE </span><br />
                        <span style={{ color: '#414a4c' }}>+250 787 104 894</span>
                      </div>
                      <Icon name='phone' size='big' className={css.iconWhite} />
                    </div>
                  </GridColumn>
                </GridRow>
              </Grid>
            </GridColumn>
            <GridColumn style={{ padding: '0px' }} computer={8} tablet={16} mobile={16}>
              <div className={style.map}>
                <Map />
              </div>
            </GridColumn>
          </GridRow>
        </Grid>

      </div>
    )
  }
}

export default Contact;
