import React from 'react'

class Word extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
            selected: false,
            value: undefined
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
      toggleSelected();
    }

    toggleSelected(){
        this.setState(prevState => ({
            selected: !prevState.selected
        }));
    }
    
    setValue(value){
        this.setState({
            value: value
        });
    }

    render(){
        if (selected) 
        return(
            <p>{this.state.value}</p>
        )
    }
}