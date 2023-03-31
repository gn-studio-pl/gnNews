import React from 'react';


export class Clock extends React.Component {

    state: {date: Date};
    
    constructor(props: any){
        super(props);
        this.state = { date: new Date() }
        this.tick = this.tick.bind(this);
        setInterval(this.tick, 1000)
    }

    tick(): void{
        this.setState({date: new Date() })
    }

    render(): React.ReactNode {
        return (
            <div className="clock">{this.state.date.toLocaleTimeString()}</div>
        );
    }
}