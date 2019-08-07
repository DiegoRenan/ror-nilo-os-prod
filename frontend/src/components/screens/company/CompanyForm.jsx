import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getCompany, changeCompany, add} from '../../../actions/companies'

import Grid from '../../templates/Grid'
import Input from '../../templates/Input'
import Button from '../../templates/Button'

class CompanyForm extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentWillMount() {
    if(this.props.id) {
      this.props.getCompany(this.props.id)
      console.log(this.props.data)
    }
  }

  render() {
    return (
      <div role='form' className='row'>
        <Grid cols="10 10 10 10">
          <Input type="text" value={this.props.company} onChange={this.props.changeCompany} />
        </Grid>
        <Grid cols="2 2 2 2">
          <Button icon="plus" style="primary" onClick={() => this.props.add(this.props.company)} />
        </Grid>
      </div>
    )
  }

}

const mapStateToProps = state => ({ company: state.companiesState.company, data: state.companiesState.response })
const mapDispatchToProps = dispatch => bindActionCreators({ getCompany, changeCompany, add }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(CompanyForm)
