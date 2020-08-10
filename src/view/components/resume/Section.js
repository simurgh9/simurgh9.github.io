import '../../css/resume.css';

import React, { Component } from 'react';
import { SectionTitle } from './ResumeComponentIndex';


class Section extends Component {
  constructor(props) {
    super(props);
    let truncateAt = this.props.data[0] + 1, buttonLabel;
    if (truncateAt <= 0 || truncateAt > this.props.data.length)
      throw new Error(`Resume entry truncation limit out of bound: ${truncateAt - 1} for max ${this.props.data.length - 1} in resume section ${this.props.title}.`);
    if (truncateAt < this.props.data.length)
      buttonLabel = 'Show More';
    else
      buttonLabel = 'Show Less';
    this.state = {
      truncateAt: truncateAt,
      buttonLabel: buttonLabel
    };
  }

  toggleShow() {
    let truncateAt, buttonLabel;
    if (this.state.buttonLabel === 'Show More') {
      buttonLabel = 'Show Less';
      truncateAt = this.props.data.length;
    } else {
      buttonLabel = 'Show More';
      truncateAt = 0;
    }

    this.setState({
      truncateAt: truncateAt,
      buttonLabel: buttonLabel
    });
  }

  render() {
    let entries = [], i;
    let Entry = this.props.component;
    for (i = 1; i < this.state.truncateAt; i++) {
      entries.push(<Entry data={this.props.data[i]} key={i} />);
    }
    return (
      <section id='resume-section'>
        <SectionTitle name={this.props.title} />
        {entries}
        <div id='resume-button-space'>
          <button name='button' onClick={this.toggleShow.bind(this)}>
            {this.state.buttonLabel}
          </button>
        </div>
      </section>
    );
  }
}

export default Section;
