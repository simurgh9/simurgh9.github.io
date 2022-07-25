// Copyright (C) 2020 Tashfeen, Ahmad

import { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeMathjaxBrowser from 'rehype-mathjax/browser';

class Markdown extends Component {
  handleLinks({ node, ...props }) {
    if (props.href.startsWith('http') || props.href.startsWith('mailto')) {
      return <a href={props.href} target='_blank' rel='noopener noreferrer'
        {...props}>{props.children}</a>;
    }
    return <Link to={props.href} rel='noopener noreferrer' {...props}></Link>;
  }

  handleImg = ({ node, ...props }) => {
    if (!props.src.startsWith('http') && !props.src.startsWith('/'))
      props.src = this.props.absolutePath(document.location.href, props.src);
    return <img src={props.src} alt={props.alt} title={props.title} {...props} />;
  }

  handleBidiText({ node, ...props }) {
    const Tag = node.tagName;
    if (Tag === 'ul' || Tag === 'ol')
      props.ordered = props.ordered ? 1 : 0;  // yeah but why do I need it?
    return <Tag dir='auto' {...props}>{props.children}</Tag>;
  }

  render() {
    return <ReactMarkdown  // github.com/remarkjs/react-markdown
      children={this.props.content}
      skipHtml={true}
      components={{
        a: this.handleLinks,
        img: this.handleImg,
        p: this.handleBidiText,
        ul: this.handleBidiText,
        ol: this.handleBidiText,
        h1: this.handleBidiText,
        h2: this.handleBidiText,
        h3: this.handleBidiText,
        h4: this.handleBidiText,
        h5: this.handleBidiText,
        h6: this.handleBidiText,
        table: this.handleBidiText
      }}
      rehypePlugins={[rehypeMathjaxBrowser]}
      remarkPlugins={[remarkGfm, remarkMath]} />;
  }
}

export default Markdown;
