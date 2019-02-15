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
    }
    else if((length_y==length_x && length_x!=length_z)||(length_y==length_z && length_x!=length_y)){
      document.getElementById("txtresult").innerHTML= 'It is an isoceles Triangle';
    }
    else if((length_z==length_y && length_z!=length_x)||(length_z==length_x && length_z!=length_y)){
      document.getElementById("txtresult").innerHTML= 'It is an isoceles Triangle';

    }
    else if(length_x==length_y && length_x==length_z && length_y==length_z){
      document.getElementById("txtresult").innerHTML= 'It is an Equilateral Triangle';

    }
    else if(length_x!=length_y && length_x!=length_z && length_z!=length_y ){
      document.getElementById("txtresult").innerHTML= 'It is an Scalene Triangle';
    }
  }
  else{
    alert("Its not a Triangle maybe its a "+randomWords[accesArr]);
    document.getElementById("txtresult").innerHTML= 'Its not in anyway a Triangle'+' Your values are '+emptArr;
    return false;
  }

  alert("your values are "+emptArr)
	var output=0;
	for(i=0;i<emptArr.length;i++){
		output+=emptArr[i];

    }
	document.getElementById('Perimeter').innerHTML="Perimeter is "+output

}
