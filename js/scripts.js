function triangles(){
  var length_x = parseFloat(document.getElementById("one").value);
  var length_y = parseFloat(document.getElementById("two").value);
  var length_z = parseFloat(document.getElementById("three").value);

  var emptArr=[];
  emptArr.push(length_x,length_y,length_z)
  var randomWords=["Triangle of your own make","elephant muscle size","antelope horn length","score margin on which chelsea lost by","numberof lung a person has"];
  var accesArr = Math.floor(Math.random()*randomWords.length)
  if(((length_x+length_y)>length_z) && ((length_x+length_z)>length_y) && ((length_y+length_z)>length_x)){
    alert('Its a Triangle');

    if((length_x==length_y  && length_x!=length_z)||(length_x==length_z &&length_x!=length_y) ){
      document.getElementById("txtresult").innerHTML= 'It is an isoceles Triangle';
      document.getElementById("main2").innerHTML= 'isoceles Triangle';
      //If the condition is true it draws the isoceles Triangle and Displays it on canvas
      var canvas=document.getElementById("main");
      if(canvas.getContext){

        var ctx=canvas.getContext('2d')
        var s=canvas.width;
        var h=canvas.height;

        var path=new Path2D();
        path.moveTo((s/2)+120,h/2);
        path.lineTo((s/2),(h/2)-70);
        path.lineTo((s/2),h/2);
        ctx.fill(path);

      }
    }
    else if((length_y==length_x && length_x!=length_z)||(length_y==length_z && length_x!=length_y)){
      document.getElementById("txtresult").innerHTML= 'It is an isoceles Triangle';
      document.getElementById("main2").innerHTML= 'isoceles Triangle';
      //If the condition is true it draws the isoceles Triangle and Displays it on canvas
      var canvas=document.getElementById("main");
      if(canvas.getContext){

        var ctx=canvas.getContext('2d')
        var s=canvas.width;
        var h=canvas.height;

        var path=new Path2D();
        path.moveTo((s/2)+120,h/2);
        path.lineTo((s/2),(h/2)-70);
        path.lineTo((s/2),h/2);
        ctx.fill(path);
      }
    }
    else if((length_z==length_y && length_z!=length_x)||(length_z==length_x && length_z!=length_y)){
      document.getElementById("txtresult").innerHTML= 'It is an isoceles Triangle';
      document.getElementById("main2").innerHTML= 'isoceles Triangle';
      //If the condition is true it draws the isoceles Triangle and Displays it on canvas
      var canvas=document.getElementById("main");
      if(canvas.getContext){

        var ctx=canvas.getContext('2d')
        var s=canvas.width;
        var h=canvas.height;

        var path=new Path2D();
        path.moveTo((s/2)+120,h/2);
        path.lineTo((s/2),(h/2)-70);
        path.lineTo((s/2),h/2);
        ctx.fill(path);
      }

    }
    else if(length_x==length_y && length_x==length_z && length_y==length_z){
      document.getElementById("txtresult").innerHTML= 'It is an Equilateral Triangle';
      document.getElementById("main2").innerHTML= 'Equilateral Triangle';
      //If the condition is true it draws the Equilateral Triangle and Displays it on canvas
      var canvas=document.getElementById("main");
      if(canvas.getContext){
        var ctx=canvas.getContext('2d')
        var s=canvas.width;
        var h=canvas.height;
        var path=new Path2D();
        path.moveTo((s/2)+100,h/2);
        path.lineTo((s/2),(h/2)-70);
        path.lineTo((s/2)-90,h/2);
        ctx.fill(path);

      }

    }
    else if(length_x!=length_y && length_x!=length_z && length_z!=length_y ){
      document.getElementById("txtresult").innerHTML= 'It is an Scalene Triangle';
      document.getElementById("main2").innerHTML= 'Scalene Triangle';
      //If the condition is true it draws the Scalene Triangle and Displays it on canvas
      var canvas=document.getElementById("main");
      if(canvas.getContext){
        var ctx=canvas.getContext('2d')
        var s=canvas.width;
        var h=canvas.height;
        var path=new Path2D();
        path.moveTo((s/2)+50,h/2);
        path.lineTo((s/2),(h/2)-70);
        path.lineTo((s/2)-120,h/2);
        ctx.fill(path);

      }
    }
  }
  else{
    alert("Its not a Triangle maybe its a "+randomWords[accesArr]);
    document.getElementById("txtresult").innerHTML= 'Its not in anyway a Triangle'+' Your values are '+emptArr;
    return false;
  }

  document.getElementById('numbers').innerHTML="your values are "+emptArr
	var output=0;
	for(i=0;i<emptArr.length;i++){
		output+=emptArr[i];

    }
	document.getElementById('Perimeter').innerHTML="Perimeter is "+output

};
// draws isoceles
function drawIsoceles(){
  var canvas=document.getElementById("isoceles");
  if(canvas.getContext){

    var ctx=canvas.getContext('2d')
    var s=canvas.width;
    var h=canvas.height;

    var path=new Path2D();
    path.moveTo((s/2)+120,h/2);
    path.lineTo((s/2),(h/2)-70);
    path.lineTo((s/2),h/2);
    ctx.fill(path);
    ctx.fillStyle="rgba(250,255,255,0.9)";
  }
}
drawIsoceles();
//Draws equileteral
function drawsEquileteral(){
  var canvas=document.getElementById("equileteral");
  if(canvas.getContext){
    var ctx=canvas.getContext('2d')
    var s=canvas.width;
    var h=canvas.height;
    var path=new Path2D();
    path.moveTo((s/2)+100,h/2);
    path.lineTo((s/2),(h/2)-70);
    path.lineTo((s/2)-90,h/2);
    ctx.fill(path);
    ctx.fillStyle="rgba(250,255,255,0.9)"
  }
}
drawsEquileteral();
//Draws Scalene
function drawScalene(){
  var canvas=document.getElementById("scalene");
  if(canvas.getContext){
    var ctx=canvas.getContext('2d')
    var s=canvas.width;
    var h=canvas.height;
    var path=new Path2D();
    path.moveTo((s/2)+80,h/2);
    path.lineTo((s/2),(h/2)-70);
    path.lineTo((s/2)-120,h/2);
    ctx.fill(path);
    ctx.fillStyle="rgb(250,255,255,0.9)";
  }
}
drawScalene();
//clearng the canvas
function clearCanvas(){
  var canvas=document.getElementById("main");
  if(canvas.getContext){
  var ctx=canvas.getContext('2d');
  ctx.clearRect(0,0,canvas.width,canvas.height);
}
}
