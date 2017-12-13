import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ContentEditable from '../lib/contenteditable';

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
		console.log(this.state.content);
		return (
			<ContentEditable style={style} content={this.state.content} onChange={this.handleChange} plainText={true} />
		)
	}
}

ReactDOM.render(<MyComponent />, document.getElementById('react-root'));