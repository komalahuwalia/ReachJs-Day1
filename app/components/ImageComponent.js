import React from 'react'

export default class ImageComponent extends React.Component {
    render() {
        return (
            <div>
                <img id="image" src={this.props.imageUrl} className="Avatar"></img>
            </div>
        );
    }
}
