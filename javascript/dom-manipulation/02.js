console.log("Event examples");

function handleClick() {
  console.log("Button Cliked");
  const headings = document.querySelectorAll(".red-heading");

  headings.forEach((heading, index) => {
    const color = heading.style.color;

    if (color == "blue") {
      heading.style.color = "red";
      heading.innerHTML = `${index + 1} . I am now red heading hurrreee...`;
    } else {
      heading.style.color = "blue";
      heading.innerHTML = `${index + 1} . I am now blue heading hurrreee...`;
    }
  });
}

function onWindowLoad() {
  console.log("Window loaded...");
  const h1 = document.querySelector("h1");

  const submitButton = document.querySelector("input[type='submit']");

  submitButton.addEventListener("click", handleClick);

  console.log(submitButton);
}

window.onload = onWindowLoad;
