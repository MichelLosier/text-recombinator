class DragTrack {
    constructor(){
        this.x = 0
        this.y = 0
    }
    onMouseMove = () => {
        window.addEventListener('mousemove', this.setCoordinates);
    }
    setCoordinates = (e) => {
        this.x = e.clientX;
        this.y = e.clientY;
    }

    mouseCoordinates = () => {
        return {x: this.x, y: this.y}
    }

    elementsAtMousePoint = () => {
        return document.elementsFromPoint(this.x, this.y)
    }

    findElementAtMousePointByClass = (className) => {
        const elements = this.elementsAtMousePoint();
        //TODO filter condition for elements that have className and is draggable
        //Return reference
    }

}

export default DragTrack;