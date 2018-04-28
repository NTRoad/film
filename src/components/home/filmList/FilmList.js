import React from 'react';
import styles from './FilmList.less';
import {Link} from 'dva/router';

class FilmList extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      
    }
  }
  render(){
    console.log(this.props);
    // 270:39
    const data = this.props.data;
    const renderLis = () => {
      return data.map((item, index) => {
        if(index<12){
          return (
            <li key={index}>
              <Link to='/details'>
                <img src={require(`../../../assets/img/${item.movie_id}.jpg`)} alt="img"/>
              </Link>
              <p>{item.movie_name} <em>{item.movie_race}</em></p>
            </li>
          );
        }
      })
    }
    return (
        <div className={styles.filmList}>
          <div className={styles.content}>
            <div className={styles.listHeader}>
              <h1>{this.props.title}</h1>
              <Link to='/all'>更多>></Link>
            </div>
            <ul className={styles.listUl}>
              {renderLis()}
            </ul>
            <div className={styles.pageSub}></div>
          </div>
            
        </div>
    );
  }
}

export default FilmList;