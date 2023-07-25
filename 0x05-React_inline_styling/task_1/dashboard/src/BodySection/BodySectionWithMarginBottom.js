import { StyleSheet, css } from 'aphrodite';
import React from 'react';
import BodySection from './BodySection';

const marginBottom = StyleSheet.create({
    marginBottom: '40px'
})

export default class BodySectionWithMarginBottom extends React.Component {
    render() {
        return (
            <div className={css(marginBottom.marginBottom)}>
                <BodySection {...this.props} />
            </div>
        )
    }
}
