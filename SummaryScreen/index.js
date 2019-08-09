import React, { Component } from 'react';
import { SummaryScreenContainer } from './Components/SummaryScreenContainer';

export default class SummaryScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      summaryTitle: this.props.navigation.state.params.summaryTitle,
      summary: this.props.navigation.state.params.summary,
    };
  }
  render() {
    return (
      <SummaryScreenContainer
        summaryTitle={this.state.summaryTitle}
        summary={this.state.summary}
      />
    );
  }
}
