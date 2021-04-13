import React, { Component } from 'react'

export class Header extends Component {
    componentDidMount () {
        const header = document.querySelector('.first-card');
        const nav = document.querySelector('.header-nav');
        const btns = document.querySelectorAll('.btns');
        for (let i = 0; i < btns.length; i++){
            btns[i].childNodes[0].addEventListener('click',(e)=>{
                e.preventDefault();
            })
        }
        const stickyNav = function (entries) {
            const [entry] = entries;
            if (!entry.isIntersecting){
                nav.classList.add('sticky');
            } 
            else {
                nav.classList.remove('sticky');
            }
          };
          const headerObserver = new IntersectionObserver(stickyNav, {
            root: null,
            threshold: 0,
            rootMargin: `-90px`,
          });
          
          headerObserver.observe(header);
    }
    render() {
        return (
            <nav className="header-nav">
                <ul className="header-main-nav">
                    {
                        localStorage.getItem('zPresentationLogin') === 'e3afed0047b08059d0fada10f400c1e5' ? 
                        <li className="btns"><a href="#section-1" ><i className="fas fa-upload"></i> Əlavə et</a></li>: null
                    }
                    <li className="btns"><a href="#section-2" ><i className="fas fa-plus-circle"></i> Yenilər</a></li>
                    <li className="btns"><a href="#section-3" ><i className="fas fa-clock"></i> Gözləyənlər</a></li>
                    <li className="btns"><a href="#section-4" ><i className="fas fa-check"></i> Hazırlananlar</a></li>
                    <li className="btns"><a href="#section-5" ><i className="fas fa-trash"></i> Silinənlər</a></li>
                    {
                        localStorage.getItem('zPresentationLogin') === 'e3afed0047b08059d0fada10f400c1e5' ? 
                        <li className="btns"><a href="#section-6" ><i className="fas fa-users"></i> İstifadəçilər</a></li> : null
                    }
                </ul>
            </nav>
        )
    }
}

export default Header
