let boxI = document.getElementById('foto');

boxI.onclick = function () {
   if (event.target.className == 'box') {
      let img = document.createElement("img");
      img.style.display = 'flex';
      img.style.margin = 'auto';

      if (event.target = 'img') {
         event.target.innerHTML = '';
      };

      let ask = prompt("Посилання на зображення");
      img.src = ask;

      event.target.appendChild(img);
   };
};
