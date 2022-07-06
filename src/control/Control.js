// Copyright (C) 2020 Tashfeen, Ahmad

class Control {
  constructor(model) {
    this.model = model;
  }

  setFrame(frame) {
    this.frame = frame;
  }

  M() {
    return this.model;
  }

  updatePageState = (path) => {
    this.M().fetchPage(path).then(pg => {
      this.M().updatePageState(pg[0], pg[1]);
      this.frame.setState(this.M().getReactState());
    });
  }

  updateMathJaxStateToLoaded = (cdnMathjaxLink) => {
    let postMathJaxReadyFunction = () => {
      // mathJax is loaded, but not yet initialised
      window.MathJax.startup.defaultReady();
      // mathJax is initialised, and the initial typeset is queued
      this.M().updateMathJaxStateToLoaded();
      this.frame.setState(this.M().getReactState());
    };
    // http:tinyurl.com/28x3qlco
    // https:stackoverflow.com/a/65600713/12035739
    window.MathJax = {
      loader: {
        paths: {
          mathjax: cdnMathjaxLink
        }
      },
      startup: {
        ready: postMathJaxReadyFunction
      }
    };
  }

  updateResumeState = () => {
    this.M().fetchResume().then(json => {
      this.M().updateResumeState(json);
      this.frame.setState(this.M().getReactState());
    });
  }
}

export default Control;
