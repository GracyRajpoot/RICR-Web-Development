function start() {
  console.log("Game Started");

  document.getElementById("rolldice1").disabled = false;
  document.getElementById("rolldice2").disabled = true;
  document.getElementById("restart").disabled = false;
}

function restart() {
  window.location.reload();
}

// PLAYER 1
function p1play() {

  console.log("Player 1 Playing");

  let score = Number(document.getElementById("p1sc").innerText);
  const DF = Math.floor(Math.random() * 6) + 1;

  switch(DF){
    case 1: document.getElementById("p1dice").src = "https://tse3.mm.bing.net/th/id/OIP.cUfMtb7JGpKyVDouzkVKswHaDd?pid=Api&P=0&h=220";
    breack;
  }
  

  // if dice = 6, change turn
  if (DF === 6) {
    document.getElementById("rolldice1").disabled = false;
    document.getElementById("rolldice2").disabled = true;
  } else {
    document.getElementById("rolldice1").disabled = true;
    document.getElementById("rolldice2").disabled = false;
  }

  score = score + DF;

  document.getElementById("p1sc").innerText = score;
}


// PLAYER 2
function p1play() {

  console.log("Player 1 Playing");

  let score = Number(document.getElementById("p1sc").innerText);
  const DF = Math.floor(Math.random() * 6) + 1;

  switch(DF){
    case 1: document.getElementById("p1dice").src = "https://tse3.mm.bing.net/th/id/OIP.cUfMtb7JGpKyVDouzkVKswHaDd?pid=Api&P=0&h=220";
    breack;
  }
  

  // if dice = 6, change turn
  if (DF === 6) {
    document.getElementById("rolldice1").disabled = false;
    document.getElementById("rolldice2").disabled = true;
  } else {
    document.getElementById("rolldice1").disabled = true;
    document.getElementById("rolldice2").disabled = false;
  }

  score = score + DF;

  document.getElementById("p1sc").innerText = score;
}

