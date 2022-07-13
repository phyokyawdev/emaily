import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class Landing extends Component {
  render() {
    if (this.props.auth) {
      return <Redirect to={"/surveys"} />;
    }

    return (
      <div style={{ textAlign: "center" }}>
        <h1>Emaily!</h1>
        Collect feedback from your users
        <div style={{ marginTop: "40px" }}>
          <a href="/auth/google" class="waves-effect waves-light btn">
            <i class="material-icons right">arrow_right</i>Start Here!
          </a>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(mapStateToProps)(Landing);
