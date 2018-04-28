import React from 'react';
import { connect } from 'dva';
import Header from '../../components/public/Header/Header';
import Footer from '../../components/public/Footer/Footer';

const About = () => {
  return (
    <div>
      <Header />
      About
      <Footer />
    </div>
  );
}

About.propTypes = {
};

export default connect()(About);