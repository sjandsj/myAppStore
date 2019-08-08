import React, { Component } from "react";
import { SummaryScreenContainer } from "./Components/SummaryScreenContainer";

export default class SummaryScreen extends Component {
  render() {
    return (
      <SummaryScreenContainer>
        {this.props.navigation.state.params.summaryTitle},
        {this.props.navigation.state.params.summary}
      </SummaryScreenContainer>
    );
  }
}
