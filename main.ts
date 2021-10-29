controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . 
        . . . . 2 2 . . 
        . . . . 3 3 2 . 
        . . . 2 2 2 2 . 
        . . . . 2 2 2 . 
        . . . 2 2 2 . . 
        . . . . 2 . . . 
        . . . 2 . . . . 
        `, mySprite, 100, 0)
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . 
        . 2 2 . . . . . 
        2 2 2 2 . . . . 
        2 2 2 . . . . . 
        2 2 2 2 . . . . 
        . 2 2 . . . . . 
        . . 2 2 . . . . 
        . . . . . . . . 
        `, mySprite, -100, 0)
    projectile.setKind(SpriteKind.Projectile)
    info.changeLifeBy(-1)
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
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Projectile, function (sprite, otherSprite) {
    a += 1
    myEnemy.vy = -100
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
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    mySprite.vy = -100
})
let a = 0
let projectile: Sprite = null
let myEnemy: Sprite = null
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
info.setLife(15)
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
myEnemy = sprites.create(img`
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
    `, SpriteKind.Enemy)
forever(function () {
    music.playMelody("- - - - - - - - ", 120)
})
forever(function () {
    tiles.placeOnRandomTile(myEnemy, assets.tile`myTile5`)
    myEnemy.vx = 0
    animation.runImageAnimation(
    myEnemy,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 6 6 . . . . . . . 
        . . . . . . . 6 6 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 9 9 . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 6 6 . . . . . . . 
        . . . . . . 6 f f 6 . . . . . . 
        . . . . . . 6 f f 6 . . . . . . 
        . . . . . . . 6 6 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 9 9 . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 6 6 6 6 . . . . . . 
        . . . . . 6 f f f f 6 . . . . . 
        . . . . . 6 f 2 2 f 6 . . . . . 
        . . . . . 6 f f f f 6 . . . . . 
        . . . . . 6 f f f f 6 . . . . . 
        . . . . . . 6 6 6 6 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 9 9 . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 6 6 6 6 6 6 . . . . . 
        . . . . 6 f f f f f f 6 . . . . 
        . . . . 6 f 2 f f 2 f 6 . . . . 
        . . . . 6 f 2 f f 2 f 6 . . . . 
        . . . . 6 f f f f f f 6 . . . . 
        . . . . 6 f f f f f f 6 . . . . 
        . . . . 6 f f f f f f 6 . . . . 
        . . . . . 6 6 6 6 6 6 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 9 9 . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 6 . 6 . 6 . . . . . 
        . . . . 6 f f f f f f . . . . . 
        . . . . . f 2 f f 2 f 6 . . . . 
        . . . . 6 f 2 f f 2 f . . . . . 
        . . . . . f f f f f f 6 . . . . 
        . . . . 6 f f f f f f . . . . . 
        . . . . . f f f f f f 6 . . . . 
        . . . . . 6 . 6 . 6 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 9 9 . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . f f f f f f f f . . . . 
        . . . . f f 2 f f 2 f f . . . . 
        . . . . f f 2 f f 2 f f . . . . 
        . . . . f f f f f f f f . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . . f f f f f f f f . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 9 9 . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . f f f f f f f f . . . . 
        . . . . f f 2 f f 2 f f . . . . 
        . . . . f f 2 f f 2 f f . . . . 
        . . . . f f f f f f f f . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . . f f f f f f f f . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 9 9 . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . f f f f f f f f . . . . 
        . . . . f f 2 f f 2 f f . . . . 
        . . . . f f 2 f f 2 f f . . . . 
        . . . . f f f f f f f f . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . . f f f f f f f f . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 9 9 . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . f f f f f f f f . . . . 
        . . . . f f 2 f f 2 f f . . . . 
        . . . . f f 2 f f 2 f f . . . . 
        . . . . f f f f f f f f . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . . f f f f f f f f . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . . . 9 9 . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f f . . . . 
        . . . f f f f f f f f f f . . . 
        . . . f 2 f f f f f f 2 f . . . 
        . . . f f 2 f f f f 2 f f . . . 
        . . . f f f f 2 2 f f f f . . . 
        . . . f f f f f f f f f f . . . 
        . . . . f f f f f f f f . . . . 
        `],
    100,
    false
    )
    pause(1000)
    animation.stopAnimation(animation.AnimationTypes.All, myEnemy)
    myEnemy.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . f f f f f f f f . . . . 
        . . . . f f 2 f f 2 f f . . . . 
        . . . . f f 2 f f 2 f f . . . . 
        . . . . f f f f f f f f . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . . f f f f f f f f . . . . 
        . . . . . f f f f f f . . . . . 
        `)
    myEnemy.vx = randint(0, 1) * 100 - 50
    myEnemy.setBounceOnWall(true)
    while (a < 5) {
        pause(1)
    }
    a = 0
    animation.runImageAnimation(
    myEnemy,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . f f f f f f f f . . . . 
        . . . . f f 2 f f 2 f f . . . . 
        . . . . f f 2 f f 2 f f . . . . 
        . . . . f f f f f f f f . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . . f f f f f f f f . . . . 
        . . . . . f f f f f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . f f f f f f f f . . . . 
        . . . . f f 2 f f 2 f f . . . . 
        . . . . f f 2 4 5 2 f f . . . . 
        . . . . f f f 4 4 f f f . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . . f f f f f f f f . . . . 
        . . . . . f f f f f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f 4 f f f . . . . . 
        . . . . f f 4 4 5 f f f . . . . 
        . . . . f 4 4 5 5 5 4 f . . . . 
        . . . . f 4 5 5 5 4 f f . . . . 
        . . . . f f 4 5 5 4 f f . . . . 
        . . . . f f f 4 4 4 f f . . . . 
        . . . . f f f f f f f f . . . . 
        . . . . . f f f f f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 4 4 4 4 4 4 . . . . . . 
        . . . . 4 4 5 4 4 4 4 4 . . . . 
        . . . 4 4 5 5 4 4 4 4 4 4 . . . 
        . 4 4 4 4 5 5 5 5 5 5 4 4 4 . . 
        . 4 4 4 4 5 5 5 5 5 5 4 4 4 . . 
        . . . 4 4 4 5 5 5 5 5 4 4 . . . 
        . . . 4 4 4 5 5 5 5 4 4 4 . . . 
        . . . . 4 4 4 4 4 4 4 4 4 . . . 
        . . . . . 4 4 4 4 4 4 4 . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 4 4 4 4 . . . . . . . . . 
        . . . 4 4 5 4 . . . . . 4 4 . . 
        . . 4 4 5 5 4 . . . . 4 4 4 4 . 
        4 4 4 4 5 4 4 . . . 4 5 5 4 4 . 
        4 4 4 4 4 4 4 . 2 . 4 4 4 4 . . 
        . . . . . 2 2 2 2 2 . . . . . . 
        . . . . . . 2 2 2 . . . . . . . 
        . . . . . . . 2 4 4 4 4 . . . . 
        . . . . . . . 4 5 5 5 4 4 . . . 
        . . . . . 4 4 4 5 5 4 4 4 4 4 . 
        . . . . . . 4 4 4 4 4 4 4 4 4 . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . 4 4 4 4 . . . . . . . . . . . 
        4 4 5 5 4 . . . . . . . . . . . 
        4 4 5 4 4 . . . . . . . . 4 4 4 
        . 4 4 4 . . . . . . . . 4 4 5 4 
        . . . . . . . . . . . . . . 4 4 
        . . . . . . 2 . 2 . . . . . . . 
        . . . . . 2 2 2 2 2 . . . . . . 
        . . . . . . 2 2 2 . . . . . . . 
        . . . . . . . 2 . 4 4 4 . . . . 
        . . . . . . . . 4 4 4 4 4 4 . . 
        . . . . . . . . 4 5 5 5 5 4 . . 
        . . . . . . . . . 4 4 4 4 4 . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 . 2 . . . . . . . 
        . . . . . 2 2 2 2 2 . . . . . . 
        . . . . . . 2 2 2 . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    false
    )
    pause(600)
    animation.stopAnimation(animation.AnimationTypes.All, myEnemy)
    info.changeLifeBy(5)
    mySprite.vx = 0
    mySprite.vy = 0
})
forever(function () {
    mySprite.vy += 5
    myEnemy.vy += 5
    mySprite2.setPosition(Math.round(mySprite.x / 160) * 160, 30)
})
forever(function () {
    music.playMelody(music.convertRTTTLToMelody("Health Bla:d=4,o=5,b=150:8c,8g4,8a4,8e4,8c4,8e4,8c4,8a4,8e4,8c4,8e4,8a4,8e4,8a4,8e4,8c4,8g4,8d4,8e4,8c4,8e4,8c4,8d4,8c4,8e4,8c4,8d4,8e4,8g4,8e4,8d4,8d"), 300)
})
