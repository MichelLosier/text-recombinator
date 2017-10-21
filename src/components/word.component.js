import React from 'react';
import './word.component.css';
import DragTrack from '../services/drag-tracking.service'

 class Word extends React.Component {
    constructor(props){
        super(props);
        this.dragTrack = new DragTrack();
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.dragStartHandler = this.dragStartHandler.bind(this);
    }
    
    componentDidMount(){
        this.setFocus.focus();
        this.dragTrack.onMouseMove();
        setInterval(this.logDragTrack, 1000);
    }
    logDragTrack = () => {
        const coord = this.dragTrack.mouseCoordinates();
        const elements = this.dragTrack.elementAtMousePoint();
        console.log(`Coordinates: ${JSON.stringify(coord)}, \n Elements: ${JSON.stringify(elements)}`);
    }

    handleClick(){
      this.toggleSelected();
    }

    handleChange(e){
      this.props.onWordChange(this.props.wordNum, this.props.lineNum, e)
    }

    dragStartHandler(ev){
        const wordNum = this.props.wordNum;
        const lineNum = this.props.lineNum
        ev.dataTransfer.setData("wordNum", wordNum);
        ev.dataTransfer.setData("lineNum", lineNum);
    }

    render(){
        return(
            <div 
                draggable="true" 
                className="word"
                onDragStart={this.dragStartHandler}
            >
                { (this.props.selected) ? (
                    <span onClick={this.handleClick}>{this.props.value}</span>
                ) : (
                    <textarea
                        rows="1"
                        value={this.props.word} 
                        name="word-input" 
                        onChange={this.handleChange}
                        ref={(ref) => this.setFocus = ref}
                    />
                )}
            </div>
        );
    }
}

export default Word;