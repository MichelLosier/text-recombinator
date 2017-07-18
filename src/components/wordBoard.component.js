import React from 'react';
import './wordBoard.component.css';

import WordLine from './wordLine.component'

class WordBoard extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            wordLines: [["Word"]]
        }
        this.handleWordChange = this.handleWordChange.bind(this);
    }

    handleWordChange(line, event){
        const value = event.target.value;
        const key = event.target.key;
        const valueArr = this.lineParser(value);
        const len = valueArr.length;
        if (len > 1) {
            const words = valueArr.slice(1, (len-1)); //concat result with linearr
            console.log(`value: ${value}, key: ${key}, line: ${line}`);
            this.addNewWords(words, line, key);
         } else {
            this.updateWord(valueArr, line, key);
        }
    }

    addNewWords(words, line, index){ 
        const newWords = this.state.wordLines
        newWords[line].splice((index+1), ...words);
        this.setState({
            wordLines: newWords
        });
    }

    updateWord(word, line, index){
        const updatedWordLines = this.state.wordLines;
        updatedWordLines[line][index] = word;
        this.setState({
            wordLines: updatedWordLines
        });
    }

    lineParser(string){
        const wordArr = string.split(" ");
        return wordArr;
    }


//rendering

    createLines(lines) {
        const wordLines = lines.map((line, index) => {
            return  (<WordLine 
                words={line} 
                key={index}
                onWordChange={this.handleWordChange}
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