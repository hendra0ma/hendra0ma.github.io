document.body.addEventListener("mousemove", function(e) {
  const xPos = Math.round((e.clientX / window.innerWidth) * 255);
  const yPos = Math.round((e.clientY / window.innerHeight) * 255);
  document.body.style.backgroundColor = "rgb(" + xPos + "," + yPos + ",100)";
});

function getPilihanComp() {
  var comp = Math.random();

  if (comp < 0.34) return "gajah";
  if (comp >= 0.34 && comp < 0.67) return "orang";
  return "semut";
}

function getHasil(comp, player) {
  if (player == comp) return "SERI!";
  if (player == "gajah") return comp == "orang" ? "MENANG!" : "KALAH!";
  if (player == "orang") return comp == "gajah" ? "KALAH!" : "MENANG!";
  if (player == "semut") return comp == "orang" ? "KALAH" : "MENANG!";
}
const pGajah = document.querySelector(".gajah");
pGajah.addEventListener("click", function() {
  const pilihanComputer = getPilihanComp();
  const pilihanPlayer = pGajah.className;
  const hasil = getHasil(pilihanComputer, pilihanPlayer);
  const info = document.querySelector("div.info");
  const computer = document.querySelector("img.img-komputer");
  computer.setAttribute("src", "img/" + pilihanComputer + ".png");
  info.innerHTML = hasil;
});

const pOrang = document.querySelector(".orang");
pOrang.addEventListener("click", function() {
  const pilihanComputer = getPilihanComp();
  const pilihanPlayer = pOrang.className;
  const hasil = getHasil(pilihanComputer, pilihanPlayer);
  const info = document.querySelector("div.info");
  const computer = document.querySelector("img.img-komputer");
  computer.setAttribute("src", "img/" + pilihanComputer + ".png");
  info.innerHTML = hasil;
});

const pSemut = document.querySelector(".semut");
pSemut.addEventListener("click", function() {
  const pilihanComputer = getPilihanComp();
  const pilihanPlayer = pSemut.className;
  const hasil = getHasil(pilihanComputer, pilihanPlayer);
  const info = document.querySelector("div.info");
  const computer = document.querySelector("img.img-komputer");
  computer.setAttribute("src", "img/" + pilihanComputer + ".png");
  info.innerHTML = hasil;
});
