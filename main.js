var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
	fabric.image.fromURL("Birthdayimage.jpg",function (Img){
        block_image_object= Img;
        block_image_object.sacleTowidth (800);
        block_image_object.sacleToheight (600);
        block_image_object.set({

    top:0,
     left:0 

        });
        canvas.add(block_image_object);
    });
   
	
}

function playSound(){
    x.play();
    console.log("play")
	
}
