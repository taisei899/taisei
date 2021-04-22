window.onload=function() {

    var game = new Game(320,320);

    game.preload("charal.gif");
    game.onload = function(){

    var bear = new Sprite(32,32);
    bear.image = game.assets["charal.gif"];
    game.rootScene.addEvenListener("touchmove",function(e) {
        bear.x = e.x;
        bear.y = e.y;
    });
    game.rootScene.addEventListener("enterframe",function)() {
    if(game.frame % 10 === 0){
    var enemy = new Sprite(32, 32);
    enemy.image = game.assets["charal.gif"];
    enemy.frame = 5;
    enemy.x = (320 - 32) * Math.random();
    enemy.addEventListener("enterframe",function(){
    enemy.y += 5;
    if(enemy.within(bear)) {
        game.stop();
    }
    });
    
    game.rootScene.addChild(enemy);
}
    });
    game.rootScene.addChild(bear);

    }
    game.start();
}