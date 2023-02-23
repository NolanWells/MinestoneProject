//const npc = Logpicture(-300,510) 

// console.log()

async function createMovingObject(f, x, y, dx, dy) {
    while(true) {
        let npc = f(x, y);
        npc.move(dx, dy)
        await sleep(1000 + Math.random()*3000)
    }
}
createMovingObject(Logpicture, -300, 510, 1.5, 0)
createMovingObject(Logpicture, 1400, 600, -.8, 0)
createMovingObject(Logpicture, -300, 710, .7, 0)
createMovingObject(Logpicture, 1400, 800, -1.8, 0)
createMovingObject(Carpicture, 1400, 350, -1, 0 )
createMovingObject(Carpicture2, -300, -30, 1, 0 )




function sleep (time){
    return new Promise(resolve => {
        setTimeout(resolve,time)
    })
}
