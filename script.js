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
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQMAgy_XeSr2CmOITAysaZtDxsVUSTSYtSM2EKE5ivhg&s",
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
