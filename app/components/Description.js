import React from 'react'
import ImageComponent from 'components/ImageComponent'
import MyDate from 'components/MyDate'

export default class Description extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.name}</p>
                <p>{this.props.message}</p>
            </div>
        );
    }
}
