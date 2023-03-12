const btnNewDog = document.getElementById("btn-new-dog");
const imgDogPhoto = document.querySelector(".dog-photo img");
const selectBreed = document.getElementById("breed");

function populateBreedsList() {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      const data = JSON.parse(this.responseText);
      const breeds = data.message;
      for (const breed in breeds) {
        const option = document.createElement("option");
        option.value = breed;
        option.text = breed;
        selectBreed.add(option);
      }
    }
  };
  xhr.open("GET", "https://dog.ceo/api/breeds/list/all");
  xhr.send();
}


function getNewDogPhoto() {
    const breed = selectBreed.value;
    if (!breed) {
      alert("Please select a breed.");
      return;
    }
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        const data = JSON.parse(this.responseText);
        imgDogPhoto.src = data.message;
      }
    };
    xhr.open("GET", `https://dog.ceo/api/breed/${breed}/images/random`);
    xhr.send();
  }
  
  populateBreedsList();
  btnNewDog.addEventListener("click", getNewDogPhoto);

