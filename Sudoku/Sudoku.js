// Los numeros que van a aparecer en el tablero
//Cada - es un cuadrante vacio del sudoku
const easy = [
    "6------7------5-2------1---362----81--96-----71--9-4-5-2---651---78----345-------",
    "685329174971485326234761859362574981549618732718293465823946517197852643456137298"
  ];
  const medium = [
    "--9-------4----6-758-31----15--4-36-------4-8----9-------75----3-------1--2--3--",
    "619472583243985617587316924158247369926531478734698152891754236365829741472163895"
  ];
  const hard = [
    "-1-5-------97-42----5----7-5---3---7-6--2-41---8--5---1-4------2-3-----9-7----8--",
    "712583694639714258845269173521436987367928415498175326184697532253841769976352841"
  ];

  //Create variables
  var timer;
  var timerRemaining;
  var lives;
  var selectedNum;
  var selectedTile;
  var disableSelect; 

  window.onload = function(){
      //Startgame function when click startgame
    id('Start').addEventListener('click', startGame);
  }

  function startGame(){
    //Choose board difficulty
    let board;
    if(id('diff-1').checked)board = easy[0];
    else if (id('diff-2').checked)board = medium[0];
    else board = hard[0];
    // console.log(board)
    
    //Set lives to 3 and enable selecting numbers and tiles
    lives = 3;
    disableSelect = false;
    id('lives').textContent = 'Lives Remaining: ' + lives;
    //Creates board based on difficulty
    generateBoard(board);
  }

  function generateBoard(board){
    //Clear previous board
    clearPrevious();
  }

  function clearPrevious(){
    let tiles = qsa('.tiles');
    //Remove each tile
    for(let i = 0; i<tiles.length; i++){
      tiles[i].remove();
    }
    //If there is a timer clear it
    if(timer) clearInterval(timer);
    //Deselect any numbers
    for(let i = 0; i < id('number-container').children.length;i++){
      id('number-container').children[i].classList.remove('selected');
    }
    //clear selected variables
    selectedTile = null;
    selectedNum = null;
  }


//Helper functions
  function id(id){
    return document.getElementById(id);
  }

  function qs(selector){
    return document.querySelector(selector);
  }

  function qsa(selector){
    return document.querySelectorAll(selector);
  }