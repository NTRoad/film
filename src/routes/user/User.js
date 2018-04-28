import React from 'react';
import { connect } from 'dva';
// import { Route, Switch, Redirect, Link } from 'dva/router';
import Header from '../../components/public/Header/Header';
import Footer from '../../components/public/Footer/Footer';


class User extends React.Component{
  render(){
    console.log(this.props);
    console.log(this.props.match.url);
    return (
      <div>
        <Header />
        <div>
          User
        </div>
        <Footer />
      </div>
    );
  }
}

User.propTypes = {
};
const mapStateToProps = (state) => ({user:state.user});
export default connect(mapStateToProps)(User);