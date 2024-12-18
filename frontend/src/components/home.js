import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/login">Login</Link>
      <ul>
        <li><Link to="/vendor">Vendor</Link></li>
        <li><Link to="/admin">Admin</Link></li>
        <li><Link to="/user">User</Link></li>
      </ul>
    </div>
  );
}

export default Home;