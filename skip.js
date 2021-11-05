const buttonClasses = [
  "ytp-ad-skip-button ytp-button", // close ad button class
  "ytp-ad-overlay-close-button", // Close overlay button class
];

function simulateClick(button) {
  button.dispatchEvent(
    new MouseEvent("click", {
      view: window,
      cancelable: true,
      bubbles: true,
    })
  );
}

setInterval(function () {
  let buttons = buttonClasses.flatMap(
    (b) => Array.from(document.getElementsByClassName(b)) || []
  );
  buttons.forEach((button) => {
    simulateClick(button);
  });
}, 1500);
