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

    handleWordChange(wordNum, lineNum, event){
        const value = event.target.value;
        const valueArr = this.lineParser(value);
        const len = valueArr.length;
        if (len > 1) {
            const words = valueArr.slice(1, (len));
            console.log(`valueArr: ${valueArr}, new words: ${words}`);
            this.addNewWords(valueArr[0], words, lineNum, wordNum);
         } else {
            this.updateWord(valueArr, lineNum, wordNum);
        }
    }

    addNewWords(origWord, newWords, line, index){    
        this.setState((prevState) => {
            const newWordLines = prevState.wordLines;
            newWordLines[line].splice((index+1), 0, ...newWords);
            newWordLines[line][index] = origWord;
            return { wordLines: newWordLines };
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
                lineNum={index}
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