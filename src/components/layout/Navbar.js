import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks  from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux';

const Navbar = (props) => {
    const { isAuthenticated } = props;
    // console.log(auth)
    const links = isAuthenticated ? <SignedInLinks/> : <SignedOutLinks/>
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to='/' className="brand-logo"> CHF </Link>
                {/* <SignedInLinks/>
                <SignedOutLinks/> */}
                {links}
            </div>
        </nav>
    )
}

const mapStateToProps = (state) => {
    // console.log(state);
    return {
        isAuthenticated: state.auth.isAuthenticated
    }
}

export default connect(mapStateToProps)(Navbar);