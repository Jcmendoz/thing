function playertwo () {
    player2 = sprites.create(img`
        . . . . 8 8 8 8 8 e . . . . . . 
        . . . 8 8 8 8 d 8 8 e . . . . . 
        . . e 8 8 8 8 8 8 8 e . . . . . 
        . . e 8 8 8 8 8 8 8 e . . . . . 
        . . e 8 8 8 8 8 e f f c c . . . 
        . . e e 8 8 e f f 2 f b c . . . 
        . e e e f e 8 b f f f d c . . . 
        e e 8 8 d f 8 e f f f b c . . . 
        e e 8 8 d f e c b 7 7 c . . . . 
        b 1 1 d e e c 7 1 1 7 c . . . . 
        . f f e e e e 7 7 7 7 c . . . . 
        . . f f d d e 7 7 7 b c . . . . 
        . . f f d d e c c c c d . . . . 
        . . . f f f f . . . . . . . . . 
        . . f f f e e e . . . . . . . . 
        . . f f f f e e e . . . . . . . 
        `, SpriteKind.Player)
    controller.player2.moveSprite(player2, 25, 25)
    info.player2.setLife(3)
}
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    player2projectile = sprites.createProjectileFromSprite(img`
        . . a a a a . . 
        . a 2 4 4 4 a . 
        a 2 5 2 2 4 2 a 
        c 2 5 5 4 4 2 c 
        . c 5 5 5 2 c . 
        . . c c c c . . 
        `, player2, 50, 50)
    music.smallCrash.playUntilDone()
})
let player2projectile: Sprite = null
let player2: Sprite = null
playertwo()
