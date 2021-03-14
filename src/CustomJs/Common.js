
let getHost = function () {
  let main = window;
  let count = 0;
  while (main.location != main.parent.location) {

    if (main.parent != null)
      main = main.parent;
    else
      break;

    count++;
    if (count >= 10)
      return null;
  }
  return main;
};

let renameDocument = function () {
  let main = getHost();
  let btn = main.document.getElementById('testButton');
  btn.click();
};

function hello() {
  alert('Hello!!!');
};
