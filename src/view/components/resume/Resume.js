import '../../css/resume.css';

import React, { Component } from 'react';
import {
  Header, Section, SkillEntry, EducationEntry,
  WorkEntry, HonorsEntry
} from './ResumeComponentIndex';

class Resume extends Component {
  componentDidMount() {
    this.props.updateResumeState();
  }
  
  render() {
    if (typeof this.props.json === 'string')
      return <p>{this.props.json}</p>;
    return (
      <section id='resume'>
        <Header data={this.props.json.header}/>
        <Section title={'Education'}
          data={this.props.json.schools} component={EducationEntry} />
        <Section title={'Skills'}
          data={this.props.json.skills} component={SkillEntry} />
        <Section title={'Work Experience'}
          data={this.props.json.work} component={WorkEntry} />
        <Section title={'Research Experience'}
          data={this.props.json.research} component={WorkEntry} />
        <Section title={'Leadership et Honours'}
          data={this.props.json.honors} component={HonorsEntry} />
      </section>
    );
  }
}

export default Resume;
