import React from 'react';

class WordCard extends React.Component {
    constructor(props){

    }
    render(){
        return(
            <div>
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
        )
    }
}

export default WordCard;