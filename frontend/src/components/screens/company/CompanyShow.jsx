import './Company.css'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


import Main from '../../templates/Main'
import Input from '../../templates/Input'
import Grid from '../../templates/Grid'
import Button from '../../templates/Button'
import { getCompany } from '../../../actions/companies'

class CompanyUpdate extends Component {

  componentWillMount() {
    this.props.getCompany(this.props.match.params.id)
  }
  
  render() {
    return (
      <Main title="Empresas" >
        <div className="display-4">Empresas</div>
        <div className="company">
          <div className='row'>
            <Grid cols="2 2 2 2">
              <label> Nome: </label>
            </Grid>
            <Grid cols="10 10 10 10">
              {this.props.name}
            </Grid>
          </div>
        </div>
      </Main>
    )
  }
}

const mapStateToProps = state => ({ id: state.companiesState.id, name: state.companiesState.company })
const mapDispatchToProps = dispatch => bindActionCreators({ getCompany }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(CompanyUpdate)