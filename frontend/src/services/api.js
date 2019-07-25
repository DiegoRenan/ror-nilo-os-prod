import axios from 'axios'

const url = axios.create({ 
  baseURL: 'http://localhost:3000',
  headers: {'Accept': 'application/vnd.api+json'} 
})

export default {
  loadTickets: () => url.get("/v1/tickets"),
  loadCompanies: () => url.get("/v1/companies")
}