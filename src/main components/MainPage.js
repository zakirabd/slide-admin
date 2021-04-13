import React, { Component } from 'react'
import FirstCard from './sections/FirstCard'
import Header from '../main components/layout/Header'
import Section1 from './sections/Section1'
import Section2 from './sections/Section2'
import Section3 from './sections/Section3'
import Section4 from './sections/Section4'
import Section5 from './sections/Section5'
import Section6 from './sections/Section6'
export class MainPage extends Component {
    componentDidMount(){
        if (localStorage.getItem('zPresentationLogin') === ''){
            window.location.hash = '/';
        }else {
            window.location.hash = '/admin';
        }
    }
    render() {
        return (
            <div className="container">
                <Header />
                <FirstCard />
                {
                    localStorage.getItem('zPresentationLogin') === 'e3afed0047b08059d0fada10f400c1e5' ? 
                    <Section1 /> : null
                }
                
                <Section2 />
                <Section3 />
                <Section4 />
                <Section5 />
                <Section6 />
                
            </div>
        )
    }
}

export default MainPage
