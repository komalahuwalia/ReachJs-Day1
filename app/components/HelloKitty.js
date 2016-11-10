import React from 'react'
import ImageComponent from 'components/ImageComponent'
import MyDate from 'components/MyDate'
import Description from 'components/Description'

export default class HelloKitty extends React.Component {
    render() {
        return (
            <div>
                <ImageComponent imageUrl={this.props.imageUrl}></ImageComponent>
                <Description name={this.props.name} message={this.props.message} />
                <MyDate></MyDate>
            </div>
        );
    }
}
