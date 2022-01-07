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

  updateResumeState = () => {
    this.M().fetchResume().then(json => {
      this.M().updateResumeState(json);
      this.frame.setState(this.M().getReactState());
    });
  }
}

export default Control;
