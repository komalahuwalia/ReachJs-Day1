import React from 'react'
export default class MyDate extends React.Component {

    renderDate() {
        const date = new Date();
        return date.toISOString().slice(0,10);
    }

    render() {
        return (
            <div id="displayDate">
                <p>{this.renderDate()}</p>
            </div>
        );
    }
}
