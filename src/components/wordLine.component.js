import React from 'react';
import './wordLine.component.css';

import Word from './word.component';

class WordLine extends React.Component {
    constructor(props){
        super(props);
    this.handleValueChange = this.handleValueChange.bind(this);
    }
    
    lineParser(string){
        const wordArr = string.split(" ");
        return wordArr;
    }


    handleValueChange(event) {
        const value = event.target.value;
        const key = event.taget.key;
        const valueArr = lineParser(value);
        const len = valueArr.length;
        if (len > 1) {
            return valueArr.slice(1, (len-1)); //concat result with linearr
        } else {
            return valueArr; //update value at key in line arr
        }
    }

    line(words){
       const parsedWords = this.lineParser(words);
       const wordLine = parsedWords.map((word, index) => {
          return ( <Word 
                value={word} 
                key={index}
                onValueChange={this.handleValueChange}
             /> 
          )
        });
        return wordLine;
    }

    render(){
        return (
            <div draggable="true" >
                {this.line(this.props.words)}
            </div>
        )
    }
}

export default WordLine;