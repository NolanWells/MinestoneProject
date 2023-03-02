function newImage (name,x,y,scale){
    let newImage = document.createElement('img')
    newImage.style.position = 'fixed'
    newImage.src = name
    newImage.style.left = x + 'px'
    newImage.style.bottom = y + 'px'
    newImage.style.scale = scale
    document.body.append(newImage)
    return newImage
}


///////////// grass////////////////////
function grassRow(y) {
    let x = 0
    const imageWidth = 100;
    while(x < window.innerWidth) {
        const ele = newImage('assets/grass.png', x, y, "100%")
        x += imageWidth
    }
}

function grass() {
    let y = 0
    grassRow(0)
    grassRow(470)
    grassRow(760)
    grassRow(860)
}
grass()
/////////////////road//////////////////
function roadLane(y) {
    let x = 0
    while(x < window.innerWidth) {
        newImage('assets/road1.png', x, y)
        x += 200
    }
}

function road(){
    let y = 100
    for (var i = 0; i < 2; i++) {
        roadLane(y)
        y += 185
    }
    y += 100
    roadLane(y)
} 
road()


function startGame(){
    $('#StartGameBox').style.visibility = 'hidden'
}




