// Criar corações caindo automaticamente
function criarCoracao() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.innerHTML = '❤️';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = Math.random() * 2 + 3 + 's';
  heart.style.fontSize = Math.random() * 20 + 10 + 'px';
  
  document.getElementById('coracoes-bg').appendChild(heart);
  
  setTimeout(() => { heart.remove(); }, 5000);
}

setInterval(criarCoracao, 300);

// Botão de interação
document.getElementById('btnAmor').addEventListener('click', function() {
  document.getElementById('surpresa').classList.toggle('hidden');
  this.innerText = "Te amo!";
});
