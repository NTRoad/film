import React, { Component } from 'react';
import styles from './Search.less';

class Search extends Component {
  render() {
    return (
      <div className={styles.search}>
        <div className={styles.content}>
          <input type="search"
          placeholder="搜索电影，导演，演员.."/>
          <button>Go</button>
        </div>
      </div>
    );
  }
}

export default Search;