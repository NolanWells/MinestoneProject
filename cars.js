function Carpicture(x,y) {
    let element = newImage ('assets/car1.png', x, y,"50%",)
    element.style.zIndex = 1;

    let dx = 0
    let dy = 0

    function next () {
        x += dx
        y += dy
        element.style.left = x + 'px'
        element.style.bottom = y + 'px'
    }

    function move(x, y) {
        dx = x
        dy = y
    }
    
    setInterval (next,1) 


    return {
        element: element,
        move: move
    }

}

function Carpicture2(x,y) {
    let element = newImage ('assets/car5.png', x, y,"17%",)
    element.style.zIndex = 1;

    let dx = 0
    let dy = 0

    function next () {
        x += dx
        y += dy
        element.style.left = x + 'px'
        element.style.bottom = y + 'px'
    }

    function move(x, y) {
        dx = x
        dy = y
    }
    
    setInterval (next,1) 


    return {
        element: element,
        move: move
    }

}

