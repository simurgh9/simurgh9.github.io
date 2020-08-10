// Copyright (C) 2020 Tashfeen, Ahmad

import RESUME from './json_data/resume.json';
import BOOKMARKS from './json_data/bookmarks.json';


class Model {
  getReactState() {
    return {
      resumeData: this.getResumeData(),
      bookmarks: this.getBookmarks()
    };
  }

  getResumeData() {
    return RESUME;
  }

  getBookmarks() {
    return BOOKMARKS.bookmarks;
  }
}

export default Model;
