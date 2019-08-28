const lol = document.querySelector(".lol");
const bg = document.querySelector(".bg");

lol.addEventListener("mouseover", () => {
  bg.style.display = `none`;
  lol.style.position = "absolute";
  lol.innerHTML = `금 밤 롤 ! !`;
});

bg.addEventListener("mouseover", () => {
  lol.style.display = `none`;
  bg.style.position = "absolute";
  bg.innerHTML = `금 밤 배 ! !`;
});
