## react-contenteditable

React component for a div with editable contents.

## Usage

```jsx
import React, {Component} from 'react';
import ContentEditable from './lib/contenteditable';

const style = {
    padding: "6px 10px",
    border: "1px solid #ddd",
    color: "#111",
    minHeight: "360px",
    outline: "none",
    overflow: "auto",
    fontSize: "16px",
    borderRadius: "3px",
    whiteSpace: "pre-wrap"
};

class MyComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: ''
        }
    }

    handleChange = (event) => {
        this.setState({'content': event.target.value})
    }

    render() {
        return (
            <ContentEditable style={style} content={this.state.content} onChange={this.handleChange} />
        )
    }
}
```

## Structure
- lib/ compiled javascript.
- src/ source javascript. Uses JSX and ES6.
- test/ example about how to use the component.