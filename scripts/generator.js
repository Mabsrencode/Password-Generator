var passValue = 12;

function makeid(length) {
  let result = "";
  let characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*_+abcdefghijklmnopqrstuvwxyz0123456789";

  if (document.getElementById("mix").checked) {
    //mix
    characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*_+abcdefghijklmnopqrstuvwxyz0123456789";
    if (document.getElementById("upc").checked) {
      characters = characters.toUpperCase();
    } else if (document.getElementById("lowc").checked) {
      characters = characters.toLowerCase();
    }
  } else if (document.getElementById("char").checked) {
    //all character
    characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (document.getElementById("upc").checked) {
      characters = characters.toUpperCase();
    } else if (document.getElementById("lowc").checked) {
      characters = characters.toLowerCase();
    }
  } else if (document.getElementById("allnum").checked) {
    // all num
    characters = "0123456789";
  }
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  document.getElementById("text__field").value = result;
}

function checkLength() {
  if (document.getElementById("length12").checked) {
    passValue = 12;
  } else if (document.getElementById("length16").checked) {
    passValue = 16;
  } else if (document.getElementById("length24").checked) {
    passValue = 24;
  }
}
checkLength();
makeid(passValue);
