import React from 'react';
import './App.css';
import ContentNasa from "./Components/ContentNasa";
import LogoNasa from "./Components/LogoNasa";
import DateComponent from "./Components/DateComponent";
import SwipeableViews from 'react-swipeable-views';

export default class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            date: props.date,
            error: null,
            isLoaded: false,
            items: []
        };
    }

    getDate(props){
        this.setState({
            date: props,
        });
        setTimeout(()=>{
            this.componentDidMount();
        },1000);
    }

    componentDidMount(){
        const url = "https://api.nasa.gov/planetary/apod?api_key=eSmx20HngcRpsw5jBfdVU3jQcvePfnXObw86dhUf&date="+this.state.date+""
        fetch(url)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded, items } = this.state;
        const date = items.date;
        console.log(date);
        if (error) {
            return (
                <div className="App">
                    <header className="App-header">
                        <LogoNasa />
                        <div>Error : {error.message}</div>
                    </header>
                </div>
            );
        } else if (!isLoaded) {
            return(
                <div className="App">
                    <header className="App-header">
                        <LogoNasa />
                        <div>Loading ...</div>
                    </header>
                </div>
            );
        } else {
            return (
                <SwipeableViews enableMouseEvents>
                    <div className="App">
                        <header className="App-header">
                            <h1>Astronomy Picture of the Day</h1>
                            <p id="date">{items.date}</p>
                            <ContentNasa data={items}/>
                        </header>
                    </div>
                    <div className="App">
                        <header className="App-header">
                            <DateComponent sendDate={this.getDate.bind(this)}/>
                        </header>
                    </div>
                </SwipeableViews>
            );
        }
    }
}