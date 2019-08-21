import React, { Component } from 'react'
import { Field, reduxForm, values } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { login } from './authActions'
import Grid from '../components/templates/Grid'
import Input from '../components/templates/form/Input'

class Auth extends Component {
  constructor(props) {
    super(props)
  }

  onSubmit() {
    const  { login } = this.props
    login(values)
  }

  render() {
    const { handleSubmit } = this.props

    return (
      <div className="login-box">
        <div className="login-logo">OsApp</div>
        <div className="login-box-body">
          <p className="login-box-msg">Bem vindo!</p>
          <form onSubmit={handleSubmit(v => this.onSubmit(v))} >
            <Field Component={Input} type="input" name="email" placeholder="E-mail" icon="envelop" />
            <Field Component={Input} type="password" name="password" placeholder="Senha" icon="lock" />
          </form>
          <div className="row">
            <Grid cols="4">
              <button type="submit"
                      className="btn btn-primary btn-block btn-flat" >
                      Entrar
              </button>
            </Grid>
          </div>
        </div>
      </div>
    )
  
  }

}

Auth = reduxForm({ form: 'authForm' })(Auth)
const mapDispatchToProps = dispatch => bindActionCreators({ login }, dispatch)
export default connect(null, mapDispatchToProps)(Auth)
