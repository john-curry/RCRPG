var GObj = {
  x: 4,
  y: 0,
  angle: 0, // in radian
  width: 0,
  hieght: 0
};
GObj.init = function ( x , y , w , h ) {
    this.x = x
    this.y = y
    this.width = w
    this.height = h
  }

function player() {
  this.dtheta = degToRad( 10 );
  this.dx = 0; 
  this.dy = 0;
  this.ddx = 0;
  this.ddy = 0;
  this.maxspeed = 5;
  this.draw = function( image , gfx ) {
    gfx.save();
    tx = this.x + (this.width / 2);
    ty = this.y + (this.height / 2);
    gfx.translate( tx , ty  );
    gfx.rotate( this.angle );
    gfx.translate( -tx , -ty  );
    gfx.drawImage( 
    image , 
    this.x , this.y , 
    this.width , this.height );
    gfx.restore(); 
    };

  this.update = function( dt , kds ) {
    
    this.angle = Math.atan2( this.dy , this.dx );
    
    if ( kds['right'] ) 
      this.ddx = 1;
    if ( kds['left'] )
      this.ddx = -1;
    if ( kds['up'] )
      this.ddy = -1;
    if ( kds['down'] ) 
      this.ddy = 1;
    if ( kds['brake'] ) 
      this.ddy = this.ddx = this.dx = this.dy = 0 
    this.dy += this.ddy;
    this.y  += this.dy;

    this.dx += this.ddx;
    this.x  += this.dx;

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




