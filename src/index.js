import Phaser from 'phaser';
import BoardPlugin from 'phaser3-rex-plugins/plugins/board-plugin.js';

var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
      preload: preload,
      create: create
    },
    plugins: {
      scene: [
        {
          key: 'rexBoard',
          plugin: BoardPlugin,
          mapping: 'rexBoard'
        },
      ],
    }
  };
var game = new Phaser.Game(config);
function preload () {
  this.load.setBaseURL('http://labs.phaser.io');
//  this.load.scenePlugin('rexboardplugin', 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexboardplugin.min.js', 'rexBoard', 'rexBoard');

  this.load.image('sky', 'assets/skies/space3.png');
  this.load.image('logo', 'assets/sprites/phaser3-logo.png');
}
function create () {
  this.add.image(400, 300, 'sky');
  this.add.image(400, 100, 'logo').setInteractive().on('pointerup', (pointer, localX, localY, e) => {
    this.scene.restart()
  });
  this.board = this.rexBoard.add.board({
    grid: {
      gridType: 'quadGrid',
      x: 0,
      y: 0,
      cellWidth: 100,
      cellHeight: 100,
      type: 'orthogonal'
    },
    width: 4,
    height: 3, 
  }).setInteractive()
}
