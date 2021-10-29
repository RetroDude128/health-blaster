controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . 
        . 2 2 . 2 2 . . 
        2 2 2 2 1 1 2 . 
        2 2 2 2 2 2 2 . 
        2 2 2 2 2 2 2 . 
        . 2 2 2 2 2 . . 
        . . 2 2 2 . . . 
        . . . 2 . . . . 
        `, mySprite, 100, 0)
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . 
        . 2 2 . 2 2 . . 
        2 2 2 2 1 1 2 . 
        2 2 2 2 2 2 2 . 
        2 2 2 2 2 2 2 . 
        . 2 2 2 2 2 . . 
        . . 2 2 2 . . . 
        . . . 2 . . . . 
        `, mySprite, -100, 0)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.vy += -100
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . e e . e . . 
        . . e e e e . . 
        . . d f d d . . 
        . . d d d d . . 
        . . . 2 d . . . 
        e . . 2 2 . . e 
        . e . 8 8 . e . 
        . . . . . . . . 
        `,img`
        . . e e . . e . 
        . . e e e e . . 
        . . d f d d . . 
        . . d d d d . . 
        . . d 2 2 d . . 
        . . . 2 2 . . . 
        . e . 8 8 . e . 
        . . e . . e . . 
        `,img`
        . . e e e . e . 
        . . e e e e . . 
        . . f d f d . . 
        . . d d d d . . 
        . d . 2 2 . d . 
        . . . 2 2 . . . 
        . . . 8 8 . . . 
        . e e . e e . . 
        `,img`
        . . e e . . e . 
        . . e e e e . . 
        . . d f d d . . 
        . . d d d d . . 
        . . d 2 2 d . . 
        . . . 2 2 . . . 
        . e . 8 8 . e . 
        . . e . . e . . 
        `],
    100,
    true
    )
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    mySprite.setImage(img`
        . e . e e e . . 
        . . e e e e . . 
        . . d f d f . . 
        . . d d d d . . 
        . . . 2 2 . . . 
        . d . 2 2 . d . 
        . . . 8 8 . . . 
        . e e . . e e . 
        `)
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    mySprite.setImage(img`
        . . e e e . e . 
        . . e e e e . . 
        . . f d f d . . 
        . . d d d d . . 
        . . . 2 2 . . . 
        . d . 2 2 . d . 
        . . . 8 8 . . . 
        . e e . . e e . 
        `)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . e . e e . . 
        . . e e e e . . 
        . . d d f d . . 
        . . d d d d . . 
        . . . d 2 . . . 
        e . . 2 2 . . e 
        . e . 8 8 . e . 
        . . . . . . . . 
        `,img`
        . e . . e e . . 
        . . e e e e . . 
        . . d d f d . . 
        . . d d d d . . 
        . . d 2 2 d . . 
        . . . 2 2 . . . 
        . e . 8 8 . e . 
        . . e . . e . . 
        `,img`
        . e . e e e . . 
        . . e e e e . . 
        . . d f d f . . 
        . . d d d d . . 
        . d . 2 2 . d . 
        . . . 2 2 . . . 
        . . . 8 8 . . . 
        . . e e . e e . 
        `,img`
        . e . . e e . . 
        . . e e e e . . 
        . . d d f d . . 
        . . d d d d . . 
        . . d 2 2 . . . 
        . . . 2 2 . . . 
        . e . 8 8 . e . 
        . . e . . e . . 
        `],
    100,
    true
    )
})
let projectile: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . e . e e e . . 
    . . e e e e . . 
    . . d f d f . . 
    . . d d d d . . 
    . . . 2 2 . . . 
    . d . 2 2 . d . 
    . . . 8 8 . . . 
    . e e . . e e . 
    `, SpriteKind.Player)
info.setLife(10)
tiles.loadMap(tiles.createSmallMap(tilemap`level2`))
scene.setBackgroundColor(9)
tiles.placeOnRandomTile(mySprite, assets.tile`myTile1`)
controller.moveSprite(mySprite, 50, 0)
let mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
let mySprite3 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
scene.cameraFollowSprite(mySprite3)
mySprite3.setPosition(0, 0)
mySprite3.follow(mySprite2, 200)
forever(function () {
    mySprite.vy += 5
    mySprite2.setPosition(Math.round(mySprite.x / 160) * 160, 0)
})
