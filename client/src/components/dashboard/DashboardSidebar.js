import React from 'react';
import { Link } from 'react-router-dom';

const DashboardSidebar = () => {
  return (
    <div className='dash-buttons'>
      <Link to='/edit-profile' className='btn-dash btn-light'>
        <i className='fas fa-edit text-primary' />
      </Link>
      <Link to='/add-experience' className='btn-dash btn-light'>
        <i className='fab fa-black-tie text-primary' />
      </Link>
      <Link to='/add-education' className='btn-dash btn-light'>
        <i className='fas fa-graduation-cap text-primary' />
      </Link>
    </div>
  );
};

export default DashboardSidebar;
