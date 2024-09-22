function init() {
  console.log("Init");

  const tomatoButton = document.querySelector(".tomato-button");
  const blueButton = document.querySelector(".blue-button");

  console.log(tomatoButton, blueButton);

  blueButton.addEventListener("click", () => {
    console.log("Blue butotn click");

    document.body.style.background = "dodgerblue";
  });
  tomatoButton.addEventListener("click", () => {
    console.log("TOtmal butotn click");
    document.body.style.background = "tomato";
  });
}

window.onload = init;
