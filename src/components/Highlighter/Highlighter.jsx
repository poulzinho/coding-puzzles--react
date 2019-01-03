import React from 'react'
import hljs from 'highlight.js/lib/highlight';
import javascript from 'highlight.js/lib/languages/javascript';
import 'highlight.js/styles/monokai-sublime.css'

hljs.registerLanguage('javascript', javascript);

export class Highlighter extends React.PureComponent {

    componentDidMount() {
        hljs.configure({useBR: false});
        hljs.highlightBlock(this.node)
    }

    render() {
        let {children} = this.props;
        return (
            <pre
                ref={(node) => this.node = node}
            >
        <code className="javascript">
          {children}
        </code>
      </pre>
        )
    }
}

export default Highlighter
