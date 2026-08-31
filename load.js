 window.RufflePlayer = window.RufflePlayer || {};
 window.addEventListener("load", (event) => {
     const ruffle = window.RufflePlayer.newest();
     const player = ruffle.createPlayer();
     player.style.width = "100%";
     player.style.height = "100%";
     const container = document.getElementById("game-container");
     container.appendChild(player);
     player.ruffle().load("./games/thebindingofisaac.swf");
 });