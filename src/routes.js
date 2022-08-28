// src/routes.js
import React from 'react';
import { BrowserRouter as Router, Routes as RRoutes, Route } from 'react-router-dom';

import App from './components/App';
import About from './components/About';
import Login from './components/Login';

const Routes = () => (
	<Router history="">
		<div className="pageWrapper">
      <RRoutes>
        <Route path="/" element={<App/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/login" element={<Login/>} />
      </RRoutes>
		</div>
	</Router>
);

export default Routes;