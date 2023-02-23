function newImage (name,x,y,scale, transform){
    let newImage = document.createElement('img')
    newImage.style.position = 'fixed'
    newImage.src = name
    newImage.style.left = x + 'px'
    newImage.style.bottom = y + 'px'
    newImage.style.scale = scale
    //newImage.style.transform = "scaleX (-1)"
    document.body.append(newImage)
    return newImage
}


///////////// grass////////////////////
function grass() {
    let x = 0
    let y = 0
    for (var i = 0; i < 2; i++) {
        for(var j = 0; j < 20; j++) {
            newImage('assets/grass.png', x, y)
            x += 100
        }
        x = 0
        y += 470
    }
}
grass()
/////////////////road//////////////////
function road(){
    let x = 0
    let y = 100
    for (var i = 0; i < 2; i++) {
        for(var j = 0; j < 20; j++) {
            newImage('assets/road1.png', x, y)
            x += 200
        }
        x = 0
        y += 185
    }
} 
road()





