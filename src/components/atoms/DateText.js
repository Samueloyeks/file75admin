import React, { Component } from 'react';
import { formatDate } from '../../helpers/encode';


class DateText extends Component {

    constructor(props){
        super(props)

        this.state = {
            date: ''
        }
    }

    async componentDidMount() {
        const { dateString } = this.props;
        const date = await formatDate(dateString);
        this.setState({ date })
    }

    render() {
        const { date } = this.state;

        return (
            <p style={{margin:0}} className={this.props.class}>{date}</p>
        );
    }
}

export default DateText;