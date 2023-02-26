async function createMovingObject(f, x, y, dx, dy) {
    while(true) {
        let npc = f(x, y);
        npc.move(dx, dy)
        await sleep(1000 + Math.random()*3000)
    }
}
//createMovingObject(Logpicture, -300, 510, 1.2, 0)
//createMovingObject(Logpicture, 1400, 600, -.8, 0)
//createMovingObject(Logpicture, -300, 710, .8, 0)
//createMovingObject(Logpicture, 1400, 800, -1.5, 0)
createMovingObject(Carpicture, 1700, 350, -1.2, 0 )
createMovingObject(Carpicture2, -300, -30, .6, 0 )
createMovingObject(Carpicture, 1700, 220, -1.3, 0 )
createMovingObject(Carpicture2, -300, -150, .8, 0 )
createMovingObject(Carpicture, 1700, 100, -1.4, 0 )
createMovingObject(Carpicture2, -300, -280, 1, 0 )

function sleep (time){
    return new Promise(resolve => {
        setTimeout(resolve,time)
    })
}


