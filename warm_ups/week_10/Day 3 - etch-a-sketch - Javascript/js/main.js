// This is just a batch assignment to get these names in the global namespace. They all start as undefined.
let canvas, context, bounds, button;

const etch = {

  // The pixel object is used to track and scale of the pixel drawn and works for an easy means of keeping the data in a localised packet.

  pixel: {
    x: 148,
    y: 148,
    size: 4,
    color: 0
  },

  // I don't need the 'this' word in this function, so I've gone for fat arrow syntax.

  render: ( px ) => {
    // Fillstyle determines the colour of the shape drawn on the canvas.

    // HSLA (or HSL if you don't want opacity) stands for hue/saturation/lightness (and sometimes alpha).
    // Hue is a scale from 0-360 (a full circle on a colour wheel) - if it goes over 360, it just cycles the wheel again, i.e 361 === 1.
    // Saturation refers to how vivid the color is
    // Lightness defines how light or dark the color needs to be, 0% is black, 100% is white, 50% is normal.
      // It's a good way to cycle colours without complicated maths.
    context.fillStyle = `hsl( ${px.color}, 100%, 50%)`;

    // fillRect draws a rectangle on the canvas, it takes 4 parameters:
      // Offset from the top of the canvas
      // Offset from the left hand side of the canvas
      // Width
      // Height

    context.fillRect( px.x, px.y, px.size, px.size );
  },

  move: function( e ){
    // To save me some typing, I've named the object px.
    const px = this.pixel
    // e.key is case sensitive, rather than check for both cases on the letter, I'd rather just coerce them here -- and save myself typing e.key as a bonus.
    const key = e.key.toLowerCase()

    // In addition to movement, I ensure the pixel is within the bounds of the canvas. If it isn't, or will exceed them, it won't move.
    if( key === "w" && px.y > 0 ){
      px.y -= px.size;
    } else if ( key === "d" && px.x + px.size < bounds ){
      px.x += px.size;
    } else if ( key === "s" && px.y + px.size < bounds){
      px.y += px.size;
    } else if ( key === "a" && px.x > 0 ){
      px.x -= px.size;
    } else {
      return;
    }

    // For each step, cycle up the hsl colour wheel a little bit.
    px.color += 10;
    // After each step, draw again.
    this.render( px );
  }
}; // end etch

// Same as doc.ready in jQ
window.onload = () => {

  // Once the document loads, assign values to the global variables
  canvas = document.querySelector('canvas');

  // The CanvasRenderingContext2D interface is used for drawing rectangles, text, images and other objects onto the canvas element. 
  // It provides the 2D rendering context for the drawing surface of a <canvas> element.
  context = canvas.getContext("2d");
  // The width on the canvas is set to the element -- so I target that, not .style.width.
  bounds = canvas.width;
  button = document.querySelector('button');

  // clearRect works almost the same as fillRect, but removes canvas content over a given area
  button.onclick = () => {
    context.clearRect( 0, 0, bounds, bounds );
  };

  // Make sure the program starts with a pixel on the page
  etch.render( etch.pixel );
}; // End onload

// Whenever a key is pressed, throw a window event to the move function
window.onkeypress = ( e ) => {
  etch.move( e );
};
