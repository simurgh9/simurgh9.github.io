// Copyright (C) 2020 Tashfeen, Ahmad

const TITLE = 'tashfeen.org';
const LOGO = 'لا';
const LOADING = 'Do, Re, Mi, Fa, Sol, La, Tiii...';

const ROOT = 'https://tashfeen.org/';
const RAW_DIR = ROOT + 'raw/';
const HWJAX_LINK = RAW_DIR + 'mathjax/hwjax.js';
const HOME = 'home.md';
const BOOKMARK = 'home_aside.json';
const RESUME = 'resume.json';

class Model {
  constructor() {
    this.state = { // initial state
      header: {
        logo: LOGO,
        title: TITLE,
        nav: [
          { address: '/', name: 'Home' },
          { address: '/resume', name: 'Résumé' },
          { address: '/colophon.md', name: 'Colophon' }
        ]
      },
      page: {
        text: LOADING,
        aside: null,
        lang: null
      },
      mathjax: {
        link: HWJAX_LINK,
        loaded: false
      },
      resume: LOADING,
      footer: 'Copyright © 2020 Tashfeen'
    };
  }

  handleError(response) {
    if (!response.ok)
      throw Error(`${LOADING} Squeak-a-plinggg! Error ${response.status}.`);
    return response;
  }

  fetchResume() {
    return fetch(this.prependRawDir(RESUME))
      .then(this.handleError)
      .then(rsp => rsp.json())
      .catch(error => error.message);
  }

  fetchPage(path) {
    let filename = path === '' ? HOME : path;
    // what about other files, e.g., *.pdf and *.txt?
    filename = filename.endsWith('.md') ? filename : filename + '.md';
    let aside = null;
    let text = fetch(this.prependRawDir(filename))
      .then(this.handleError)
      .then(rsp => rsp.text())
      .catch(error => error.message);
    if (path === '')
      aside = fetch(this.prependRawDir(BOOKMARK))
        .then(this.handleError)
        .then(rsp => rsp.json())
        .catch(error => null);
    return Promise.all([text, aside]);
  }

  updateResumeState(json) {
    this.setReactState({ resume: json });
  }

  updatePageState(text, aside = null) {
    this.setReactState({
      page: {
        text: text,
        aside: aside,
        lang: this.extractLangTag(text)
      }
    });
  }

  updateMathJaxStateToLoaded() {
    this.setReactState({
      mathjax: {
        link: HWJAX_LINK,
        loaded: true
      }
    });
  }

  extractLangTag(text) {
    text = text.trim();
    let lastLine = text.substring(text.lastIndexOf('\n') + 1);
    lastLine = lastLine.replace(/\s/g, ''); // clearn all whitespace
    let rxp = /<!--lang:(.*?)-->/;
    if (!rxp.test(lastLine)) // is the last line a comment of form <!--lang:*-->?
      return null; // if not, there is no lang tag
    return rxp.exec(lastLine)[1]; // if yes, then return the lang code, e.g., ur
  }

  prependRawDir(name) {
    return RAW_DIR + name;
  }

  getReactState() {
    return this.state;
  }

  setReactState(changes) {
    Object.assign(this.state, changes);
  }
}

export default Model;
