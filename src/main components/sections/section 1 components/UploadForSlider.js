import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSlides, changeStateMain } from '../../../actions/MainActions';
import {IMG} from '../../../APIKey';
const env = window._env;

export class UploadForSlider extends Component {
    componentDidMount() {
        this.props.fetchSlides();
    }
    uploadSlider (e) {
        const name = e.target.name;
        const reader = new FileReader();
        reader.onload = (e) =>{
          if(reader.readyState === 2){
              this.props.changeStateMain({
                  name: "edit."+name,
                  value: reader.result
              })
          }
        }
        this.props.changeStateMain({
            name: "edit.image",
            value: e.target.files[0]
        })
        this.props.changeStateMain({
            name: "visibileEdit",
            value: true
        })
        this.props.changeStateMain({
            name: "edit.type",
            value: 'slider'
        })
        reader.readAsDataURL(e.target.files[0])
    }
    changeSliderImage (id, image, e) {
        const img = {
            type: 'slider',
            image: '',
            base64: image,
            text: '',
            id: id
        }
        this.props.changeStateMain({
            name: 'edit',
            value: img
        })
        this.props.changeStateMain({
            name: 'visibileEdit',
            value: true
        })
    }
    render() {
        const { slides } = this.props;
        const components = slides.map((slide, i) => {
            return (
                <div className="uploads-component" key={i}>
                    <img className="uploading-img" src={IMG+slide.image} alt="upload img" />
                    <span className="uploads-edit" onClick={this.changeSliderImage.bind(this, slide.id, IMG+slide.image)}><i className="fas fa-edit edit-icon"></i></span>
                </div>
            )
        })
        return (
            <div className="upload-slayder-container">
                <h3>Slayder üçün əlavə et</h3>
                <div className="uploads-container slider-container">
                    { 
                        slides.length === 4 ? 
                        components: slides.length < 4 ? 
                        <>
                        { components }
                        <label htmlFor="upload-new-slider">
                            <div className="uploads-component">
                                <i className="fas fa-upload upload-btn"></i>
                            </div>
                        </label>
                        <input name="base64"  accept="image/*" onChange={this.uploadSlider.bind(this)} type="file" id="upload-new-slider" style={{display:'none'}}/>
                        </>: null
                    }
                      
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) =>({
    slides: state.Data.slides
})
const mapDispatchToProps = {fetchSlides, changeStateMain}

export default connect(mapStateToProps, mapDispatchToProps)(UploadForSlider)
