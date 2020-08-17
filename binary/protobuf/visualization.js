for (let i = 0; i < 242; i++) {
  const byteElement = document.getElementById(`byte${i}`);
  const expElement = document.getElementById(`exp${i.toString(16)}`);
  if (byteElement == null || expElement == null) {
    continue;
  }

  byteElement.addEventListener("mouseenter", event => {
    expElement.classList.add("visible");
  }); 
  byteElement.addEventListener("mouseleave", event => {
    expElement.classList.remove("visible");
  }); 
}

for (const element of document.getElementsByClassName("region")) {
  const regionClass = element.classList[1];
  const [foo, startStr, endStr] = regionClass.split("-");
  const start = parseInt(startStr);
  const end = parseInt(endStr);

  element.addEventListener("mouseenter", event => {
    for (let i = start; i <= end; i++) {
      const byteElement = document.getElementById(`byte${i}`);
      byteElement.classList.add("selected");

      const expElement = document.getElementById(`exp${i}`);
      if (expElement != null) expElement.classList.add("visible");
    }
  }); 
  element.addEventListener("mouseleave", event => {
    for (let i = start; i <= end; i++) {
      const byteElement = document.getElementById(`byte${i}`);
      byteElement.classList.remove("selected");

      const expElement = document.getElementById(`exp${i}`);
      if (expElement != null) expElement.classList.remove("visible");
    }
  }); 
}

const nobyteDefaultExp = document.getElementById(`exp-nobyte-default`);
const nobyteListExp = document.getElementById(`exp-nobyte-list`);

for (const element of document.getElementsByClassName("nobyte-default")) {
  element.addEventListener("mouseenter", event => {
    nobyteDefaultExp.classList.add("visible");
  }); 
  element.addEventListener("mouseleave", event => {
    nobyteDefaultExp.classList.remove("visible");
  }); 
}

for (const element of document.getElementsByClassName("nobyte-list")) {
  element.addEventListener("mouseenter", event => {
    nobyteListExp.classList.add("visible");
  }); 
  element.addEventListener("mouseleave", event => {
    nobyteListExp.classList.remove("visible");
  }); 
}
