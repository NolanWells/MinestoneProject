function Logpicture(x,y) {
    let element = newImage ('assets/log.png')
    element.style.zIndex = 1;

    let direction = null;


        function moveLog () {
            if (direction === 'west'){
                x -= 1
            }
            if (direction === 'north'){
                x -= 1
            }
            if (direction === 'east'){
                x -= 1
            }
            if (direction === 'south'){
                x -= 1
            }
        element.style.left = x + 'px'
        element.style.bottom = x + 'px'
    }
    setInterval (moveLog,1) 

    async function moveEast(time){
        direction = 'east'
        await sleep(time)
        stop()
    }

    async function moveNorth(time){
        direction = 'North'
        await sleep(time)
        stop()
    }   
    async function moveWest(time){
        direction = 'east'
        await sleep(time)
        stop()
    }
    async function moveSouth(time){
        direction = 'east'
        await sleep(time)
        stop()
    }
    async function stop (){
        direction = null
    }

    return {
        element: element,
        moveWest: moveWest,
        moveNorth: moveNorth,
        moveEast: moveEast,
        moveSouth: moveSouth,
        stop: stop 
    }

}

