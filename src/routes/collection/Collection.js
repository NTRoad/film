import React from 'react';
import { connect } from 'dva';
import Header from '../../components/public/Header/Header';
import Footer from '../../components/public/Footer/Footer';

class Collection extends React.Component{
  render(){
    return (
      <div>
        <Header />
        Collection
        <Footer />
      </div>
    );
  }
}

Collection.propTypes = {
};

export default connect()(Collection);