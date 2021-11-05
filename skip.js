const buttonClasses = [
  "ytp-ad-skip-button ytp-button", // skippable ads
  "ytp-ad-overlay-close-button", // overlay ads
];

function simulateClick(button) {
  button.dispatchEvent(
    new MouseEvent("click", {
      view: window,
      bubbles: true,
      cancelable: true,
    })
  );
}

setInterval(function () {
  const buttons = buttonClasses.flatMap(
    (b) => Array.from(document.getElementsByClassName(b)) || []
  );
  buttons.forEach((button) => {
    simulateClick(button);
  });
}, 2000);
