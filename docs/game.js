var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: {
    preload: preload,
    create: create,
    update: update
  }
};

var game = new Phaser.Game(config);
function preload() {
}
function create() {
  var circle = this.add.circle(400, 300, 50, 0xFF0000);
  this.input.on('pointerdown', function() {
    var x = Phaser.Math.Between(0, game.config.width);
    var y = Phaser.Math.Between(0, game.config.height);
    circle.setPosition(x, y);
  });
}
function update() {
  
}
