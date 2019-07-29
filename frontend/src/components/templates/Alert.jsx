import './Alert.css'
import React, { Component } from 'react'
import { connect } from 'react-redux'

class Alert extends Component {
  constructor(props) {
    super(props)
    this.state = { hidden: ' '}
  }
  
  componentDidUpdate() {
    setTimeout(() => {
      this.setState({...this.state, hidden: 'hidden'})
    }, 5000);
  }

  render() {
    return (
      <section className="alert">
        <div className={`alert-box alert-` + this.props.http_code + ` ` + this.state.hidden }>
          {this.props.message}
        </div>
      </section>
    )
  }

}

const mapStateToProps = state => ({
  http_code: state.alertState.http_code,
  message: state.alertState.message
})

export default connect(mapStateToProps)(Alert)