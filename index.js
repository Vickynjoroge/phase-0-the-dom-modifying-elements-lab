const main = document.querySelector('main#main');
main.remove();


  let newHeader = document.createElement('h1')
  newHeader.id = "victory";
  newHeader.innerHTML ="Your Text Here";
  document.body.appendChild(newHeader);
  newHeader.innerHTML = "New Text Here";
  newHeader.textContent = '${victory} is the champion';;
