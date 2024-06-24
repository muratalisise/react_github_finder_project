import React, { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Navbar from './components/Navbar';
import Users from './components/Users';
import axios from 'axios';
import Search from './components/Search';
import Alert from './components/Alert';

function App() {
	const [users, setUsers] = useState([]);
	const [loading, setLoading] = useState(false);
	const [alert, setAlert] = useState(null);

	const searchUsers = (keyword) => {
		setLoading(true);
		axios.get(`https://api.github.com/search/users?q=${keyword}`)
			.then(response => {
				setUsers(response.data.items);
				setLoading(false);
				console.log(response.data.items);
			})
			.catch(error => {
				console.log('Veriler getirilirken hata oluştu', error);
				setLoading(false);
			});
	};

	const clearUsers = () => {
		setUsers([]);
	};

	const showAlert = (msg, type) => {
		setAlert({ msg, type });
		setTimeout(() => setAlert(null), 3000);
	};

	return (
		<div>
			<Navbar title="Github Finder" icon={faGithub} />
			<div className="container mt-3">
				{alert && <Alert alert={alert} />}
				<Search searchUsers={searchUsers} clearUsers={clearUsers} showClearButton={users.length > 0} showAlert={showAlert} />
				<Users users={users} loading={loading} />
			</div>
		</div>
	);
}

export default App;
