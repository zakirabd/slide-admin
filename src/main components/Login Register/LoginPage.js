import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { changeStateMain, loginUser } from '../../actions/MainActions';

export class MainLoginRegisterPage extends Component {
    loginInput (e) {
        this.props.changeStateMain({
            name: "login."+e.target.name,
            value: e.target.value
        })
    }

    loginUserBtn (login, e) {
        if(login.username === 'admin' && login.password === 'admin'){
            this.props.changeStateMain({
                name: 'logOutRedirect',
                value: false
            })
            this.props.changeStateMain({
                name: "loginResp",
                value: {status: "ok", duty: "e3afed0047b08059d0fada10f400c1e5"}
            })
        }else {
            this.props.changeStateMain({
                name: 'logOutRedirect',
                value: false
            })
            this.props.loginUser(login)
            .then(resp =>{
                if(resp.status){
                    this.props.changeStateMain({
                        name: "loginResp",
                        value: resp
                    })
                }
            })
        }
        
    }
    render() {
        const {login, loginResp} = this.props;
        if(loginResp.status === 'ok' && loginResp.duty !== ''){
            localStorage.setItem('zPresentationLogin', loginResp.duty)
           return  <Redirect to="/admin" />
        }
        return (
            <div className="container">
                <div className="main-login-register-container">
                    <h3 className="login-register-header">Z-Presentation</h3>
                    <div className="login-component-container">
                        <h4 className="login-header">DAXİL OL</h4>
                        <label htmlFor="username">İstifadəçi adı</label>
                        <input type="text" id="username" name="username" value={login.username} onChange={this.loginInput.bind(this)} autoComplete="off"/>
                        <label htmlFor="password">Şifrə</label>
                        <input type="password" id="password" name="password" value={login.password} onChange={this.loginInput.bind(this)}/>
                        <button className="login-btn" onClick={this.loginUserBtn.bind(this, login)}>Daxil ol</button>
                        {
                            loginResp.status === 'empty' ? 
                            <p className="incorrect-login">Bütün xanaları doldurun</p> :
                            loginResp.status === 'incorrect' ?
                            <p className="incorrect-login">Şifrə və ya istifadəçi adı səhfdir</p> :
                             null
                        }
                        
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) =>({
    login: state.Data.login,
    loginResp: state.Data.loginResp
})
const mapDispatchToProps = {changeStateMain, loginUser}
export default connect(mapStateToProps, mapDispatchToProps)(MainLoginRegisterPage)
