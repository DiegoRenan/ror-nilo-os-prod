import './CompanyList.css'
import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { loadCompanies, remove } from '../../../actions/companies'

import Icon from '../../templates/Icon'
import Button from '../../templates/Button'

class CompanyList extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.loadCompanies()
  }

  renderRows() {
    let companies = this.props.companies || []
    return companies.map(company => (
      <tr key={company.id}>
        <td>{company.attributes.name}</td>
        <td> Fulano </td>
        <td><Icon icon='edit' /></td>
        <td><Button icon="trash" style="default" onClick={() =>  this.props.remove(company.id)} /></td>
      </tr>
    ))
  }

  render () {
    return (
      <table className='table'>
        <thead>
          <tr>
            <th>Nome</th>
            <th> - </th>
            <th> - </th>
            <th> - </th>
          </tr>
        </thead>
        <tbody>
          {this.renderRows()}
        </tbody>
      </table>
    )
  }
}

const mapStateToProps = state => ({ companies: state.companiesState.companies.data })
const mapDispatchToProps = dispatch => bindActionCreators({loadCompanies, remove}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(CompanyList)