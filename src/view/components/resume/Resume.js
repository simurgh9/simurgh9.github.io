import '../../css/resume.css';

import React, { Component } from 'react';
import {
  Header, Section, SkillEntry, EducationEntry,
  WorkEntry, HonorsEntry
} from './ResumeComponentIndex';

class Resume extends Component {
    constructor(props) {
    super(props);
    this.state = {
      resumeDataFetched: false,
      resumeData: this.props.loading
    };
  }

  componentDidMount() {
    fetch(this.props.resumeUrl)
      .then(response => {
        return response.json();
      }).then(json => {
        this.setState({ resumeDataFetched: true, resumeData: json });
      });
  }
  
  render() {
    let downloadUrl = this.props.resumeUrl.replace('.json', '_tashfeen.pdf');
    if (!this.state.resumeDataFetched) {
      return <p>{this.state.resumeData}</p>;
    }
    return (
      <section id='resume'>
        <Header downloadUrl={downloadUrl} data={this.state.resumeData.header}/>
        <Section title={'Education'}
          data={this.state.resumeData.schools} component={EducationEntry} />
        <Section title={'Skills'}
          data={this.state.resumeData.skills} component={SkillEntry} />
        <Section title={'Work Experience'}
          data={this.state.resumeData.work} component={WorkEntry} />
        <Section title={'Research Experience'}
          data={this.state.resumeData.research} component={WorkEntry} />
        <Section title={'Leadership et Honours'}
          data={this.state.resumeData.honors} component={HonorsEntry} />
      </section>
    );
  }
}

export default Resume;
