const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
// Change text and gif when the Yes button is clicked
yesBtn.addEventListener("click", () => {
  question.innerHTML = "I LOVE YOU TOO 😘 <3";
  gif.src = "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3N3AxNG5hYzJ4cGQ3aXFzOXJuYjl0dHMwbTA3YWRtMXRkNnlzaG5udCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/FJfehKZSVZRXIcIusd/giphy.gif?cid=ecf05e47klhwx3ewooyt55o58pqr9v9iy1wi9iwujybtmmgb&ep=v1_gifs_related&rid=giphy.gif&ct=g";
});
// Make the No button move randomly on hover
noBtn.addEventListener("mouseover", () => {
  const wrapper = document.querySelector(".wrapper");
  const wrapperRect = wrapper.getBoundingClientRect();
  const noBtnRect = noBtn.getBoundingClientRect();
  // Calculate max positions to ensure the button stays within the wrapper
  const maxX = wrapperRect.width - noBtnRect.width;
  const maxY = wrapperRect.height - noBtnRect.height;
  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);
  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";

});