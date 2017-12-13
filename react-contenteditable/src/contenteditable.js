import React, {Component} from 'react';

class ContentEditable extends Component {
	static defaultProps = {
		tagName: 'div',
		content: '',
		disabled: false,
		plainText: false,
		style: {
			minHeight: "360px",
			whiteSpace: "pre-wrap"
		}
	}

	componentDidMount() {
		if(this.props.plainText && this.htmlEle) {
			this.htmlEle.innerHTML = this.htmlEle.innerText;
		}
	}
	
	shouldComponentUpdate(nextProps) {
		const {props, htmlEle} = this;

		if(!htmlEle) {
			return true;
		}

		if(nextProps.content !== props.content ) {
			if(!props.plainText && nextProps.content !== htmlEle.innerHTML) {
				return true;
			}

			if(props.plainText && nextProps.content !== htmlEle.innerText) {
				return true;
			}
		}

		const params = ['style', 'className', 'disabled', 'plainText', 'tagName'];

		return params.some(name => props[name] !== nextProps[name]);
	}

	componentDidUpdate() {
		if(!this.htmlEle) {
			return;
		}

		const {props, htmlEle} = this;

		if(props.plainText && props.content !== htmlEle.innerText ||
			!props.plainText && props.content !== htmlEle.innerHTML) {
			htmlEle.innerHTML = props.content; 
		}
	}

	emitChange = (event) => {
		if(!htmlEle) {
			return;
		}

		const {htmlEle, props} = this;
		let content = props.plainText ? htmlEle.innerText : htmlEle.innerHTML;

		if(props.onChange && content !== this.lastContent) {
			event.target = {value: content};
			props.onChange(event);

			this.lastContent = content;
		}
	}

	render() {
		const {content, tagName, disabled, plainText, ...props} = this.props;

		return (
			<this.props.tagName {...props}
				ref={(ele) => this.htmlEle = ele}
				onInput={this.emitChange}
				onBlur={this.props.onBlur || this.emitChange}
				contentEditable = {!disabled}
				dangerouslySetInnerHTML={{__html: content}}>
				{this.props.children}
			</this.props.tagName>
		)
	}
}

export default ContentEditable;