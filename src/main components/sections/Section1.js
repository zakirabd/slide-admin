import React, { Component } from 'react';
import {connect} from 'react-redux';
import UploadLastPrepared from './section 1 components/UploadLastPrepared';
import UploadForSlider from './section 1 components/UploadForSlider';
import Editİmages from './section 1 components/Editİmages';
import UploadLinks from './section 1 components/UploadLinks';

export class Section1 extends Component {
    render() {
        const {visibileEdit} = this.props;
        return (
            <div className="waited-orders-container containers" id="section-1">
                <h3 className="uloads-header">Şəkil əlavə et</h3>
                <UploadLastPrepared />
                <UploadForSlider />
                { visibileEdit ? <Editİmages /> : null }
                <UploadLinks />
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    visibileEdit: state.Data.visibileEdit
})

export default connect(mapStateToProps)(Section1)
