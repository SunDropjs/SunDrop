const gravity = function(objY, minY = window.innerHeight) {
    let vy = 0;
    if (objY > minY) {
        vy =- 1
    } /*else if (objY < minY) {
        objY = minY;
        vy = 0;
    }*/
    objY += vy;
    return objY;
}

export  {gravity};