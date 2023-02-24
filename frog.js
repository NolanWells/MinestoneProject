function move(element){
    element.style.position = 'fixed'
    
    function moveToCoordinates(left, bottom) {
        element.style.left = left + 'px'
        element.style.bottom = bottom + 'px'
    }

    function ArrowKeys(left, bottom, callback){
        let direction = null;
        let x = left;
        let y = bottom;

        element.style.left = x + 'px'
        element.style.bottom = y + 'px'

        function moveFrog(){
            if (direction === 'west'){
                x-=1
            }
            if (direction === 'east'){
                x+=1
            }
            if (direction === 'north'){
                y+=1
            }
            if (direction === 'south'){
                y-=1
            }
            element.style.left = x + 'px'
            element.style.bottom = y + 'px'

        }

        setInterval(moveFrog,1)

        document.addEventListener('keydown',function(e){
            if (e.repeat) return;

            if(e.key === 'ArrowLeft'){
                direction = 'west'
            }
            if(e.key === 'ArrowRight'){
                direction = 'east'
            }
            if(e.key === 'ArrowUp'){
                direction = 'north'
            }
            if(e.key === 'ArrowDown'){
                direction = 'south'
            }
            callback(direction)
        })

        document.addEventListener('keyup', function(e){
            direction = null
            callback(direction)
        })  
    }

    return{
        to: moveToCoordinates,
        withArrowKeys: ArrowKeys
    }
}




function FroggerCharacter(x, y){
    const element = newImage('assets/frogger.png',) 
    element.style.zIndex = 1;

    function FroggerChangeDir(direction){
        if (direction === null){
            //element.src = "gif i can find one"
        }
        if (direction === 'west'){
            //element.src = "gif i can find one"
        }
        if (direction === 'east'){
            //element.src = "gif i can find one"
        }
        if (direction === 'north'){
            //element.src = "gif i can find one"
        }
        if (direction === 'south'){
            //element.src = "gif i can find one"
        }
    }

    move(element).withArrowKeys(x, y, FroggerChangeDir)

        return{
            element: element
        }
}