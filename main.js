console.log("celebrities");

//create variable for airtable
var Airtable = require("airtable");
console.log(Airtable);

//connect to our base using API key 
var base = new Airtable({apiKey: "keyO9wq4XLHM7yf9d"}).base("appZer0PPJ4sMoXbN");


//get our collection base, select all the records 
//specify functions that will recieve the data
base("celebrities").select({
  maxRecords: 100,
  view: "Grid view"
}).eachPage(gotPageOfCelebrities, gotAllCelebrities);

// an empty array to hold our data
var celebrities = [];

// callback function that receives our data
function gotPageOfCelebrities(records, fetchNextPage) {
  console.log("gotPageOfCelebrities()");
  // add the records from this page to our rocks array
  celebrities.push(...records);
  // request more pages
  fetchNextPage();
}

//call back function that is called when all pages are loaded
function gotAllCelebrities(err) {
  console.log("gotAllCelebrities()");

  //report an error
  if (err) {
      console.log("error loading celebrities");
      console.error(err);
      return;
  }
      //call function to log and show the music 
      consoleLogCelebrities();
      showCelebrities();
}

// just loop through the books and console.log them
function consoleLogCelebrities() {
  console.log("consoleLogCelebrities()");
  celebrities.forEach((celebritie) => {
    console.log("Celebritie:", celebritie);
  });
}

//look through airtable data, create elements
function showCelebrities() {
  console.log("showCelebrities()");
  celebrities.forEach((celebritie) => {



    //CREATE NEW DIV CONTAINER
    var dateContainer = document.createElement("div");
    dateContainer.classList.add("date-container");
    document.querySelector(".container").append(dateContainer);

    //add dates to date container
    var showDate = document.createElement("a");
    showDate.classList.add("show-date");
    showDate.innerText = celebritie.fields.birthday;
    dateContainer.append(showDate);


//CREATE DATE CONTAINER
    //get genre field from airtable 
    //loop through the array and add each genre as 
    //a class to the celebrity container
    var celebType = celebritie.fields.occupation;
    celebType.forEach(function(occupation){
      dateContainer.classList.add(occupation.replace(/\s/g, ''))
    }) 

//FILTERING WITH DISPLAY BLOCK AND NONE
    //filter actor
    var filterActor = document.querySelector(".js-actor");
    filterActor.addEventListener("click", function(){

      if (dateContainer.classList.contains("actor")){
        dateContainer.style.display = "block";
        showDate.style.color = "red";
        
      } else {
        dateContainer.style.display = "none";
        
      }
    })

    //filter actress
    var filterActress = document.querySelector(".js-actress");
    filterActress.addEventListener("click", function(){

      if (dateContainer.classList.contains("actress")){
        dateContainer.style.display = "block";
        showDate.style.color = "pink";
        
      } else {
        dateContainer.style.display = "none";
   
      }
    })

    //filter artist
    var filterArtist = document.querySelector(".js-artist");
    filterArtist.addEventListener("click", function(){

      if (dateContainer.classList.contains("artist")){
        dateContainer.style.display = "block";
        showDate.style.color = "#3FC81C";
        
      } else {
        dateContainer.style.display = "none";
        
      }
    })

    //filter character
    var filterCharacter = document.querySelector(".js-character");
    filterCharacter.addEventListener("click", function(){

      if (dateContainer.classList.contains("character")){
        dateContainer.style.display = "block";
        showDate.style.color = "black";
        
      } else {
        dateContainer.style.display = "none";
        
      }
    })

    //filter comedian
    var filterComedian = document.querySelector(".js-comedian");
    filterComedian.addEventListener("click", function(){

      if (dateContainer.classList.contains("comedian")){
        dateContainer.style.display = "block";
        showDate.style.color = "#FFAD33";
        
      } else {
        dateContainer.style.display = "none";
        
      }
    })

    //filter director
    var filterDirector = document.querySelector(".js-director");
    filterDirector.addEventListener("click", function(){

      if (dateContainer.classList.contains("director")){
        dateContainer.style.display = "block";
        showDate.style.color = "#FFF279";
        
      } else {
        dateContainer.style.display = "none";
        
      }
    })

    //filter entrepreneur
    var filterEntrepreneur = document.querySelector(".js-entrepreneur");
    filterEntrepreneur.addEventListener("click", function(){

      if (dateContainer.classList.contains("entrepreneur")){
        dateContainer.style.display = "block";
        showDate.style.color = "#B4E3FD";
        
      } else {
        dateContainer.style.display = "none";
        
      }
    })

    //filter fashion blogger
    var filterBlogger = document.querySelector(".js-fashion-blogger");
    filterBlogger.addEventListener("click", function(){

      if (dateContainer.classList.contains("fashion_blogger")){
        dateContainer.style.display = "block";
        showDate.style.color = "#7244D4";
        
      } else {
        dateContainer.style.display = "none";
        
      }
    })

    //filter fashion designer
    var filterDesigner = document.querySelector(".js-fashion-designer");
    filterDesigner.addEventListener("click", function(){

      if (dateContainer.classList.contains("fashion_designer")){
        dateContainer.style.display = "block";
        showDate.style.color = "#C8F3B3";
        
      } else {
        dateContainer.style.display = "none";
        
      }
    })

    //filter film producer
    var filterFilm = document.querySelector(".js-film-producer");
    filterFilm.addEventListener("click", function(){

      if (dateContainer.classList.contains("film_producer")){
        dateContainer.style.display = "block";
        showDate.style.color = "#EBCFF9";
        
      } else {
        dateContainer.style.display = "none";
    
      }
    })

    //filter model
    var filterModel = document.querySelector(".js-model");
    filterModel.addEventListener("click", function(){

      if (dateContainer.classList.contains("model")){
        dateContainer.style.display = "block";
        showDate.style.color = "#830000";
        
      } else {
        dateContainer.style.display = "none";
        
      }
    })
    

    //filter musician
    var filterMusician = document.querySelector(".js-musician");
    filterMusician.addEventListener("click", function(){

      if (dateContainer.classList.contains("musician")){
        dateContainer.style.display = "block";
        showDate.style.color = "#FFE3C1";
        
      } else {
        dateContainer.style.display = "none";
        
      }
    })

    //filter photographer
    var filterPhotographer = document.querySelector(".js-photographer");
    filterPhotographer.addEventListener("click", function(){

      if (dateContainer.classList.contains("photographer")){
        dateContainer.style.display = "block";
        showDate.style.color = "#FFE0FA";
        
      } else {
        dateContainer.style.display = "none";
        
      }
    })

    //filter rapper
    var filterRapper = document.querySelector(".js-rapper");
    filterRapper.addEventListener("click", function(){

      if (dateContainer.classList.contains("rapper")){
        dateContainer.style.display = "block";
        showDate.style.color = "#56820F";
        
      } else {
        dateContainer.style.display = "none";
        
      }
    })

    //filter singer
    var filterSinger = document.querySelector(".js-singer");
    filterSinger.addEventListener("click", function(){

      if (dateContainer.classList.contains("singer")){
        dateContainer.style.display = "block";
        showDate.style.color = "#FF8888";
        
      } else {
        dateContainer.style.display = "none";
        
      }
    })

/*     //filter reset
    var filterReset = document.querySelector(".js-reset");
    filterReset.addEventListener("click", function(){
      dateContainer.style.display = "block";
      
    }) */


/* //SORTING
    //on mouse over on SORT BY, show the occupations
    var categories = document.querySelector(".js-categories");
    var sortHover = document.querySelector(".js-sort");
    var filter = document.querySelector(".filter");
    sortHover.addEventListener("mouseover", function(){

    categories.style.display = "block";

    })

    filter.addEventListener("mouseleave", function(){
      categories.style.display = "none";  
    }) */


//STYLING IMAGES ON THE PAGE
            //creating new div container for images
            var imageContainer = document.createElement("div");
            imageContainer.classList.add("image-container");
            document.querySelector(".container").append(imageContainer);
    
            //add instagram image 1 to container
            var celebImage = document.createElement("img");
            celebImage.classList.add("celeb-image");
            celebImage.src = celebritie.fields.image[0].url;
            imageContainer.append(celebImage);
    

    
 


//add reveal and then click function to reveal the name of celebrity
var reveal = document.createElement("p");
reveal.classList.add("reveal");
reveal.innerText = "reveal";
imageContainer.append(reveal);

var celebName = document.createElement("p");
celebName.classList.add("celeb-name");
celebName.innerText = celebritie.fields.name;
imageContainer.append(celebName);

//click to reveal 

reveal.addEventListener("click", function(){
  celebName.classList.toggle("active");
})



//going to remove this for version 4-15
//CREATE NAME CONTAINER AND ADD ONE RIGHT ANSWER AND TWO WRONG ANSWERS
/*          var nameContainer = document.createElement("div");
            nameContainer.classList.add("name-container");
            document.querySelector(".container").append(nameContainer);
    
            //add right name to name container
            var correctName = document.createElement("h2");
            correctName.classList.add("correct-name");
            correctName.innerText = celebritie.fields.right_answer;
            nameContainer.append(correctName);

            //add first wrong name to name container
            var firstWrongName = document.createElement("h2");
            firstWrongName.classList.add("first-wrong-name");
            firstWrongName.innerText = celebritie.fields.wrong_answer;
            nameContainer.append(firstWrongName);

            //add second wrong name to name container
            var secondWrongName = document.createElement("h2");
            secondWrongName.classList.add("second-wrong-name");
            secondWrongName.innerText = celebritie.fields.wrong_answer_two;
            nameContainer.append(secondWrongName); */


            


/*             let randomPosition = document.querySelectorAll(nameContainer);
            randomPosition  */
            




             //create instagram again button
/*             var celebInsta = document.createElement("p");
            celebInsta.classList.add("celeb-insta");
            celebInsta.innerText = celebritie.fields.instagram;
            nameContainer.append(celebInsta);

            //create guess again button
            var guessAgain = document.createElement("p");
            guessAgain.classList.add("guess-again");
            guessAgain.innerText = "guess again";
            nameContainer.append(guessAgain); */

//create addEventListener to wrong answer class
//create click function to show the try again button
//display none nameContainer and imageContainer
//make the try again button displayl block the nameContainer and imageContainer
/*               var incorrect = document.querySelector(".incorrect");
              firstWrongName.addEventListener("click", function(){

              firstWrongName.style.color = "red";
              tryAgain.style.display = "block";
              incorrect.style.display = "block";
              guess.style.display = "none"; 
            }) */


//second wrong answer function
/*               secondWrongName.addEventListener("click", function(){
              secondWrongName.style.color = "red";
            })

//correct answer functoin 
              var correct = document.querySelector(".correct");
              correctName.addEventListener("click", function(){

              correctName.style.color = "#7cfc00";
              celebInsta.style.display = "block";
              guessAgain.style.display = "block";

            })
  
//guess again function 
//reset everything 
//hide imageContainer
//hide nameContainer 
            guessAgain.addEventListener("click", function(){
              imageContainer.classList.toggle("active");
              nameContainer.classList.toggle("active");
              guess.classList.toggle("active");
              birthday.classList.toggle("inactive");
            })
 */







 //CREATE TOGGLE WITH DATE CONTAINER
 //when user clicks on date container names and images will appear/dissappear
            var birthday = document.querySelector(".birthday");
            var guess = document.querySelector(".guess");
            dateContainer.addEventListener("click", function(){

              imageContainer.classList.toggle("active");
              nameContainer.classList.toggle("active");
              birthday.classList.toggle("inactive");
              guess.classList.toggle("active");
              incorrect.style.display = "none";
            })






});
}















//SHOW

/*     //show celebrity names
    var celebName = document.createElement("h1");
    celebName.innerText = celebritie.fields.name;
    document.body.append(celebName);

    //show celebrity image 
    var celebImage = document.createElement("img");
    celebImage.src = celebritie.fields.image[0].url;
    document.querySelector(".container").append(celebImage);

    //show location
    var celebLocation = document.createElement("p");
    celebLocation.innerText = celebritie.fields.location;
    document.body.append(celebLocation);

    //show occupation
    var celebOccupation = document.createElement("p");
    celebOccupation.innerText = celebritie.fields.occupation;
    document.body.append(celebOccupation);

    //show instagram
    var celebInsta = document.createElement("p");
    celebInsta.innerText = celebritie.fields.instagram;
    document.body.append(celebInsta);

    //show birthday 
    var celebBirthday = document.createElement("p");
    celebBirthday.innerText = celebritie.fields.birthday;
    document.body.append(celebBirthday);

    //show instagram images
    var instagramImage = document.createElement("img");
    instagramImage.src = celebritie.fields.instagram_images[0].url;
    document.querySelector(".container").append(instagramImage); */
