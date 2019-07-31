import './Alert.css'
import React, { Component } from 'react'
import { connect } from 'react-redux'

class Alert extends Component {

  render() {
    return (
      <section className="alert">
        <div className={`alert-box alert-` + this.props.http_code + ` ` + this.props.hidden }>
          {this.props.message}
          {console.log(this.props.hidden)}
        </div>
      </section>
    )
  }

}

const mapStateToProps = state => ({
  http_code: state.alertState.http_code,
  message: state.alertState.message,
  hidden: state.alertState.hidden
})

export default connect(mapStateToProps)(Alert)