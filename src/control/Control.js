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
  
  clickEventHandler = (event) => {
    if (event.target.href) {
      this.M().setReactState(event.target.href);
      this.frame.setState(this.M().getReactState());
    }
  }
}

export default Control;
