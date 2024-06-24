import React, { Component } from 'react';

export class Search extends Component {
	constructor(props) {
		super(props);
		this.state = {
			keyword: ''
		};
	}

	onChange = (e) => {
		this.setState({
			keyword: e.target.value
		});
	}

	onSubmit = (e) => {
		e.preventDefault();
		if (this.state.keyword === '') {
			this.props.showAlert("Lütfen Anahtar Kelime Giriniz..", "warning");
		} else {
			this.props.searchUsers(this.state.keyword);
			this.setState({ keyword: '' });
		}
	}

	render() {
		return (
			<div className='container'>
				<form onSubmit={this.onSubmit}>
					<div className="input-group">
						<input onChange={this.onChange} value={this.state.keyword} type="text" className='form-control' placeholder="Search Users..." />
						<div className='input-group-append'>
							<button type='submit' className='btn btn-primary'>Search</button>
						</div>
					</div>
				</form>
				{
					this.props.showClearButton &&
					<button onClick={this.props.clearUsers} className="btn btn-secondary btn-sm btn-block mt-2 w-100">Clear Results</button>
				}
			</div>
		);
	}
}

export default Search;
