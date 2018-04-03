import React from 'react';
import './card.component.css';
import DragTrack from '../services/drag-tracking.service'
import WordCard from './word-card.component'

 class Card extends React.Component {
    constructor(props){
        super(props);
        this.dragTrack = new DragTrack();
    }
    
    componentDidMount(){
      
        this.dragTrack.onMouseMove();
        setInterval(this.logDragTrack, 1000);
    }
    logDragTrack = () => {
        const coord = this.dragTrack.mouseCoordinates();
        const elements = this.dragTrack.elementsAtMousePoint();
        console.log(`Coordinates: ${coord.toString()}, \n Elements: ${elements.toString()}`);
    }

    handleClick = () =>{
      this.toggleSelected();
    }



    dragStartHandler = (ev) =>{
        const wordNum = this.props.wordNum;
        const lineNum = this.props.lineNum
        ev.dataTransfer.setData("wordNum", wordNum);
        ev.dataTransfer.setData("lineNum", lineNum);
    }

    dragHandler = (e) =>{

    }

    drop_handler = (ev) => {
        ev.preventDefault();
        const wordNum = ev.dataTransfer.getData("wordNum");
        const lineNum = ev.dataTransfer.getData("lineNum");
        console.log(`data transfer ${wordNum}, ${lineNum}`);
        this.props.onWordMove([lineNum, wordNum], [this.props.lineNum, this.props.wordNum]);

    }

    render(){
        return(
            <div 
                draggable="true" 
                className="word"
                onDragStart={this.dragStartHandler}
                onDrag={this.dragHandler}
                onDrop={this.drop_handler}
            >
                {/* {this.props.children} */}
                <WordCard
                    onChange={this.props.onWordChange}
                    word={this.props.word}
                    wordNum={this.props.wordNum}
                    lineNum={this.props.lineNum}
                />
            </div>
        );
    }
}

export default Card;