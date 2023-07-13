import React from 'react';
import BodySection from './BodySection';
import './BodySection.css';

export default class BodySectionWithMarginBottom extends React.Component {
    render() {
        return (
            <div className='bodySectionWithMargin'>
                <BodySection {...this.props} />
            </div>
        )
    }
}
