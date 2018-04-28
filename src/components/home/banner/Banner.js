import React from 'react';
import { Link } from 'dva/router';
import styles from './Banner.less';
import { setTimeout } from 'core-js';


let timer = null;
class Banner extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      nowIndex : 0,
      prevIndex:-1,
      data:this.props.data.length!==0?this.props.data:[],
      speed:0,
      nowInOpacity:0,
      nowOutOpacity:1
    }
  }
  componentDidMount(){
    // console.log('hh');
    // setTimeout(()=>{
    //   if(this.setState.nowIndex<3){
    //     this.setState({
    //       prevIndex:this.state.nowIndex,
    //       nowIndex:this.state.nowIndex+1
    //     })
    //   }else{
    //     this.setState({
    //       prevIndex:this.state.nowIndex,
    //       nowIndex:0
    //     });
    //   }
      
    // },3000);
  }
  componentDidUpdate(){
    clearTimeout(timer);
    timer=setTimeout(()=>{
      if(this.state.nowIndex<3){
        this.setState({
          prevIndex:this.state.nowIndex,
          nowIndex:this.state.nowIndex+1
        })
      }else{
        this.setState({
          prevIndex:this.state.nowIndex,
          nowIndex:0
        });
      }
      
    },4000);
  }
  handleSpanClick(index){
    clearTimeout(timer);
    this.setState({
      prevIndex:this.state.nowIndex,
      nowIndex:index
    });
  }
  render(){
    const data = this.props.data.length!==0?this.props.data:[];
    const renderLis = () => {
      return data.map((item, index) => {
        return (
          <li key={index}
          className={this.state.nowIndex===index?styles.liIn:
          this.state.prevIndex===index?styles.liOut:''}
          >
            <Link to="/details">
              <img src={require(`../../../assets/img/${item.movie_id}.jpg`)} alt="img"/>
            </Link>
          </li>
        );
      })
    }
    return (
      <div className={styles.banner}>
        <div className={styles.content}>
          
          <div className={styles.showImg}>
            <ul className={styles.bigUl}>
              {renderLis()}
            </ul>
            <div className={styles.subs}>
              {data.map((ele,index) => {
                return (
                  <span key={index}
                  className={this.state.nowIndex===index?styles.spanIn:
                  this.state.prevIndex===index?styles.spanOut:''}
                  onClick={this.handleSpanClick.bind(this,index)}
                  ></span>
                );
              })}
            </div>
          </div>

          <div className={styles.showText}>
            <em>大家在看</em>
            <h2>{data[this.state.nowIndex]?
                data[this.state.nowIndex].movie_name:""}</h2>
            <p>导演:<span>{data[this.state.nowIndex]?
                data[this.state.nowIndex].director:""}</span></p>
            <p>主演:<span>{data[this.state.nowIndex]?
                data[this.state.nowIndex].starring:""}</span></p>
            <p>分类:<span>{data[this.state.nowIndex]?
                data[this.state.nowIndex].type:""}</span></p>
            <p>上映时间:<span>{data[this.state.nowIndex]?
                data[this.state.nowIndex].release_time:""}</span></p>
            
          </div>
        </div>      
      </div>
    );
  }
}

export default Banner;