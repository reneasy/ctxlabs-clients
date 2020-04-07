import React, { Component } from 'react';
import PropTypes from 'prop-types'; // ES6
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons'

import './Client.css';

class Client extends Component {
	constructor(props) {
		super(props);		

		this.state = {
			details: false
		};

		this.toggleDetails = this.toggleDetails.bind(this);
	}

	componentWillUnmount() {
		this.setState({details: false})
	}

	toggleDetails() {
		this.setState(prevState => ({
			details: !prevState.details
		}));
	}

	render() {
		const {avatar, name, title, quote, nationality, keyIndex} = this.props

		return (
			<li key={keyIndex}
				className="Client-item">
				<div className="Client-basic-info">
					<img src={avatar} 
						className="Client-avatar" 
						alt="avatar" />
					<div>
						<p className="Client-name" dangerouslySetInnerHTML={{__html: name}}></p>
						<p className="Client-title">
							{title}
						</p>
						<button className={`Client-expand ${this.state.details ? 'active' : ''}`}
							onClick={this.toggleDetails}>
								<FontAwesomeIcon icon={faEllipsisH} />
						</button>
					</div>
				</div>
				{this.state.details && (<div className="Client-details">
					<div>
						<p className="Client-quote-label">Quote</p>
						<p className="Client-quote">{quote || "No Quote Found"}</p>
					</div>
						
					<div className="Client-nationality">
						<span>Nationality:</span>{' '}
						<strong>{nationality || "Unknown"}</strong>
					</div>
				</div>)}
			</li>
			);
	}
}

 
Client.propTypes = {
	avatar: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	quote: PropTypes.string.isRequired,
	nationality: PropTypes.string,
	keyIndex: PropTypes.number.isRequired,
}

Client.defaultProps = {
	nationality: "",
}

export default Client;
