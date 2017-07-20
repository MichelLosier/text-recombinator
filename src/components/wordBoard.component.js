import React from 'react';
import './wordBoard.component.css';

import WordLine from './wordLine.component'

class WordBoard extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            wordLines: [["Word"]],
            selectedWord: {line: 0, index: 0}
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
            this.setSelectedWord(line, index);
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

    setSelectedWord(line, index){
        this.setState({line: line, index: index});
    }


    lineParser(string){
        const wordArr = string.split(" ");
        return wordArr;
    }


//rendering

    createLines(lines) {
       return lines.map((line, index) => {
            const selected = (line === this.state.selectedWord.line) ? true : false;
            return  (<WordLine 
                words={line} 
                lineNum={index}
                key={index}
                onWordChange={this.handleWordChange}
                selectedWord={this.state.selectedWord}
                selected={selected}
                />
            )
        });
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