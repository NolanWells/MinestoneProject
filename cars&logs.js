var gameOver = true

async function animateCar(image, x, y, dx) {
    while(!gameOver) {
        const sleepMin = 1000 / Math.abs(dx)
        const sleepMax = 3000 / Math.abs(dx)
        let npc = movingCar(image, x, y);
        npc.move(dx)
        await sleep(sleepMin + Math.random()*sleepMax) 
    }
}

const car1Image = 'assets/car1_50.png'
const car2Image = 'assets/car8_17.png'
const cars = [
    { image: car1Image, start: window.innerWidth + 100, direction: -1 },
    { image: car2Image, start: -100, direction: 1 }

]
var carPromises = []
function createCars() {
    let car = 0
    let y = roadStart
    for(i = 0; i < numLanes; i++) {
        for(j = 0; j < laneOffset.length; j++) {
            let whichCar = car % 2
            speed = (0.5 + Math.random()) * cars[whichCar].direction
            carPromises.push(animateCar(cars[whichCar].image, cars[whichCar].start, y + laneOffset[j], speed))
            car++
        }
        y += laneHeight
    }
}

async function awaitCars() {
    await Promise.all(carPromises)
    carPromises = []
    console.log('finished')
}

function sleep (time){
    return new Promise(resolve => {
        setTimeout(resolve,time)
    })
}

