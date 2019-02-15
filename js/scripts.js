function triangles(){
  var length_x=parseInt(document.getElementById("one").value);
  var length_y = parseInt(document.getElementById("two").value);
  var length_z= parseInt(document.getElementById("three").value);
  if(((length_x+length_y)>length_z) && ((length_x+length_z)>length_y) && ((length_y+length_z)>length_x)){
    document.getElementById("txtresult").innerHTML= 'Its a Triangle';
  }
}
