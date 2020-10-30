import React, { Component } from 'react';
import { formatDate } from '../../helpers/encode';


class DateText extends Component {


    render() {
        const { dateString } = this.props; 
        const date =  formatDate(dateString);
        // this.setState({ date })

        return (
            <p style={{margin:0}} className={this.props.class}>{date}</p>
        );
    }
}

export default DateText;