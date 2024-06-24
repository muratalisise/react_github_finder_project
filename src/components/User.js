import React, { Component } from 'react';

class User extends Component {
	render() {
		const { login, avatar_url, html_url } = this.props.user;
		return (
			<div>
				<div className='card'>
					<img src={avatar_url} className='img-fluid' alt={login} />
					<div className='card-body'>
						<h5 className='card-title'>{login}</h5>
						<a className='btn btn-primary' href={html_url}>Go Profile</a>
					</div>
				</div>
			</div>
		);
	}
}

export default User;
