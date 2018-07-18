import React from 'react';
import Typist from 'react-typist';
import PropTypes from 'prop-types';

export default class TypistCycle extends React.Component {
  constructor(props) {
    super(props);

    this.totalCycles = this.props.numberOfCycles;
    this.isInfinite = (this.totalCycles < 0);

    this.lineDidFinish = this.lineDidFinish.bind(this);

    this.state = {
      currentLine: 0,
      cyclesCompleted: 0,
    };
  }

  lineDidFinish() {
    let nextLine = this.state.currentLine;
    let timeout = this.props.segmentDelay * 1000;

    if (nextLine >= this.props.content.length) {
      nextLine = 0;
      timeout = 0;
    } else {
      nextLine += 1;
    }

    let nextCycle = this.state.cyclesCompleted;
    if (nextLine === 0) {
      nextCycle += 1;
    }

    setTimeout(() => {
      this.setState({
        currentLine: nextLine,
        cyclesCompleted: nextCycle,
      });
    }, timeout);
  }

  render() {
    const shouldCallback = (this.state.cyclesCompleted < this.totalCycles || (this.isInfinite));
    const callback = shouldCallback ? this.lineDidFinish : null;

    const lineToPrint = this.props.content[this.state.currentLine];

    const typistKey = `typist-${this.state.currentLine}:${this.state.cyclesCompleted}`;

    return (
      <Typist
        key={typistKey}
        onTypingDone={() => callback()}

        className={this.props.className}
        avgTypingDelay={this.props.avgTypingDelay}
        stdTypingDelay={this.props.stdTypingDelay}
        startDelay={this.props.startDelay}
        cursor={{show: false}}
        onCharacterTyped={this.props.onCharacterTyped}
        onLineTyped={this.props.onLineTyped}
        delayGenerator={this.props.delayGenerator}
      >
        <h1 style={{color: '#FE2851'}}>{lineToPrint}</h1>
      </Typist>
    );
  }
}
TypistCycle.propTypes = {
  ...Typist.propTypes,
  numberOfCycles: PropTypes.number,
  content: PropTypes.arrayOf(PropTypes.string).isRequired,
  segmentDelay: PropTypes.number,
};
TypistCycle.defaultProps = {
  numberOfCycles: 1,
  segmentDelay: 0.44,
};