function Logpicture(x,y) {
    let element = newImage ('assets/log.png', x, y,"30%")
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
