import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { changeStateMain } from '../../actions/MainActions';


export class FirstCard extends Component {
    componentDidMount () {
        const btns = document.querySelectorAll('.btns');
        const sections = document.querySelectorAll('.containers');
        for (let i = 0; i < btns.length; i++) {
            btns[i].addEventListener('click', (e)=>{
                e.preventDefault();
                const id = btns[i].childNodes[0].getAttribute('href');
                document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
                for (let j = 0; j < sections.length; j++){
                    sections[j].classList.add('display')
                   if (`#${sections[j].getAttribute('id')}` === id) {
                       sections[j].classList.remove('display')
                       sections[j].classList.add('display-block')
                   }
                }
            })
        }

    }
    logOut (e) {
        localStorage.setItem('zPresentationLogin', '');
        this.props.changeStateMain({
            name: 'loginResp',
            value: ''
        })
        this.props.changeStateMain({
            name: 'logOutRedirect',
            value: true
        })

    }
    render() {
        const {logOutRedirect} = this.props;
        if(logOutRedirect) {
            return <Redirect to="/" />
        }
        return (
            <div className="first-card">
                <div className="main-section">
                    <i className="fas fa-sign-out-alt" onClick={this.logOut.bind(this)}></i>
                    <img src="img/logo.png" alt="logo" className="logo" />
                    <nav className="nav">
                        <ul className="main-nav-top">
                            <li className="btns"><a href="#section-2" ><i className="fas fa-plus-circle"></i> Yenilər</a></li>
                            <li className="btns"><a href="#section-3" ><i className="fas fa-clock"></i> Gözləyənlər</a></li>
                        </ul>
                        {
                            localStorage.getItem('zPresentationLogin') === 'e3afed0047b08059d0fada10f400c1e5' ? 
                            <ul className="main-nav-central">
                                <li className="btns"><a href="#section-1" ><i className="fas fa-upload"></i> Əlavə et</a></li>
                            </ul> : <br />
                        }
                        <ul className="main-nav-bottom">
                            <li className="btns"><a href="#section-4" ><i className="fas fa-check"></i> Hazırlananlar</a></li>
                            <li className="btns"><a href="#section-5" ><i className="fas fa-trash"></i> Silinənlər</a></li>
                        </ul>
                        {
                            localStorage.getItem('zPresentationLogin') === 'e3afed0047b08059d0fada10f400c1e5' ?
                            <ul className="main-nav-users">
                                <li className="btns"><a href="#section-6" ><i className="fas fa-users"></i> İstifadəçilər</a></li>
                            </ul> : null
                        }
                    </nav>
                </div> 
            </div>
            
        )
    }
}

const  mapStateToProps = (state) => ({
    logOutRedirect: state.Data.logOutRedirect
})
const mapDispatchToProps = {changeStateMain}

export default connect(mapStateToProps, mapDispatchToProps)(FirstCard)
