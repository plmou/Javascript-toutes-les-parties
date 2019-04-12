function switchimage(img){
documentgetElementById("myImg1").src = "image1_2.jpg";
}

function switchallimages() {
  document.getElementById("myImg1").src = "image1_2.jpg";
  document.getElementById("myImg2").src = "image2_2.jpg";
  document.getElementById("myImg3").src = "image3_2.jpg";
  document.getElementById("myImg4").src = "image4_2.jpg";
  document.getElementById("myImg5").src = "image5_2.jpg";
}
function changeimage(img,source) {
img.src = source;
