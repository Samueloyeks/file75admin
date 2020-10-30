import React, { Component } from 'react';
import { dateToTime } from '../../helpers/encode';


class TimeText extends Component {

    render() {
        const { dateString } = this.props; 
        const time =  dateToTime(dateString);

        return (
            <p className={this.props.class}>{time}</p>
        );
    }
}

export default TimeText;