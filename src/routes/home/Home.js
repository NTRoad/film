import React from 'react';
import { connect } from 'dva';
import styles from './Home.less';
import Header from '../../components/public/Header/Header';
import Footer from '../../components/public/Footer/Footer';
import Search from '../../components/home/search/Search';
import FilmList from '../../components/home/filmList/FilmList';
import Banner from '../../components/home/banner/Banner';

const Home = ({home, dispatch}) => {
  let bannerData = [];
  if(home.data&&home.data.code===1){
    bannerData = [
      home.data.data[6],
      home.data.data[1],
      home.data.data[2],
      home.data.data[4],
    ];
  }
  let newData = [];
  if(home.data&&home.data.code===1){
    for(let i=11;i<=60;i++){
      newData.push(home.data.data[i])
    }
  }
  let hotData = [];
  if(home.data&&home.data.code===1){
    for(let i=61;i<=110;i++){
      hotData.push(home.data.data[i])
    }
  }
  let moreData = [];
  if(home.data&&home.data.code===1){
    for(let i=111;i<=160;i++){
      moreData.push(home.data.data[i])
    }
  }
  return (
    <div className={styles.normal}>
      <Header />
      <Search />
      <Banner data={bannerData} dispatch={dispatch}/>
      <FilmList title="最新上映" data={newData} dispatch={dispatch}/>
      <FilmList title="热门电影" data={hotData} dispatch={dispatch}/>
      <FilmList title="更多资讯" data={moreData} dispatch={dispatch}/>
      <Footer />
    </div>
  );
}

Home.propTypes = {
};
const mapStateToProps = (state) => ({home:state.home});
export default connect(mapStateToProps)(Home);