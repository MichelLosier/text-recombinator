class DragTrack {
    constructor(){
        this.x = 0
        this.y = 0
    }
    onMouseMove = () => {
        window.addEventListener('mousemove', function(e){
            this.x = e.clientX
            this.y = e.clientY
            console.log(`${e.clientX}, ${e.clientY}`);
        })
    }

    mouseCoordinates = () => {
        return {x: this.x, y: this.y}
    }

    elementAtMousePoint = () => {
        return document.elementsFromPoint(this.x, this.y)
    }

}

export default DragTrack;