import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeStateMain, fetchLinks, insertLinks } from '../../../actions/MainActions';

export class UploadLinks extends Component {
    addNewSocial (e) {
        this.props.changeStateMain({
            name: e.target.getAttribute('id'),
            value: false
        })
    }
    closeInput (e) {
        this.props.changeStateMain({
            name: e.target.getAttribute('id'),
            value: true
        })
    }
    newSocialInput (e) {
        this.props.changeStateMain({
            name: "socials."+e.target.name,
            value: e.target.value
        })
    }
    addNewSocialInput (socials, e){
        this.props.fetchLinks();
        const {links} = this.props;
        if( links.length !== 0) {
            socials.id = links[0].id
        }
        this.props.insertLinks(socials).
        then(resp=>{
            if(resp.status === 'success'){
                this.props.fetchLinks();
            }
        })
    }
    componentDidMount () {
        this.props.fetchLinks();
    }
    render() {
        const {links, socials, wisibleInsta, wisibleFb, wisibleEmail, wisibleWp} = this.props;
        return (
            <div className="links-container">
                <ul>
                    {/* instagram */}
                    <li className="social-list">
                        <i className="fab fa-instagram"> { links.length !== 0 && wisibleInsta ? links[0].instagram : null }</i> 
                        {
                            !wisibleInsta ? 
                            <>
                                <input type="text" className="social-input" value={socials.instagram} onChange={this.newSocialInput.bind(this)} name="instagram" />
                                <button className="add-social-btn" onClick={this.addNewSocialInput.bind(this, socials)} >Əlavə et</button>
                                <i className="fas fa-chevron-circle-left" id="wisibleInsta" onClick={this.closeInput.bind(this)}></i>
                            </>: null
                        }
                        <i className="fas fa-edit" id="wisibleInsta" onClick={this.addNewSocial.bind(this)}></i> 
                        
                    </li>
                        {/* facebook */}
                    <li className="social-list">
                        <i className="fab fa-facebook"> { links.length !== 0 && wisibleFb ? links[0].facebook : null }</i>
                        {
                            !wisibleFb ? 
                            <>
                                <input type="text" className="social-input" value={socials.facebook} onChange={this.newSocialInput.bind(this)} name="facebook" />
                                <button className="add-social-btn" onClick={this.addNewSocialInput.bind(this, socials)} >Əlavə et</button>
                                <i className="fas fa-chevron-circle-left" id="wisibleFb" onClick={this.closeInput.bind(this)}></i>
                            </>: null
                        }
                        <i className="fas fa-edit" id="wisibleFb" onClick={this.addNewSocial.bind(this)}></i>
                        
                    </li>
                    {/* email */}
                    <li className="social-list">
                        <i className="far fa-envelope-open"> { links.length !== 0 && wisibleEmail ? links[0].email : null }</i>
                        {
                            !wisibleEmail ? 
                            <>
                                <input type="text" className="social-input" value={socials.email} onChange={this.newSocialInput.bind(this)} name="email" />
                                <button className="add-social-btn" onClick={this.addNewSocialInput.bind(this, socials)} >Əlavə et</button>
                                <i className="fas fa-chevron-circle-left" id="wisibleEmail" onClick={this.closeInput.bind(this)}></i>
                            </>: null
                        }
                        <i className="fas fa-edit" id="wisibleEmail" onClick={this.addNewSocial.bind(this)}></i> 
                        
                    </li>
                        {/* whatsapp */}
                    <li className="social-list">
                        <i className="fas fa-phone-square-alt"> { links.length !== 0 && wisibleWp ? links[0].whatsapp : null }</i> 
                        {
                            !wisibleWp ? 
                            <>
                                <input type="phone" className="social-input" value={socials.whatsapp} onChange={this.newSocialInput.bind(this)} name="whatsapp" />
                                <button className="add-social-btn" onClick={this.addNewSocialInput.bind(this, socials)} >Əlavə et</button>
                                <i className="fas fa-chevron-circle-left" id="wisibleWp" onClick={this.closeInput.bind(this)}></i>
                            </>: null
                        }
                        <i className="fas fa-edit" id="wisibleWp" onClick={this.addNewSocial.bind(this)}></i> 
                        
                    </li>
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    links: state.Data.links,
    socials: state.Data.socials,
    wisibleInsta: state.Data.wisibleInsta,
    wisibleFb: state.Data.wisibleFb,
    wisibleEmail: state.Data.wisibleEmail,
    wisibleWp: state.Data.wisibleWp
})

const mapDispatchToProps = { changeStateMain, fetchLinks, insertLinks }

export default connect(mapStateToProps, mapDispatchToProps)(UploadLinks)
