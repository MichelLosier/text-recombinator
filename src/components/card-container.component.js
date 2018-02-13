import React from 'react';
import './card-container.component.css';

import Card from './card.component';

class CardContainer extends React.Component {
    constructor(props){
        super(props);
        this.drop_handler = this.drop_handler.bind(this);
    }

    line(words){
       const wordLine = words.map((word, index) => {
          const selected = ( word === this.props.selectedWord.index 
            && this.props.selected ) ? true : false;

          return ( <Card 
                word={word} 
                lineNum={this.props.lineNum}
                key={index}
                wordNum={index}
                onWordChange={this.props.onWordChange}
                selected={selected}
                />)
        });
        return wordLine;
    }

    dragover_handler(ev){
        ev.preventDefault();
        ev.dataTransfer.dropEffect = "move"
    }

    drop_handler(ev){
        ev.preventDefault();
        const wordNum = ev.dataTransfer.getData("wordNum");
        const lineNum = ev.dataTransfer.getData("lineNum");
        console.log(`data transfer ${wordNum}, ${lineNum}`);
        this.props.onWordMove([lineNum, wordNum], [this.props.lineNum, 0]);

    }

    render(){
        const words = this.props.words;
        return (
            <div 
                onDragOver={this.dragover_handler}
                onDrop={this.drop_handler}
                draggable="true" 
                className="line"
            >
                {this.line(words)}
            </div>
        )
    }
}

export default CardContainer;