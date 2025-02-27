const canvas = document.getElementById("snow");
const ctx = canvas.getContext("2d");
let width = document.querySelector(".header-custom").clientWidth;
let height = document.querySelector(".header-custom").clientHeight;

const flakes = [];
const snowPile = []; // Array para armazenar a posição dos flocos acumulados
const maxSnowPileSize = 1500; // Limite máximo de flocos acumulados

// Ajusta o tamanho do canvas quando a janela é redimensionada
function resizeCanvas() {
  width = document.querySelector(".header-custom").clientWidth;
  height = document.querySelector(".header-custom").clientHeight;
  canvas.width = width;
  canvas.height = height;
}

// Cria os flocos de neve
function createFlakes() {
  for (let i = 0; i < 100; i++) {
    flakes.push({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 4 + 1,
      density: Math.random() * 0.5 + 0.5,
    });
  }
}

// Desenha os flocos de neve
function drawFlakes() {
  // Limpa o canvas
  ctx.clearRect(0, 0, width, height);

  // Desenha a pilha de neve acumulada
  ctx.fillStyle = "white";
  ctx.beginPath();
  for (let i = 0; i < snowPile.length; i++) {
    const flake = snowPile[i];
    ctx.moveTo(flake.x, flake.y);
    ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2, true);
  }
  ctx.fill();

  // Desenha os flocos de neve caindo
  ctx.fillStyle = "white";
  ctx.beginPath();
  for (let i = 0; i < flakes.length; i++) {
    const flake = flakes[i];
    ctx.moveTo(flake.x, flake.y);
    ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2, true);
  }
  ctx.fill();

  moveFlakes();

  // Chama a próxima animação
  requestAnimationFrame(drawFlakes);
}

// Move os flocos de neve
function moveFlakes() {
  for (let i = 0; i < flakes.length; i++) {
    const flake = flakes[i];
    flake.y += Math.pow(flake.density, 2) + 1;

    // Verifica se o floco atingiu o fundo
    if (flake.y + flake.radius >= height) {
      // Adiciona o floco à pilha de neve
      snowPile.push({
        x: flake.x,
        y: height - flake.radius, // Ajusta a posição para o fundo
        radius: flake.radius,
      });

      // Remove flocos antigos se o limite for atingido
      if (snowPile.length > maxSnowPileSize) {
        snowPile.shift(); // Remove o floco mais antigo
      }

      // Reinicia o floco no topo
      flakes[i] = {
        x: Math.random() * width,
        y: 0,
        radius: flake.radius,
        density: flake.density,
      };
    }
  }
}

// Inicializa o efeito de neve
function init() {
  resizeCanvas();
  createFlakes();
  requestAnimationFrame(drawFlakes); // Usa requestAnimationFrame em vez de setInterval
}

// Eventos
window.addEventListener("resize", resizeCanvas);
window.addEventListener("load", init);
