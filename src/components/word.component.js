import React from 'react';
import './word.component.css';

 class Word extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
            selected: false,
            value: "Word"
        };
        this.handleClick = this.handleClick.bind(this);
        this.setValue = this.setValue.bind(this);
    }

    handleClick(){
      this.toggleSelected();
    }

    toggleSelected(){
        this.setState(prevState => ({
            selected: !prevState.selected
        }));
    }
    
    setValue(event){
        const value = event.target.value;
        this.setState({
            value: value
        });
    }

    render(){
        const wordValue = this.state.value;
        return(
            <div draggable="true" className="word">
                { (this.state.selected) ? (
                    <span onClick={this.handleClick}>{this.state.value}</span>
                ) : (
                    <input value={wordValue} name="word-input" onChange={this.setValue}/>
                )}
            </div>
        );
    }
}

export default Word;