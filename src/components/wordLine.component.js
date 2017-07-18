import React from 'react';
import './wordLine.component.css';

import Word from './word.component';

class WordLine extends React.Component {
    constructor(props){
        super(props);
    }

    line(words){
       const wordLine = words.map((word, index) => {
          return ( <Word 
                value={word} 
                lineNum={this.props.lineNum}
                key={index}
                wordNum={index}
                onWordChange={this.props.onWordChange}
                />)
        });
        return wordLine;
    }

    render(){
        const words = this.props.words;
        return (
            <div draggable="true" className="line">
                {this.line(words)}
            </div>
        )
    }
}

export default WordLine;