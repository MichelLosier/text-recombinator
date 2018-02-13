import React from 'react';
import './card.component.css';
import DragTrack from '../services/drag-tracking.service'

 class Card extends React.Component {
    constructor(props){
        super(props);
        this.dragTrack = new DragTrack();
    }
    
    componentDidMount(){
        this.setFocus.focus();
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

    handleChange = (e) => {
      this.props.onWordChange(this.props.wordNum, this.props.lineNum, e)
    }

    dragStartHandler = (ev) =>{
        const wordNum = this.props.wordNum;
        const lineNum = this.props.lineNum
        ev.dataTransfer.setData("wordNum", wordNum);
        ev.dataTransfer.setData("lineNum", lineNum);
    }

    dragHandler = (e) =>{

    }



    render(){
        return(
            <div 
                draggable="true" 
                className="word"
                onDragStart={this.dragStartHandler}
                onDrag={this.dragHandler}
            >
                {props.children}
            </div>
        );
    }
}

export default Card;