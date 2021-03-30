canvas = document.getElementById('myCanvas');
ctx = canvas.getCotext("2d");
car1_width = 120;
car1_height = 70;
car1_image = "car1.jpeg";
car1_x = 10;
car1_y = 100;

car2_width = 120;
car2_height = 70;
car2_image = "car2.jpeg";
car2_x = 10;
car2_y = 100;
background_image = "raceing.jpeg";

function add()
{
    background_imageTag = new Image();
    background_image.onload = uploadbackground;
    background_imgTag.src = background_image;

    car1_imgTag.src = car1_image;
}
function uploadBackground()
{
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.heigth);
}

function uploadcar1()
{
    ctx.drawImage(car1_imgTag, car1_x, car1_y, carl_width, carl_heigtht);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed == '38')
    {

        car1_up();
        console.log("up arrow key")
    }
    if(keyPressed == '40')
    {

        car1_down();
        console.log("down arrow key")
    }
    if(keyPressed == '37')
    {

        car1_left();
        console.log("left arrow key")
    }
    if(keyPressed == '39')
    {

        car1_right();
        console.log("right arrow key")
    }
    if(keyPressed == '87')
    {

        car2_up();
        console.log("key w")
    }
    if(keyPressed == '83')
    {

        car2_down();
        console.log("key s")
    }
    if(keyPressed == '65')
    {

        car2_left();
        console.log("key a")
    }
    if(keyPressed == '87')
    {

        car2_right();
        console.log("key 68")
    }
}