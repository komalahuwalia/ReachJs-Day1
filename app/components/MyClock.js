import React from 'react'

export default class MyClock extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dateTime : new Date().toISOString(),
        }
    }

    componentDidMount() {
        this.setState({
            interval : setInterval(() => {
                this.setState({
                    dateTime: new Date().toISOString()
                });
            }, 1000)
        });

    }

    componentWillUnmount(){
        clearInterval(this.state.interval);
    }

    render() {
        return (
            <div>
                The clock says {this.state.dateTime}
            </div>
        );
    }

}
