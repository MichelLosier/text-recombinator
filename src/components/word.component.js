import React from 'react';
import './word.component.css';

 class Word extends React.Component {
    constructor(props){
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    
    componentDidMount(){
        this.setFocus.focus();
    }

    handleClick(){
      this.toggleSelected();
    }

    handleChange(e){
      this.props.onWordChange(this.props.wordNum, this.props.lineNum, e)
    }

    render(){
        return(
            <div draggable="true" className="word">
                { (this.props.selected) ? (
                    <span onClick={this.handleClick}>{this.props.value}</span>
                ) : (
                    <textarea
                        rows="1"
                        value={this.props.word} 
                        name="word-input" 
                        onChange={this.handleChange}
                        ref={(ref) => this.setFocus = ref}
                    />
                )}
            </div>
        );
    }
}

export default Word;