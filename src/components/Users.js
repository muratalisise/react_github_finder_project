import React from 'react';
import User from './User';
import Loading from './Loading';

function Users({ users, loading }) {
	if (loading) {
		return <Loading />;
	} else {
		return (
			<div className='container mt-3'>
				<div className='row'>
					{users.map(user => (
						<div className='col-md-4' key={user.id}>
							<User user={user} />
						</div>
					))}
				</div>
			</div>
		);
	}
}

export default Users;
