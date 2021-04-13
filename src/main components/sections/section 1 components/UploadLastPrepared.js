import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPresentations, changeStateMain } from '../../../actions/MainActions';

export class UploadLastPrepared extends Component {
    componentDidMount () {
        this.props.fetchPresentations()
    }
    uploadPresentation (e) {
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
            value: 'presentation'
        })
        reader.readAsDataURL(e.target.files[0])
    }
    changePresentationImg (id, subject, image) {
        const img = {
            type: 'presentation',
            base64: image,
            image: '',
            id: id,
            text: subject
        }
        this.props.changeStateMain({
            name: "edit",
            value: img
        })
        this.props.changeStateMain({
            name: "visibileEdit",
            value: true
        })
    }
    render() {
        const { presentations } = this.props;
        const components = presentations.map((presentation, i) =>{
            return (
                <div className="uploads-component" key={i}>
                    <img className="uploading-img" src={presentation.image} alt="upload img" />
                    <span onClick={this.changePresentationImg.bind(this, presentation.id, presentation.subject, presentation.image)} className="uploads-edit"><i className="fas fa-edit edit-icon"></i></span>
                </div>
            )
        })
        return (
            <div className="upload-last_prepared-container">
                <h3>Son hazırlanan təqdimat əlavə et</h3>
                <div className="uploads-container">
                    {
                        presentations.length === 6 ?
                        components:
                        presentations.length < 6 ?
                        <>
                        {components} 
                        <label htmlFor="upload-presentation-file">
                           <div className="uploads-component">
                                <i className="fas fa-upload upload-btn"></i>
                            </div>  
                        </label>
                        <input name="base64"  accept="image/*" onChange={this.uploadPresentation.bind(this)} type="file"  id="upload-presentation-file" style={{display: 'none'}} />
                        </>: null
                    } 
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) =>({
    presentations: state.Data.presentations
})
const mapDispatchToProps = {fetchPresentations, changeStateMain}

export default connect(mapStateToProps, mapDispatchToProps)(UploadLastPrepared)
