import './CompanyUpdate.css'
import React from 'react'

import Main from '../../templates/Main'
import Grid from '../../templates/Grid'
import CompanyForm from './CompanyForm'

export default props =>
  <Main title="Empresas" >
    <div className="display-4">Atualizar Empresa</div>
    <div className="formCompany row justify-content-md-center">
      <Grid cols="12 12 6 6">
        <CompanyForm id={props.match.params.id}/>
      </Grid>
    </div>
  </Main>