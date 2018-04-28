import React from 'react';
import { connect } from 'dva';
import Header from '../../components/public/Header/Header';
import Footer from '../../components/public/Footer/Footer';
import styles from './Login.less';

class LoginComponent extends React.Component{
  constructor(){
    super();
    this.state = {
      account:'',
      password:''
    }
  }
  handleChange(name,e){
    this.setState({
      [name]:e.target.value
    });
  }
  handleLogin(){
    this.props.dispatch({
      type:'user/fetchLogin',
      payload:{
        account:this.state.account,
        password:this.state.password
      }
    })
  }
  render(){
    return (
      <div className={styles.loginCom}>
        <input placeholder="请输入手机号码或邮箱" type="text" className={styles.loginName}
        value={this.state.account}
        onChange={this.handleChange.bind(this,'account')}/>

        <input placeholder="请输入密码" type="password" className={styles.loginPassword}
        value={this.state.password}
        onChange={this.handleChange.bind(this,'password')}/>
        <input value="登录" type="button"
        onClick={this.handleLogin.bind(this)}/>
      </div>
    );
  }
};
let timer;
class RegisterComponent extends React.Component {
  constructor(){
    super();
    this.state = {
      userName:"",
      emil:"",
      code:"",
      password:"",
      surePassword:"",
      canGetCode:true,
      nameFormat:false,
      emilFormat:false,
      passwordFormat:false,
      surePasswordFormat:false,
      nameFormatSpan:"",
      emilFormatSpan:"",
      passwordFormatSpan:"",
      surePasswordFormatSpan:"",
    }
  }
  handleChangle(name,e){
    const account = e.target.value;
    let spanString = "";
    let format;
    if(name==='userName'){
      format=/^[a-zA-Z0-9\u4e00-\u9fa5]{2,20}$/.test(account);
      spanString=format?"√用户名格式符合要求":"×用户名必须由2-20位中英文或者数字组成";
      this.setState({
        userName:account,
        nameFormat:format,
        nameFormatSpan:spanString
      });
    }else if(name==='emil'){
      format=/^([\w-_]+(?:\.[\w-_]+)*)@((?:[a-z0-9]+(?:-[a-zA-Z0-9]+)*)+\.[a-z]{2,6})$/i.test(account);
      spanString=format?"√ emil格式符合要求":"× 请输入正确的邮箱";
      this.setState({
        emil:account,
        emilFormat:format,
        emilFormatSpan:spanString
      });
    }else if(name==='password'){
      format=/^[a-zA-Z0-9\u4e00-\u9fa5]{8,20}$/.test(account);
      spanString=format?"√ 密码格式符合要求":"× 密码必须由8-20位中英文或者数字组成";
      this.setState({
        password:account,
        passwordFormat:format,
        passwordFormatSpan:spanString
      });
    }else if(name==='code'){
      this.setState({
        code:account
      });
    }
    else{
      format=account===this.state.password;
      spanString=format?"√ 合格":"× 两次密码输入不一致";
      this.setState({
        surePassword:account,
        surePasswordFormat:format,
        surePasswordFormatSpan:spanString
      });
    }
  }
  handlegetCode(){
    if(this.state.canGetCode){
      if(!this.state.emilFormat){
        alert("请输入正确的邮箱地址");
        return;
      }
      this.setState({
        canGetCode:false
      });
      this.props.dispatch({
        type:'user/fetchGetCode',
        payload:{
          emil:this.state.emil
        }
      })
      let time = 60;
      this.refs.getCode.style.opacity=0.6;
      timer = setInterval(()=>{
        if(time>0){
          this.refs.getCode.value="重新获取 ("+time--+")";
        }else{
          this.refs.getCode.value="获取验证码";
          this.refs.getCode.style.opacity=1;
          clearInterval(timer);
          this.setState({
            canGetCode:true
          });
        }
      },1000);
    }  
  }
  componentWillUnmount(){
    clearInterval(timer);
  }
  handleRegister(){
    if(!this.state.nameFormat){
      alert("用户名不符合规范");
      return;
    }
    if(!this.state.passwordFormat){
      alert("密码格式不符合规范");
      return;
    }
    if(!this.state.surePasswordFormat){
      alert("两次密码输入不一致");
      return;
    }
    this.props.dispatch({
      type:'user/fetchRegister',
      payload:{
        code:this.state.code,
        userName:this.state.userName,
        password:this.state.password
      }
    });
  }
  render(){
    return (
      <div>
        <div className={styles.registerCom}>
          <input placeholder="请输入用户名" type="text" 
          className={styles.registerName}
          value={this.state.userName}
          onChange={this.handleChangle.bind(this,'userName')}/>

          <span className={this.state.nameFormat?styles.format:styles.notFormat}>
            {this.state.nameFormatSpan}
          </span>

          <input placeholder="请输入邮箱" type="text" className={styles.registerEmil}
          value={this.state.emil}
          onChange={this.handleChangle.bind(this,'emil')}/>

          <span className={this.state.emilFormat?styles.format:styles.notFormat}>
            {this.state.emilFormatSpan}
          </span>

          <input placeholder="请输入验证码" type="text" className={styles.registerCode}
          value={this.state.code}
          onChange={this.handleChangle.bind(this,'code')}/>
          <input value="获取验证码" type="button" className={styles.getCode}
          ref="getCode"
          onClick={this.handlegetCode.bind(this)}/>
          <input placeholder="请输入密码" type="password" className={styles.registerPassword}
          value={this.state.password}
          onChange={this.handleChangle.bind(this,'password')}/>

          <span className={this.state.passwordFormat?styles.format:styles.notFormat}>
            {this.state.passwordFormatSpan}
          </span>

          <input placeholder="请确认密码" type="password" className={styles.surePassword}
          value={this.state.surePassword}
          onChange={this.handleChangle.bind(this,'surePassword')}/>

          <span className={this.state.surePasswordFormat?styles.format:styles.notFormat}>
            {this.state.surePasswordFormatSpan}
          </span>

          <input value="注册" type="button"
          onClick={this.handleRegister.bind(this)}/>
        </div>
      </div>
    );
  }
}

class LoginApp extends React.Component{
  constructor(){
    super();
      this.state = {
        login:false
      }
  }
  componentDidMount(){
    const cHeight = document.documentElement.clientHeight;
    if(this.refs.log.clientHeight<cHeight-170&&this.state.login){
      this.refs.log.style.height=cHeight-170+"px";
    }else{
      this.refs.log.style.height=this.refs.log.lastChild.clientHeight+180+"px";
    }
  }
  componentDidUpdate(){
    const cHeight = document.documentElement.clientHeight;
    if(this.refs.log.clientHeight<cHeight-170){
      this.refs.log.style.height=cHeight-170+"px";
    }else{
      this.refs.log.style.height=this.refs.log.lastChild.clientHeight+180+"px";
    }
    if(this.refs.log.clientHeight<cHeight-170){
      this.refs.log.style.height=cHeight-170+"px";
    }else{
      this.refs.log.style.height=this.refs.log.lastChild.clientHeight+180+"px";
    }
  }
  handleChooseClick(index){
    if(index===0){
      this.setState({
        login:true
      })
    }else{
      this.setState({
        login:false
      })
    }
  }
  render(){
    
    return (
        <div>
          <Header />
          <div className={styles.log} ref="log">
            <div className={styles.content}>
              <div className={styles.logHeader}>
                <div className={this.state.login?'':styles.notActive} 
                onClick={this.handleChooseClick.bind(this,0)}>登录</div>
                <div className={!this.state.login?'':styles.notActive}
                onClick={this.handleChooseClick.bind(this,1)}>注册</div>
              </div>
              {this.state.login?<LoginComponent {...this.props}/>:<RegisterComponent {...this.props}/>}
            </div>
          </div>
          <Footer />
        </div>
    );
  }
}
const Login = connect((state)=>({user: state.user}))(LoginApp);
export default Login;