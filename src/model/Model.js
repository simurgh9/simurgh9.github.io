// Copyright (C) 2020 Tashfeen, Ahmad

const TITLE = 'tashfeen.org';
const LOGO = 'لا';

const LOADING = 'Do, Re, Mi, Fa, Sol, La, Tiii...';
const ROOT = 'https://tashfeen.org/raw/';

const HOME = 'home.md';
const BOOKMARK = 'home_aside.json';
const RESUME = 'resume.json';

class Model {
  constructor() {
    this.state = {
      title: TITLE,
      logo: LOGO,
      loading: LOADING,
      root: ROOT,
      home: HOME,
      bookmark: BOOKMARK,
      resume: RESUME
    };
  }

  getReactState() {
    return this.state;
  }

  setReactState(url) {
    console.log(`I will set state as f(${url})`);
  }
}

export default Model;
