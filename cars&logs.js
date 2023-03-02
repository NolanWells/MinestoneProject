var gameOver = false

async function createMovingObject(f, x, y, dx, dy) {
    while(!gameOver) {
        const sleepMin = 1000 / Math.abs(dx)
        const sleepMax = 3000 / Math.abs(dx)
        let npc = f(x, y);
        npc.move(dx, dy)
        await sleep(sleepMin + Math.random()*sleepMax) 
    }
}

//createMovingObject(Logpicture, -300, 510, 1.2, 0)
//createMovingObject(Logpicture, 1400, 600, -.8, 0)
//createMovingObject(Logpicture, -300, 710, .8, 0)
//createMovingObject(Logpicture, 1400, 800, -1.5, 0)



createMovingObject(Carpicture2, -100, 415, .8, 0 )//line 6//
createMovingObject(Carpicture, 1900, 355, -1.2, 0 )// line 5//
createMovingObject(Carpicture2, -100, 288, 1.1, 0 ) // line 4//
createMovingObject(Carpicture, 1900, 230, -1.3, 0 ) // line 3//
createMovingObject(Carpicture2, -100, 165, 1.6, 0 ) //line 2//
createMovingObject(Carpicture, 1900, 105, -.7, 0 )//line 1//


function sleep (time){
    return new Promise(resolve => {
        setTimeout(resolve,time)
    })
}

