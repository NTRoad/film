import React from 'react';
import { connect } from 'dva';
import styles from './Footer.less'

class Footer extends React.Component{
  render(){
    return (
        <div className={styles.footer}>
            Footer
        </div>
    );
  }
}

export default connect()(Footer);