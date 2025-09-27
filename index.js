const seeAllPostsLink = document.querySelector("#bestOfTheWeek a");
seeAllPostsLink.addEventListener("click", (e) => {
  e.preventDefault();

  const existingList = document.getElementById("postsList");

  if (existingList) {
    existingList.remove();
  } else {
    const container = document.getElementById("bestOfTheWeek");

    const posts = [
      "Rodrigo",
      "Lopez",
      "Escobedo"
    ];

    const ul = document.createElement("ul");
    ul.id = "postsList";

    posts.forEach((post) => {
      const li = document.createElement("li");
      li.textContent = post;
      ul.appendChild(li);
    });

    container.appendChild(ul);
  }
});


const seeAllPicsBtn = document.querySelector("#seeAll button");
seeAllPicsBtn.addEventListener("click", () => {
  const existingPics = document.getElementById("extraPics");

  if (existingPics) {
    existingPics.remove();
  } else {
    const container = document.getElementById("seeAll");

    const pics = [
      "soundtrap-n30_i7mx62o-unsplash.jpg",
      "soundtrap-n30_i7mx62o-unsplash.jpg",
      "soundtrap-n30_i7mx62o-unsplash.jpg"
    ];

    const div = document.createElement("div");
    div.id = "extraPics";

    pics.forEach((src) => {
      const img = document.createElement("img");
      img.src = src;
      div.appendChild(img);
    });

    container.appendChild(div);
  }
});


const adsBtn = document.querySelector("#ads button");
adsBtn.addEventListener("click", () => {
  alert("Cargando...");
});
