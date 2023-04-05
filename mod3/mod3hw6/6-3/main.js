let boxI = document.getElementById('foto');

boxI.onclick = function (event) {
   if (event.target.className == 'box') {
      let img = document.createElement("img");
      img.style.margin = '0 auto';

      let ask = prompt("Посилання на зображення");
      img.src = ask;

      event.target.innerHTML = '';
      event.target.appendChild(img);
   };
};
