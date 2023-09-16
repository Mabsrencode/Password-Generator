function refreshClicks() {
  console.log("Refreshed");
  checkLength();
  makeid(passValue);
}
function copyClicks() {
  console.log("Copied");

  // Select the text field
  textField.select();
  textField.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(textField.value);
}
function btnFunction() {
  copyClicks();
}
