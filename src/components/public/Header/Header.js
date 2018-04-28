import React from 'react';
import { Link, NavLink } from 'dva/router';
import { connect } from 'dva';
import styles from './Header.less';

const HeaderComponent = ({header, dispatch}) => {
  return (
    <div className={styles.header}>
      <div className={styles.content}>
          <Link to='/' className={styles.log}>
            <span>{header.logName}</span>
            <em>{header.logTitle}</em>
          </Link>
          <Link 
            to={header.isLogin?'/user':'/login'}
            className={styles.user}
          >
            <img src={require('../../../assets/yay.jpg')} 
             alt='user'
            />
          </Link>
          <div className={styles.menu}
          onClick={() => {dispatch({type:'header/changeShowValue'}); }}>
          </div>
          <ul 
            // className={styles.nav+" "+styles.show}
            className={!header.showNav?styles.nav:styles.nav+" "+styles.show}
          >
            {header.navList.map((list, index) => (
              <li key={`li-${index}`}>
                <NavLink 
                  exact
                  to={list.path}
                  onClick={() => {dispatch({type:'header/toNewUrl'}); }} 
                  activeClassName={styles.active}>{list.value}
                </NavLink>
              </li>
            ))}
          </ul>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({header:state.header});

const Header = connect(mapStateToProps)(HeaderComponent);
// Header.prototype = {
// };

export default Header;