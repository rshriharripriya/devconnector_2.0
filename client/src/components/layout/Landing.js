import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <section className='landing'>
      <div className='dark-overlay'>
        <div className='landing-inner'>
          <h1 className='x-large'>Welcome</h1>
          {/*<p className='lead'>*/}
          {/*  Create a developer profile/portfolio, share posts and get help from*/}
          {/*  other developers*/}
          {/*</p>*/}
          <div className='buttons'  >
            <div className='transition'>
              <Link to='/register' className='btn btn-primary'>
              Sign Up
            </Link>
                </div>
            <Link to='/login' className='btn btn-light'>
              Login
            </Link>

          </div>
        </div>
      </div>
    </section>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);