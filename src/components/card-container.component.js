import React from 'react';
import PropTypes from 'prop-types'
import './card-container.component.css';

import Card from './card.component';

class CardContainer extends React.Component {
    constructor(props){
        super(props);
    }

    static propTypes = {
        selectedCard : PropTypes.object
    }

    cards(words){
       const wordLine = words.map((word, index) => {
          const selected = ( word === this.props.selectedCard.index 
            && this.props.selected ) ? true : false;

          return ( <Card 
                word={word} 
                lineNum={this.props.lineNum}
                key={index}
                wordNum={index}
                onWordMove={this.props.onWordMove}
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



    render(){
        const words = this.props.words;
        return (
            <div 
                onDragOver={this.dragover_handler}
                draggable="true" 
                className="line"
            >
                {this.cards(words)}
            </div>
        )
    }
}

export default CardContainer;