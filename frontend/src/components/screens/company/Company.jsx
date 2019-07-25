import './Company.css'
import React, { Component } from 'react'

import Main from '../../templates/Main'
import Input from '../../templates/Input'
import Grid from '../../templates/Grid'
import Button from '../../templates/Button'
import CompanyList from '../../templates/CompanyList';

export default class Company extends Component {

  render() {
    return(
      <Main title="Empresas" >
        <div className="display-4">Empresas</div>
        <div className="company">
          <div role='form' className='row'>
            <Grid cols="10 10 10 10">
              <Input type="text"/>
            </Grid>
            <Grid cols="2 2 2 2">
              <Button icon="plus" style="primary"/>
            </Grid>
          </div>
          <CompanyList />
        </div>
      </Main>
    )
  }

}