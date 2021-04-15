window.onload=function(){

    var game = new enchant.Game(320,320);

    game.preload("charal.gif");
    game.onload = function(){
    var bear =new enchant.Sprite(32,32);
    bear.image = game.assets["charal.gif"];
    game.rootScene.addEvenListener("touchmove",function(e) {
        bear.x = e.x;
        bear.y = e/y;
    });
    var enemy = new Sprite(32, 32);
    enemy.image = game.assets["charal.gif"];
    enemy.frame = 5;
    
    enemy.addEventListener("enterframe", function(){

    });
    
    game.rootScene.addChild(enemy);
    game.rootScene.addChild(bear);

    }
    game.start();
    game.rootScene.backgroundColor = "red";
}