import React from 'react';
import BodySection from './BodySection';
import { StyleSheet, css } from 'aphrodite';

const style = StyleSheet.create({
    bodySectionWithMargin: {
        marginBottom: '40px'
    }
})

export default class BodySectionWithMarginBottom extends React.Component {
    render() {
        return (
            <div className={css(style.bodySectionWithMargin)}>
                <BodySection {...this.props} />
            </div>
        )
    }
}
