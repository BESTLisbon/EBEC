// Initialising the canvas
var canvas = document.querySelector('canvas');

var myFont = new FontFace('matrix', 'url(./fonts/matrix_code_nfi.otf)');
myFont.load().then(function(font){

  document.fonts.add(font);
  
  // Setting the width and height of the canvas
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  ctx = canvas.getContext('2d');
  ctx.font = '12px matrix';

  // Setting up the letters
  var letters = 'abcd fghijklm opqrstu xyzabcdefghijk mnopq stu vxy   abcde fg  ijklmnop rstuvxy  zabcdef hijk lmnopqrs tuvxyzabcd ef hijklm  nopqrs   tuvxyzabcdefghij lmnopqrstu xyz';
  letters = letters.split('');

  // Setting up the columns
  var fontSize = 10,
      columns = canvas.width / fontSize;

  // Setting up the drops
  var drops = [];
  for (var i = 0; i < columns; i++) {
    drops[i] = 1;
  }

  // Setting up the draw function
  function draw() {
    ctx.fillStyle = 'rgba(0, 0, 0, .1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < drops.length; i++) {
      var text = letters[Math.floor(Math.random() * letters.length)];

      ctx.fillStyle = '#0f0';
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);
      drops[i]++;
      if (drops[i] * fontSize > canvas.height && Math.random() > .95) {
        drops[i] = 0;
      }
    }
  }

  // Loop the animation
  setInterval(draw,45);
  


});
