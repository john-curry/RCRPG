var GObj = {
  x: 4,
  y: 0,
  angle: 0, // in radian
  width: 0,
  hieght: 0
};
var keysdown = []; // possible values include w , a , s , d
GObj.init = function ( x , y , w , h ) {
    this.x = x
    this.y = y
    this.width = w
    this.height = h
  }

function player() {
  this.dtheta = degToRad( 10 );
  this.dx = 10;
  this.dy = 10;
  this.ddx = 1;
  this.ddy = 1;
  this.draw = function( image , gfx ) {
    gfx.save();
    tx = this.x + (this.width / 2);
    ty = this.y + (this.height / 2);
    gfx.translate( tx , ty  );
    gfx.rotate( this.angle );
    gfx.translate( -tx , -ty  );
    gfx.drawImage( image , this.x , this.y , this.width , this.height );

    gfx.restore(); 
    };

  this.update = function( dt , kds ) {
      
    };
  
  this.init = function ( x , y , w , h ) {
    this.x = x
    this.y = y
    this.width = w
    this.height = h
    return this;
    };     
  }
player.prototype = GObj;




