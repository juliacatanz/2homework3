input.onGesture(Gesture.Shake, function () {
    pickshape()
})
function pickshape () {
    myhand = randint(1, 3)
    if (myhand == rockindex) {
        rockimage.showImage(0)
    }
    if (myhand) {
        paperimage.showImage(0)
    }
    if (myhand) {
        scissorimage.showImage(0)
    }
}
let myhand = 0
let scissorimage: Image = null
let paperimage: Image = null
let rockimage: Image = null
let rockindex = 0
rockindex = 1
let paperindex = 2
let scissorindex = 3
rockimage = images.createImage(`
    . . . . .
    . # # # .
    # # # # #
    # # # # #
    . . . . .
    `)
paperimage = images.createImage(`
    # # # # #
    # . . . #
    # . . . #
    # . . . #
    # # # # #
    `)
scissorimage = images.createImage(`
    # # . . #
    # # . # .
    . . # . .
    # # . # .
    # # . . #
    `)
