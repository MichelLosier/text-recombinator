import React from 'react';
import './wordBoard.component.css';

import WordLine from './wordLine.component'

class WordBoard extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            wordLines: ["Word"]
        }
    }

    handleChange(event, line){
        const value = event.target.value;
    }

    createLines(lines) {
        const wordLines = lines.map((line, index) => {
            return  (<WordLine 
                words={line} 
                key={index}
                onChange={this.handleChange}
                />
            )
        });
        return wordLines;
    }

    render(){
        const currentLines = this.state.wordLines;
        return (
            <div className="board">
                {this.createLines(currentLines)}
            </div>
        )
    }
}

export default WordBoard;