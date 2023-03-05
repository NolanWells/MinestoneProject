function movingCar(image, x, y) {
    let element = newImage (image, x, y)
    element.style.zIndex = 1;

    let dx = 0

    function next () {
        x += dx
        element.style.left = x + 'px'
        const frogPos = $('#frogger').position()
        const elementRect = element.getBoundingClientRect()
        if (gameOver || 
            (dx > 0 && elementRect.x >= window.innerWidth) ||
            (dx < 0 && elementRect.x + elementRect.width <= 0)) {
            clearInterval(intervalTimer)
            element.remove()
        } else if (col({x:frogPos.left, y:frogPos.top, width:32, height:32}, elementRect)) {
            endGame()
        }
    }

    function col(a,b){
       return (a.x < (b.x + b.width)) && ((a.x + a.width) > b.x) && 
              (a.y < (b.y+b.height)) && ((a.y + a.height) > b.y)  
    }

    function move(x) {
        dx = x
    }
    
    const intervalTimer = setInterval (next,1) 

    return {
        element: element,
        move: move
    }
}
