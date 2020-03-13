import React from 'react';
import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css';

export default class DateComponent extends React.Component{
    handleChange = (event) => {
        const year = event.getFullYear();
        const month = event.getMonth()+1;
        const day = event.getDate();
        const Date = ""+ year +"-"+ month +"-"+ day +"";

        this.props.sendDate(Date);
    };

    render() {
        const today = new Date();
        return(
            <InfiniteCalendar
                onSelect={this.handleChange.bind(this)}
                theme={{
                    selectionColor: '#282c34',
                    textColor: {
                        default: '#000000',
                        active: '#EFF2C0'
                    },
                    weekdayColor: '#282c34',
                    headerColor: '#282c34',
                    floatingNav: {
                        background: '#282c34',
                        color: '#EFF2C0',
                        chevron: '#EFF2C0'
                    }
                }}
                width={400}
                height={600}
                maxDate={today}
            />
        );
    }
}