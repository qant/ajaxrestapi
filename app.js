//Using https://jsonplaceholder.typicode.com/
const list = document.getElementById("listado");

document.getElementById("cargar").addEventListener("click", loadApiData);

function loadApiData() {
  const xhr = new XMLHttpRequest();
  const url = "https://jsonplaceholder.typicode.com/posts";
  xhr.open("GET", url, true);
  xhr.onload = function() {
    if (xhr.status === 200) {
      showData(JSON.parse(this.responseText));
    }
  };
  xhr.send();
}

function loadApiDataModernWay() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(json => showData(json));
}

function showData(json) {
  let content = "<table>";
  json.forEach(post => {
    content += `<tr>
      <td>${post.id}</td>
      <td>${post.title}</td>
      <td>${post.body}</td>
      </tr>`;
  });
  content += "</table>";
  list.innerHTML = content;
}
