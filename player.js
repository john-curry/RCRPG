
function GObj( x , y , w , h ) {
    this.x = x
    this.y = y
    this.width = w
    this.height = h
    }


GObj.constructor.prototype = {
  x: 0,
  y: 0,
  height: 0,
  width: 0,

  init: function( x , y , w , h ) {
    this.x = x
    this.y = y
    this.width = w
    this.height = h
    },
  
  draw: function( image , gfx ) {
    image.height = this.height
    image.width  = this.width
    gfx.drawImage( image , this.x , this.y );
    },
  
  update: function( td ) {


    }
  };


