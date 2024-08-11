let menuButton = document.getElementById("mobile-menu-button");
let menuButtonTwo = document.getElementById("user-menu-button");
let menu = document.getElementById("mobile-menu");
let menuTwo = document.getElementById("menu-two");

menuButton.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});
menuButtonTwo.addEventListener("click", () => {
  menuTwo.classList.toggle("hidden-2");
});

const cards = [
  {
    imageSrc: "./assets/card-1.png",
    date: "Wed 17 ",
    month: "Jul 2024",
    time: "6:30PM",
    checkimg: "./assets/check.png",
    title: "All Blacks & Flying Fijians - Cocktail Fundraiser Party",
    location: "Capital one arena verizon center",
    tags: ["Food", "Music", "Seminar", "Culture"],
  },
  {
    imageSrc: "./assets/card-2.jpeg",
    date: "Wed 17 ",
    month: "Jul 2024",
    time: "6:30PM",
    checkimg: "./assets/check-2.png",
    title: "All Blacks & Flying Fijians - Cocktail Fundraiser Party",
    location: "Virtual",
    tags: ["Food", "Music", "Seminar", "Culture"],
  },
  {
    imageSrc: "./assets/card-2.jpeg",
    date: "Wed 17 ",
    month: "Jul 2024",
    time: "6:30PM",
    checkimg: "./assets/check.png",
    title: "All Blacks & Flying Fijians - Cocktail Fundraiser Party",
    location: "Capital one arena verizon center",
    tags: ["Food", "Music", "Seminar", "Culture"],
  },
  {
    imageSrc: "./assets/card-2.jpeg",
    date: "Wed 17 ",
    month: "Jul 2024",
    time: "6:30PM",
    checkimg: "./assets/check.png",
    title: "All Blacks & Flying Fijians - Cocktail Fundraiser Party",
    location: "Capital one arena verizon center",
    tags: ["Food", "Music", "Seminar", "Culture"],
  },
  {
    imageSrc: "./assets/card-2.jpeg",
    date: "Wed 17 ",
    month: "Jul 2024",
    time: "6:30PM",
    checkimg: "./assets/check-2.png",
    title: "All Blacks & Flying Fijians - Cocktail Fundraiser Party",
    location: "Virtual",
    tags: ["Food", "Music", "Seminar", "Culture"],
  },
  {
    imageSrc: "./assets/card-2.jpeg",
    date: "Wed 17 ",
    month: "Jul 2024",
    time: "6:30PM",
    checkimg: "./assets/check.png",
    title: "All Blacks & Flying Fijians - Cocktail Fundraiser Party",
    location: "Capital one arena verizon center",
    tags: ["Food", "Music", "Seminar", "Culture"],
  },
  {
    imageSrc: "./assets/card-2.jpeg",
    date: "Wed 17 ",
    month: "Jul 2024",
    time: "6:30PM",
    checkimg: "./assets/check.png",
    title: "All Blacks & Flying Fijians - Cocktail Fundraiser Party",
    location: "Capital one arena verizon center",
    tags: ["Food", "Music", "Seminar", "Culture"],
  },
  {
    imageSrc: "./assets/card-2.jpeg",
    date: "Wed 17 ",
    month: "Jul 2024",
    time: "6:30PM",
    checkimg: "./assets/check-2.png",
    title: "All Blacks & Flying Fijians - Cocktail Fundraiser Party",
    location: "Virtual",
    tags: ["Food", "Music", "Seminar", "Culture"],
  },
  {
    imageSrc: "./assets/card-2.jpeg",
    date: "Wed 17 ",
    month: "Jul 2024",
    time: "6:30PM",
    checkimg: "./assets/check.png",
    title: "All Blacks & Flying Fijians - Cocktail Fundraiser Party",
    location: "Capital one arena verizon center",
    tags: ["Food", "Music", "Seminar", "Culture"],
  },
];

const cardContainer = document.getElementById("card-container");
const cardModal = document.getElementById("card-modal");
const modalImage = document.getElementById("modal-image");
const modalDate = document.getElementById("modal-date");
const modalTime = document.getElementById("modal-time");
const modalTitle = document.getElementById("modal-title");
const modalLocation = document.getElementById("modal-location");
const modalTags = document.getElementById("modal-tags");
const modalClose = document.getElementById("modal-close");
cards.forEach((card) => {
  const cardElement = document.createElement("div");
  cardElement.classList.add(
    "max-w-sm",
    "rounded-xl",
    "overflow-hidden",
    "shadow-lg"
  );

  cardElement.innerHTML = `
      <div class="relative card-image">
        <img class="w-full h-48 object-cover" src="${
          card.imageSrc
        }" alt="Event image" />
        <img class="absolute top-4 right-2" src=${card.checkimg} alt="" />
      </div>
      <div class="px-6 py-4">
        <div class="font-bold flex justify-between text-base mb-2">
          <p>${card.date} <span class="font-light">${card.month}</span></p>
          <p class="text-custom-black font-light text-sm mt-1">${card.time}</p>
        </div>
        <p class="text-custom-black text-base font-semibold card-title">
          ${card.title}
        </p>
        <p class="text-gray-500 text-sm mt-4 flex items-center gap-1">
          <img src=${
            card.location !== "Virtual"
              ? "./assets/location.png"
              : "./assets/video.png"
          } alt="" /> ${card.location}
        </p>
      </div>
      <div class="px-6 pb-2">
        ${card.tags
          .map(
            (tag) =>
              `<span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs text-custom-black mr-2 mb-2">${tag}</span>`
          )
          .join("")}
      </div>
    `;

  cardContainer.appendChild(cardElement);

  // Function to populate and show modal
  const showModal = () => {
    modalImage.src = card.imageSrc;
    modalDate.textContent = card.date;
    modalTime.textContent = card.time;
    modalTitle.textContent = card.title;

    // Show the modal
    cardModal.classList.add("open");
    cardModal.classList.remove("hidden");
  };

  // Add event listeners to both the image and title
  cardElement.querySelector(".card-image").addEventListener("click", showModal);
  cardElement.querySelector(".card-title").addEventListener("click", showModal);
});

// Close modal logic (if needed)
document.getElementById("modal-close").addEventListener("click", () => {
  cardModal.classList.remove("open");
  setTimeout(() => {
    cardModal.classList.add("hidden");
  }, 300); // Match the transition time
});
