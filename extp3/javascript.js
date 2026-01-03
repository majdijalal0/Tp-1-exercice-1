let values = [];
const entry=document.getElementById("values");
const button=document.getElementById("submit");
const tableaunontrié=document.getElementById("tableaunontrié");
const sortbutton=document.getElementById("trier");
    button.addEventListener("click", () => {
    values.push(entry.value);
    entry.value="";
    tableaunontrié.innerHTML=values;

    });
    function trier(values) {
  for (let i = 0; i < values.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < values.length; j++) {
      if (values[j] < values[minIndex]) {
        minIndex = j;
      }
    }
    let temp = values[i];
    values[i] = values[minIndex];
    values[minIndex] = temp;
  }
  return values;
}

    sortbutton.addEventListener("click", () => {
        trier(values);
        document.getElementById("tableautrié").innerHTML=values;
    });