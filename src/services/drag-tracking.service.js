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

    findDraggableElementAtMousePoint = (className) => {
        const elements = this.elementsAtMousePoint();
        const foundElems = elements.filter(function(element){
            if (element.hasAttribute('draggable')){
                return true;
            }
            return false;
        });
        return foundElems[0];
    }

}

export default DragTrack;