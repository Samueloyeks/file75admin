import React, { Component } from 'react';
import { dateToTime } from '../../helpers/encode';


class TimeText extends Component {

    constructor(props){
        super(props)

        this.state = {
            time: ''
        }
    }

    async componentDidMount() {
        const { dateString } = this.props;
        const time = await dateToTime(dateString);
        this.setState({ time })
    }

    render() {
        const { time } = this.state;

        return (
            <p className={this.props.class}>{time}</p>
        );
    }
}

export default TimeText;