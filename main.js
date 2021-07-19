canvas=document.getElementById("Mycanvas");
color="red";
ctx=canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=4;
ctx.arc(200,200,40,0,2*Math.PI);
ctx.stroke();
canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e){
    color=document.getElementById("text-input").value;
    mouse_x=e.clientX-canvas.offsetLeft;
    mouse_y=e.clientY-canvas.offsetTop;
    circle(mouse_x , mouse_y);
}
function clearArea(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}
canvas.addEventListener("mouse_down", my_mousedown);
function my_mousedown(e){
    color=document.getElementById("colourowner").value;
    width=document.getElementById("widthowner").value;
    radius=document.getElementById("radiusowner").value;
    mouseEvent="mouseDown";
}
canvas.addEventListener("mouse_leave", my_mouseleave);
function my_mouseleave(e){
    mouseEvent="mouseleave";
}
canvas.addEventListener("mouse_up", my_mouseup);
function my_mouseup(e){
    mouseEvent="mouseUP";
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
    current_position_of_mouse_x=e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y=e.clientY - canvas.offsetTop;
    if(mouseEvent=="mouseDown"){
        ctx.beginpath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width;
        ctx.radius=radius;
        ctx.moveTo(last_position_of_x, last_position_of_y);
        ctx.lineTo(current_position_of_x, current_position_of_y)
        ctx.stroke();
    }
    last_position_of_x=current_position_of_x;
    last_position_of_y=current_position_of_y;
}