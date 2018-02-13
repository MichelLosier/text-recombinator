import React from 'react';
import './card-board.component.css';

import CardContainer from './card-container.component'

//TODO
// ondragstart
// 	state.drag=true
// 	state.dropPlaceHolder =

// 	get element at cursor
// 		that is of class word
// 		add element at index +1
// 		document.elementFromPoint(,)
// 			.class()
// 		get wordNum and lineNum
// 		insert dropPlaceHolder at +1

// ondragend
// 	state.drag=false
// 	state.PlaceHolder=null
// 		remove placeHolder in wordlines

class CardBoard extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            wordLines: [["Word"]],
            selectedWord: {line: 0, index: 0}
        }
        this.handleWordChange = this.handleWordChange.bind(this);
        this.handleWordMove = this.handleWordMove.bind(this);
    }

    handleWordChange(wordNum, lineNum, event){
        const value = event.target.value;
        const wordArr = value.split(" ");
        const lineArr = value.split("\n");
        
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

    removeWord(line, index){
        this.setState((prevState) => {
            const wordLines = prevState.wordLines;
            wordLines[line].splice(index, 1);
            return { wordLines: wordLines}
        })
    }

    insertWord(line, index, content){
        this.setState((prevState) => {
            const wordLines = prevState.wordLines;
            wordLines[line].splice(index, 0, content);
            return { wordLines: wordLines}
        })
    }
    //coordinate is [line, index]
    handleWordMove(startCoordinate, dropCoordinate){
        const content = this.state.wordLines[startCoordinate[0]][startCoordinate[1]]
        this.removeWord(startCoordinate[0], startCoordinate[1]);
        this.insertWord(dropCoordinate[0], dropCoordinate[1], content);
    }

//rendering

    createLines(lines) {
       return lines.map((line, index) => {
            const selected = (line === this.state.selectedWord.line) ? true : false;
            return  (<CardContainer 
                words={line} 
                lineNum={index}
                key={index}
                onWordChange={this.handleWordChange}
                onWordMove={this.handleWordMove}
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

export default CardBoard;