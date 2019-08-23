import './auth.css'
import React, { Component } from 'react'
import { Field, reduxForm, values } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { signin } from './authActions'
import Input from '../components/templates/form/Input'

class Auth extends Component {
  constructor(props) {
    super(props)
  }

  onSubmit() {
    const  { signin } = this.props
    signin(values)
  }

  render() {
    const { handleSubmit } = this.props

    return (
      <div className="container-fluid">
        <aside className="col-sm-4 mx-auto login-box"> 
          <div className="card">
            <article className="card-body">
            <div className="login-logo"></div>
              <h4 className="card-title text-center mb-4 mt-1">Sign in</h4>
              <hr />
              <p className="text-success text-center">OsApp</p>
              <div className="login-box-body">
                <form onSubmit={handleSubmit(v => this.onSubmit(v))} >
                  <Field component={Input} type="input" name="email" placeholder="E-mail" icon="user" />
                  <Field component={Input} type="password" name="password" label="Password" icon="lock" />
                </form>
                <div className="form-group">
                    <button type="submit"
                            className="btn btn-primary btn-block btn-flat" >
                            Entrar
                    </button>
                </div>
              </div>
            </article>
          </div>
        </aside>
      </div>
    )
  
  }

}

Auth = reduxForm({ form: 'authForm' })(Auth)
const mapDispatchToProps = dispatch => bindActionCreators({ signin }, dispatch)
export default connect(null, mapDispatchToProps)(Auth)
