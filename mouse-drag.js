const mouseDrag = document.getElementById("drag");

// state values
let isDragged = false;
let hide = false;
let initialXPos = 0;
let initialYPos = 0;

document.addEventListener("mousedown", e => {
    isDragged = true
    initialXPos = e.clientX
    initialYPos = e.clientY
    mouseDrag.style.left = initialXPos + "px"
    mouseDrag.style.top = initialYPos + "px"
})

document.addEventListener("mousemove", e => {
    if (isDragged) {
        if (hide) {
            mouseDrag.style.display = "block"
            hide = false;
        }
        const x = e.clientX
        const y = e.clientY
        const deltaX = x - initialXPos
        const deltaY = y - initialYPos
        if (deltaX < 0) {
            mouseDrag.style.left = x + "px"
            mouseDrag.style.width = Math.abs(deltaX) + "px"
        } else {
            mouseDrag.style.left = initialXPos + "px"
            mouseDrag.style.width = deltaX + "px"
        }
        if (deltaY < 0) {
            mouseDrag.style.top = y + "px"
            mouseDrag.style.height = Math.abs(deltaY) + "px"
        } else {
            mouseDrag.style.top = initialYPos + "px"
            mouseDrag.style.height = deltaY + "px"
        }
    }
})

document.addEventListener("mouseup", _ => {
    isDragged = false
    hide = true
    mouseDrag.style.display = "none"
})
