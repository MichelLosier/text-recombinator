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
        const wordArr = value.split(" ");
        const lineArr = value.split("/\n/");
        
        if (wordArr.length > 1) {
            const words = wordArr.slice(1);
            console.log(`wordArr: ${wordArr}, new words: ${words}`);
            this.addNewWords(words, lineNum, (wordNum +1));
            this.updateWord(wordArr[0], lineNum, wordNum);
        } else if (lineArr.length > 1) {
            this.addNewWords(lineArr.slice(1), (lineNum +1), 0);
            this.updateWord(lineArr[0], lineNum, wordNum);
        } else {
            this.updateWord(wordArr, lineNum, wordNum);
        }

    }

    addNewWords(newWords, line, index){    
        this.setState((prevState) => {
            const wordLines = prevState.wordLines;
            if(line > (wordLines.length -1)){
                wordLines[line]=[];
            }
            wordLines[line].splice(index, 0, ...newWords);
            this.setSelectedWord(line, index);
            return { wordLines: wordLines };
        });
    }

    addNewLine(line, index){
       this.setState((prevState) => {
        const wordLines = prevState.wordLines; //get wordlines
        const newLine = wordLines[line].slice((index)); //slice get the word at index of line
       
        wordLines.splice((line + 1), 0, ...newLine); //add at new line with newline
        wordLines[line].splice((index + 1)) // 
        return { wordLines: wordLines };
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
        this.setState({
            selectedWord: {line: line, index: index}
        });
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