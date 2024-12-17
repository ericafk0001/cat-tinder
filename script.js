document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOMCONTENTLoaded");

  const jobs = [
    "Software Developer",
    "Graphic Designer",
    "Data Scientist",
    "Product Manager",
    "Marketing Specialist",
    "Web Developer",
    "Teacher",
    "Nurse",
    "Doctor",
    "Lawyer",
    "Engineer",
    "Scientist",
    "Artist",
    "Chef",
    "Photographer",
    "Writer",
    "Project Manager",
    "Accountant",
    "Consultant",
    "Customer Support Specialist",
    "Entrepreneur",
    "Clown",
    "Unemployed",
    "Mcdonald's Cashier",
    "Professional Napper",
    "Space Tourist",
    "Fortune Teller",
    "Unicorn Trainer",
    "Dragon Tamer",
    "Time Traveler",
    "Pirate",
    "Zombie Hunter",
    "Reel Scroller",
  ];

  const catImages = [
    "cats/cat111.jpg",
    "cats/cat483.jpg",
    "cats/cat682.jpg",
    "cats/cat716.jpg",
    "cats/cat837.jpg",
    "cats/cat1060.jpg",
    "cats/cat1879.jpg",
    "cats/cat2122.jpg",
    "cats/cat2682.jpg",
    "cats/cat2832.jpg",
    "cats/cat3164.jpg",
    "cats/cat3451.jpg",
    "cats/cat3579.jpg",
    "cats/cat3813.jpg",
    "cats/cat4027.jpg",
    "cats/cat4049.jpg",
    "cats/cat4268.jpg",
    "cats/cat4686.jpg",
    "cats/cat4770.jpg",
    "cats/cat4652.jpg",
  ];

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  shuffleArray(catImages);

  function createProfile(catData, imageSrc) {
    if (!imageSrc) {
      console.error("No image available for this cat");
      return;
    }

    const catDiv = document.createElement("div");
    catDiv.className = "cat";

    const catImg = document.createElement("img");
    catImg.src = imageSrc;
    catImg.className = "cat-img";
    catDiv.appendChild(catImg);

    const secondContentDiv = document.createElement("div");
    secondContentDiv.className = "second-content";

    const catNameH2 = document.createElement("h2");
    catNameH2.className = "cat-name";

    const catNameSpan = document.createElement("span");
    catNameSpan.className = "cat-name";
    catNameSpan.textContent = catData.name || "Unknown Cat";

    const catAgeSpan = document.createElement("span");
    catAgeSpan.className = "cat-age";
    catAgeSpan.textContent = `, ${catData.age || "?"}`;

    catNameH2.appendChild(catNameSpan);
    catNameH2.appendChild(catAgeSpan);

    secondContentDiv.appendChild(catNameH2);

    const catOccupationP = document.createElement("p");
    catOccupationP.className = "cat-occupation";
    catOccupationP.textContent = catData.occupation || "No occupation provided";
    secondContentDiv.appendChild(catOccupationP);

    const catLocationP = document.createElement("p");
    catLocationP.className = "cat-occupation";
    catLocationP.textContent =
      `I'm from ${catData.location}` || "No location provided";
    secondContentDiv.appendChild(catLocationP);

    catDiv.appendChild(secondContentDiv);
    document.querySelector("#cat").appendChild(catDiv);
  }

  fetch("https://randomuser.me/api/?nat=us,ca,no,gb,ch")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const cats = data.results.map((user) => ({
        name: `${user.name.first} ${user.name.last}`,
        age: user.dob.age,
        occupation: jobs[Math.floor(Math.random() * jobs.length)],
        location: user.location.country,
      }));

      cats.forEach((cat) => {
        if (catImages.length === 0) {
          console.error("No more images left to assign");
          return;
        }
        const imageSrc = catImages.pop();
        createProfile(cat, imageSrc);
      });
    })
    .catch((error) => console.error("Error fetching data:", error));
});
