/* global $ */
// object that gives info
alert("Welcome! Unfortunately, only this and the 'Le Magasin' page are up for view. Enjoy!");

function girls(name, age, location, goal) {
  this.name = name;
  this.age = age;
  this.location = location;
  this.goal = goal;
}

// var Cathy = girls("Cathy", 22, "Chicago, IL", "Meet New People");
// var Cathy = girls("Cathy", 22, "Chicago, IL", "Meet New People");
// var Cathy = girls("Cathy", 22, "Chicago, IL", "Meet New People");
// var Cathy = girls("Cathy", 22, "Chicago, IL", "Meet New People");
// var Cathy = girls("Cathy", 22, "Chicago, IL", "Meet New People");
// var Cathy = girls("Cathy", 22, "Chicago, IL", "Meet New People");
// var Cathy = girls("Cathy", 22, "Chicago, IL", "Meet New People");
// var Cathy = girls("Cathy", 22, "Chicago, IL", "Meet New People");
// var Cathy = girls("Cathy", 22, "Chicago, IL", "Meet New People");
// var Cathy = girls("Cathy", 22, "Chicago, IL", "Meet New People");

// define var name for 10 girls

// Left-arrow clicked (images displayed to decrease by 1)
$(document).on("click", ".fa-angle-left", function(){
  var click = 0;
  click -= 300;
  $("div#users.container").animate({
    scrollLeft: "+=" + click
  }, 500, "linear");
});

// Right-arrow clicked (images displayed to increase by 1)

$(document).on("click", ".fa-angle-right", function(){
  var click = 0;
  click += 300;
  $("div#users.container").animate({
    scrollLeft: "+=" + click
  }, 500, "linear");
});

// When hovered over image display info

var girlsIMG = document.querySelectorAll("img.girls");
console.log(girlsIMG);


for (var i =0; i<girlsIMG.length; i++) {
  // var originalIMG = girlsIMG[i].outerHTML;
  // console.log(originalIMG);
  girlsIMG[i].addEventListener("mouseover", function(){ 
  this.classList.toggle("overlay");

    
  });
  
  
  girlsIMG[i].addEventListener("mouseout", function(){ 
  this.classList.toggle("overlay");});

}
// when wone is hovered the others cant be

// function overlay (img){
//   img.outerHTML = "<div id=\"overlay\">Cathy</div>";
// }

$(document).on("click", ".fa-chevron-circle-down", function(){
  
})