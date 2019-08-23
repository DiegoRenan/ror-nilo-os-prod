import './Tool.css'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { logout } from '../../auth/authActions'

class Tool extends Component {

  constructor(props) {
    super(props)
  }

  render() {

    const { name, email } = this.props.user
    
    return (
      <div className="nav-item dropdown ">
        
        <a className="nav-link dropdown-toggle" 
          href="#" 
          id="navbarDropdown" 
          role="button" 
          data-toggle="dropdown" 
          aria-haspopup="true" 
          aria-expanded="false">
          
          {name} 

        </a>

        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          {/* <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a> */}
          <div class="dropdown-divider"></div>
          <a class="dropdown-item"
             onClick={this.props.logout} 
             href="#">
               Sair
          </a>
        </div>
      </div>
    )

  }

}

const mapStateToProps = state => ({ user: state.auth.user })
const mapDispatchToProps = dispatch => bindActionCreators({ logout }, dispatch)
export default connect (mapStateToProps, mapDispatchToProps)(Tool)

