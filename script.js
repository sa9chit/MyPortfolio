const rightResponsiveEl = document.querySelector(".rightResponsive");
const x = document.querySelector(".fa-xmark");
const bar = document.querySelector(".fa-bars");
const iconEl = document.querySelector(".iconHide");
var count = 1;
iconEl.addEventListener("click", () => {
  console.log("hii");
  rightResponsiveEl.classList.toggle("active");
  if (count === 1) {
    x.style.visibility = "visible";
    bar.style.visibility = "hidden";
    count = 0;
  } else {
    x.style.visibility = "hidden";
    bar.style.visibility = "visible";
    count = 1;
  }
});

setInterval(() => {
  window.addEventListener("scroll", (e) => {
    if (window.scrollY > 58) {
      rightResponsiveEl.classList.remove("active");
      x.style.visibility = "hidden";
      bar.style.visibility = "visible";
    }
  });
}, 100);

const img_list = document.querySelector(".img-list");
const icon = document.querySelectorAll(".icon");
console.log(img_list.clientWidth);
icon.forEach((elem) => {
  elem.addEventListener("click", () => {
    const direction = elem.id === "backward" ? -1 : 1;
    console.log(direction);
    const scrollAmount = 277 * direction;
    console.log(scrollAmount);
    img_list.scrollBy({ left: scrollAmount, behavior: "smooth" });
  });
});

const card_container = document.querySelector(".card-container");

const data = [
  {
    img: "https://cdn.worldvectorlogo.com/logos/react-1.svg",
    learning: "react",
    about:
      "JavaScript library for building user interfaces with efficiency and flexibility",
  },
  {
    img: "https://images.ctfassets.net/23aumh6u8s0i/c04wENP3FnbevwdWzrePs/1e2739fa6d0aa5192cf89599e009da4e/nextjs",
    learning: "NextJs",
    about:
      "React framework for seamless, server-rendered JavaScript applications effortlessly",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    learning: "JavaScript",
    about:
      "Dynamic, versatile scripting language powering interactive web experiences seamlessly",
  },
  {
    img: "https://scontent-del1-1.xx.fbcdn.net/v/t39.30808-6/299463877_560030875914611_8025210373789510385_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=x91C6h2IoK0AX-t7Glf&_nc_ht=scontent-del1-1.xx&oh=00_AfA9wAV82J3ROVMfvl4ezzOqX8pbpuHLin3t-N0oSUwn7A&oe=65CF5737",
    learning: "Tailwind",
    about:
      "Utility-first CSS framework for building modern, responsive designs efficiently",
  },
];

const add = data.map(
  (data, index) => `<div class="card">
  <img src=${data.img} alt="" />
  <h3 class="about">${data.learning}</h3>
  <p class="discription">${data.about}</p>
</div>`
);
card_container.innerHTML = add.join("");
