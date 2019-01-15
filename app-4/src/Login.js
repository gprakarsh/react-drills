import React, {Component} from 'react';

class Login extends Component {
 constructor(){
     super();
     this.state={
         username:'',
         password:''
     }
 }
 handleInputUsername(val){
     this.setState({username:val})
 }
 handleInputPassword(val){
     this.setState({password:val})
 }
 handleLogin(){
     alert(`Username: ${this.state.username} Password: ${this.state.password}`);
 }
 render(){
     return(
         <div>
             <input onChange={e=>this.handleInputUsername(e.target.value)} placeholder='Username'/>
             <input onChange={e=>this.handleInputPassword(e.target.value)} placeholder='Password'/>
             <button onClick={()=>this.handleLogin()}>Login</button>
         </div>
     )
 }

}
export default Login;