import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeStateMain, insertSlide, insertPresentation, fetchSlides, fetchPresentations } from '../../../actions/MainActions';

export class Editİmages extends Component {
    editPhoto = (e) => {
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
        reader.readAsDataURL(e.target.files[0])

      };
      editImages (e) {
        this.props.changeStateMain({
            name: "edit."+e.target.name,
            value: e.target.value
        })
      }
      uploadImage (edit, e) {
        if (edit.type === 'slider' && edit.image !== '') {
            var uploadSlider = new FormData();
            uploadSlider.append('image', edit.image, edit.image.name);
            uploadSlider.append('id', edit.id);
            this.props.insertSlide(uploadSlider)
            .then(resp =>{
                if(resp.status === 'success'){
                    this.props.fetchSlides()
                }
            })
            this.props.changeStateMain({
                name: "visibileEdit",
                value: false
            })
        }else if(edit.type === 'presentation' && edit.image !== '' && edit.text !== ''){
            var uploadPresentations = new FormData();
            uploadPresentations.append('image', edit.image, edit.image.name);
            uploadPresentations.append('subject', edit.text);
            uploadPresentations.append('id', edit.id);
            this.props.insertPresentation(uploadPresentations)
            .then(resp =>{
                if(resp.status === 'success'){
                    this.props.fetchPresentations()
                }
            })
            this.props.changeStateMain({
                name: "visibileEdit",
                value: false
            })
        }
      }
    render() {
        const {edit} = this.props;
        return (
            <div className="edit_image-container">
                <div className="edit-image-column">
                    <label htmlFor="edit-img-input">
                        <img className="editing-image" src={edit.base64} />
                    </label>
                    <input accept="image/*" name="base64" onChange={this.editPhoto.bind(this)} type="file" id="edit-img-input" style={{display: 'none'}}/>
                    {
                        edit.type === 'presentation' ?
                        <input type="text" value={edit.text} name="text" onChange={this.editImages.bind(this)} className="editing-text"/> : null
                    }
                    
                    <button className="save-changes-btn" onClick={this.uploadImage.bind(this, edit)}>Yadda Saxla</button>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    edit: state.Data.edit
})
const mapDispatchToProps = {changeStateMain, insertSlide, insertPresentation, fetchSlides, fetchPresentations}

export default connect(mapStateToProps, mapDispatchToProps) (Editİmages)
