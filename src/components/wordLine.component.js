import React from 'react';
import './wordLine.component.css';

import Word from './word.component';

class WordLine extends React.Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){
    }
    
    line(words){
       const parsedWords = this.lineParser(words);
       const wordLine = parsedWords.map((word, index) => {
          return ( <Word 
                value={word} 
                key={index}
                onChange={this.props.onChange()}
             /> 
          )
        });
        return wordLine;
    }
    
    lineParser(string){
        const wordArr = string.split(" ");
        return wordArr;
    }

    render(){
        return (
            <div draggable="true">
                {this.line(this.props.words)}
            </div>
        )
    }
}

export default WordLine;