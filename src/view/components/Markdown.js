// Copyright (C) 2020 Tashfeen, Ahmad

import { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import remarkGfm from 'remark-gfm';
import rehypeKatex from 'rehype-katex';
import { Link } from 'react-router-dom';


class Markdown extends Component {
  handleLinks({ node, ...props }) {
    if (props.href.startsWith('http') || props.href.startsWith('mailto')) {
      return <a href={props.href} target='_blank' rel='noopener noreferrer'
        {...props}>{props.children}</a>;
    }
    return <Link to={props.href} rel='noopener noreferrer' {...props}></Link>;
  }

  render() {
    return (<ReactMarkdown  // github.com/remarkjs/react-markdown
      children={this.props.content}
      skipHtml={true}
      components={{ a: this.handleLinks }}
      remarkPlugins={[remarkMath, remarkGfm]}
      rehypePlugins={[rehypeKatex]} />
    );
  }
}

export default Markdown;
