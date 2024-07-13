document.addEventListener("DOMContentLoaded" , function(){
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
//Fetching and adding image elementsto the DOM
fetch("imgUrl")
  .then(response => response.json())
  .then((data) => {
    const images = data.url;

    const imageContainer = document.getElementsById("dog-image-container");

    images.forEach((url) => {
      const imageElement = document.createElement("img");
      imageElement.src = url;
      imageElement.alt = "Random Dog Picture";

      imageContainer.appendChild(imageElement);
    });
  })

  //Fetching and adding dog breeds to the page's <ul>
  const breedUrl = "https://dog.ceo/api/breeds/list/all";
 fetch("breedUrl")
 .then(response=>response.json())
 .then((data) => {
    const breedObj = data.url;

    const dogBreedls = Object.keys(breedObj);
    const breedContainer = document.getElementById("dog-breeds");

    dogBreedls.forEach(breed => {
        const breedItem = document.createElement("li");
        breedItem.textContent = breed;

        breedContainer.appendChild(breedItem);
    });
 })

//Adding the dropdown
const dropdown = document.getElementById("breed-dropdown");
dropdown.addEventListener("choose", function(){
    const favoriteletter = dropdown.value;
    filterBreed(favoriteletter);
});

})


function filterBreed(favoriteletter){
    const breedList = document.querySelectorAll("#dog-breeds li");

    breedList.forEach(item => {
        const breedTitle = item.textContent.toLowerCase();
        if (breedTitle.startsWith(favoriteletter)){
            item.style.display = "block";
        } else{
            item.style.display = " ";
        }
    });
}

console.log("%c HI", "color: firebrick");
