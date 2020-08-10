class Control {
  constructor(app) {
    this.app = app;
  }

  exampleEventHandler = (event) => {
    console.log(event);
    // This was copied over from fractalsetc
    // let newDepth = Number(event.target.value);
    // let state = this.app.model.updateFigure(null, null, null, newDepth);
    // this.app.setState(state);
  }
}

export default Control;
