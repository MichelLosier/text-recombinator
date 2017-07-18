import React from 'react';
import './word.component.css';

 class Word extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
            selected: false,
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
        return(
            <div draggable="true" className="word">
                { (this.state.selected) ? (
                    <span onClick={this.handleClick}>{this.props.value}</span>
                ) : (
                    <input value={this.props.value} name="word-input" onChange={(e) => this.props.onWordChange(this.props.wordNum, this.props.lineNum, e)}/>
                )}
            </div>
        );
    }
}

export default Word;