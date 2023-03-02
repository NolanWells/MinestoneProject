function Carpicture(x,y) {
    let element = newImage ('assets/car1_50.png', x, y,"100%",)
    element.style.zIndex = 1;
    //console.log('added')

    let dx = 0
    let dy = 0

    function next () {
        x += dx
        y += dy
        element.style.left = x + 'px'
        element.style.bottom = y + 'px'
        //console.log($('#frogger').position())
        const frogPos = $('#frogger').position()
        const elementRect = element.getBoundingClientRect()
        if ((dx > 0 && elementRect.x >= window.innerWidth) ||
            (dx < 0 && elementRect.x + elementRect.width <= 0)) {
            //console.log('deleted')
            // delete this object
            clearInterval(intervalTimer)
            element.remove()
        } else if (col({x:frogPos.left, y:frogPos.top, width:32, height:32}, elementRect)) {
            gameOver = true
            console.log('hit')
        }
    }

    function col(a,b){
       return (a.x < (b.x + b.width)) && ((a.x + a.width) > b.x) && 
              (a.y < (b.y+b.height)) && ((a.y + a.height) > b.y)  
    }

    function move(x, y) {
        dx = x
        dy = y
    }
    
    const intervalTimer = setInterval (next,1) 

    return {
        element: element,
        move: move
    }
}

function Carpicture2(x,y) {
    let element = newImage ('assets/car8_17.png', x, y, "100%")
    element.style.zIndex = 1;

    let dx = 0
    let dy = 0

    function next () {
        x += dx
        y += dy
        element.style.left = x + 'px'
        element.style.bottom = y + 'px'
        let frogPos = $('#frogger').position()
        const elementRect = element.getBoundingClientRect()
        if ((dx > 0 && elementRect.x >= window.innerWidth) ||
            (dx < 0 && elementRect.x + elementRect.width <= 0)) {       
            // delete this object
            clearInterval(intervalTimer)
            element.remove()
        } 
        else if (col({x:frogPos.left, y:frogPos.top, width:32, height:32}, elementRect)) {
            gameOver = true
            console.log('hit')
        }
    }
    function col(a,b){
        return (a.x < (b.x + b.width)) && ((a.x + a.width) > b.x) && 
               (a.y < (b.y+b.height)) && ((a.y + a.height) > b.y)  
     }

    function move(x, y) {
        dx = x
        dy = y
    }
    
    const intervalTimer = setInterval (next,1) 

    return {
        element: element,
        move: move
    }

}

///////////possible collisions///////////////

