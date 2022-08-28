window.setTimeout("waktu()", 1000);

function waktu() {
  var waktu = new Date();
  setTimeout("waktu()", 1000);
  document.getElementById("jam").innerHTML = waktu.getHours();
  document.getElementById("menit").innerHTML = waktu.getMinutes();
  document.getElementById("detik").innerHTML = waktu.getSeconds();
}


onload = function () {
        let id = document.getElementById("app");
        let loading = document.createElement("div");

        loading.textContent = "Loading";
        loading.style.fontSize = "28px";
        id.appendChild(loading);

        let loaded = setInterval(() => {
          loading.textContent = loading.textContent + ".";
        }, 1000);

        setTimeout(() => {
          clearInterval(loaded);
          loading.textContent = "WELCOME TO MY PAGE";
        }, 4000);
      };
      setTimeout(() => {
        window.location = "app.html";
      }, 6000);
