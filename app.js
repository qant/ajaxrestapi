//Using https://jsonplaceholder.typicode.com/
const list = document.getElementById("listaado");

document.getElementById("cargar").addEventListener("click", loadApiData);

function loadApiData() {
  const xhr = new XMLHttpRequest();
  const url = "https://jsonplaceholder.typicode.com/posts";
  xhr.open("GET", url, true);
  xhr.onload = function() {
    if (xhr.status === 200) {
      showData(JSON.parse(this.response));
    }
  };
  xhr.send();
}

function showData(json) {
  console.log(json);
}
