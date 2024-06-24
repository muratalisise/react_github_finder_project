import React from 'react';
import loader from './loader.gif';

const Loading = () => {
	return (
		<div>
			<img src={loader} alt='Loading...' style={{ width: '200px', display: 'block', margin: 'auto' }} />
		</div>
	);
};

export default Loading;
