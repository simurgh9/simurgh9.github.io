import '../../css/resume.css';

import React, { Component } from 'react';
import {
  Header, Section, SkillEntry, EducationEntry,
  WorkEntry, HonorsEntry
} from './ResumeComponentIndex';


class Resume extends Component {
  render() {
    return (
      <section id='resume'>
        <Header data={this.props.resumeData.header}/>
        <Section title={'Education'}
          data={this.props.resumeData.schools} component={EducationEntry} />
        <Section title={'Skills'}
          data={this.props.resumeData.skills} component={SkillEntry} />
        <Section title={'Work Experience'}
          data={this.props.resumeData.work} component={WorkEntry} />
        <Section title={'Research Experience'}
          data={this.props.resumeData.research} component={WorkEntry} />
        <Section title={'Leadership et Honours'}
          data={this.props.resumeData.honors} component={HonorsEntry} />
      </section>
    );
  }
}

export default Resume;
