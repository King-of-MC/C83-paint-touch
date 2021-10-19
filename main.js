var width=screen.width;
var lastX=0;
var lastY=0;
var canvas=document.getElementById("mycanvas");
var ctx=canvas.getContext("2d");
var colour="forestgreen";
var widthline=2;
var new_width=screen.width-70;
var new_height=screen.height-300;
// gap
if (width<992) {
    document.getElementById("mycanvas").width=new_width;
    document.getElementById("mycanvas").height=new_height;
    document.body.style.overflow=hidden;
}

// gap
canvas.addEventListener("touchstart",mytouchstart);
// gap again 
function mytouchstart(e) {
    console.log("mytouchstart HAS STARTEDDD");
    lastX=e.touches[0].clientX-canvas.offsetLeft;
    lastY=e.touches[0].clientY-canvas.offsetTop;
    colour=document.getElementById("linecolour").value;
    widthline=document.getElementById("linewidth").value;

}


// sghjiuyfxdfb
canvas.addEventListener("touchmove",mytouchmove);// mouses can move now coding has reached greater heights

// ahhh
function mytouchmove(e) {
    console.log("YOU TOUCHED AND IT MOVED MYTOUCHMOVE ");
      current_x=e.touches[0].clientX-canvas.offsetLeft;
      // yp gap
      current_y=e.touches[0].clientY-canvas.offsetTop;

      
          ctx.beginPath();
          ctx.strokeStyle=colour;
          ctx.lineWidth=widthline;
          // console gap
          console.log("last position of X:"+lastX+"; last position of Y :"+lastY);
          ctx.moveTo(lastX,lastY);
          console.log("current position of X :"+current_x+"; CURRENT position of Y :"+current_y);
          ctx.lineTo(current_x,current_y);
          ctx.stroke();
      
      
       lastX = current_x;
       lastY = current_y;
      
}

function cleararea() {
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}


