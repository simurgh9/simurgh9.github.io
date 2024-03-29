// Copyright (C) 2020 Tashfeen, Ahmad

const TITLE = 'tashfeen.org';
const LOGO = 'لا';
const LOADING = 'Do, Re, Mi, Fa, Sol, La, Tiii...';
const DEFAULT_LANGUAGE = 'en-GB';

const ROOT = 'https://tashfeen.org/';
const RAW_DIR = 'raw/';
const HWJAX_LINK = 'utils/mathjax/hwjax.js';
const HOME = 'home.md';
const BOOKMARK = 'utils/json/home_aside.json';
const RESUME = 'utils/json/resume.json';

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
        lang: DEFAULT_LANGUAGE
      },
      mathjax: {
        link: this.prependRawDir(HWJAX_LINK),
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

  handleValidResponse(response) {
    if (!response.url.endsWith('.md')) {
      window.location.replace(response.url);
      return `[Click here](${response.url}) if not redirected.`;
    }
    return response.text();
  }

  fetchResume() {
    return fetch(this.prependRawDir(RESUME))
      .then(this.handleError)
      .then(rsp => rsp.json())
      .catch(error => error.message);
  }

  fetchPage(path) {
    let filename = path === '' ? HOME : path;
    let text = null;
    let aside = null;
    text = fetch(this.prependRawDir(filename))
      .then(this.handleError)
      .then(this.handleValidResponse)
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
    let language = this.extractLangTag(text);
    this.setReactState({
      page: {
        text: text,
        aside: aside,
        lang: language ? language : DEFAULT_LANGUAGE
      }
    });
  }

  updateMathJaxStateToLoaded() {
    this.setReactState({
      mathjax: {
        link: this.prependRawDir(HWJAX_LINK),
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

  absolutePath(base, relative) { // https://stackoverflow.com/a/14780463/12035739
    let searchFrom = 0;
    if (base.startsWith('https'))
      searchFrom = 'https://'.length;
    else if (base.startsWith('http'))
      searchFrom = 'http://'.length;
    let idx = base.indexOf('/', searchFrom) + 1;
    base = base.substring(0, idx) + RAW_DIR + base.substring(idx);
    base = base.split('/');
    let parts = relative.split('/');
    base.pop();
    for (let i = 0; i < parts.length; i++) {
      if (parts[i] === '.')
        continue;
      if (parts[i] === '..')
        base.pop();
      else
        base.push(parts[i]);
    }
    return base.join('/');
  }

  prependRawDir(name) {
    return ROOT + RAW_DIR + name;
  }

  getReactState() {
    return this.state;
  }

  setReactState(changes) {
    Object.assign(this.state, changes);
  }
}

export default Model;
