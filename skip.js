const buttonClasses = [
  "ytp-ad-skip-button ytp-button", // skippable ads
  "ytp-ad-overlay-close-button", // overlay ads
];

const simulateClick = (button) => {
  button.dispatchEvent(
    new MouseEvent("click", {
      view: window,
      bubbles: true,
      cancelable: true,
    })
  );
};

const skip = () => {
  const activeButtons = buttonClasses.flatMap(
    (button) => Array.from(document.getElementsByClassName(button)) || []
  );
  activeButtons.forEach((button) => simulateClick(button));
};

/* Try using the mutation observer method */
const tryObserver = () => {
  if (!("MutationObserver" in window)) return false;

  const player = (function (nodes) {
    return nodes && nodes[0];
  })(document.getElementsByTagName("ytd-player"));
  
  if (!player) return false;

  const observer = new MutationObserver(skip);
  observer.observe(player, { subtree: true, childList: true });

  return true;
};

if (!tryObserver()) {
  setInterval(function () {
    skip();
  }, 2000);
}
