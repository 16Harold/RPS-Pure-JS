// created a new div for game container
const mainDivCon = document.createElement("div");
      mainDivCon.classList = "mainDivCon";
      mainDivCon.id = "main-con";
      //appending div
      document.body.append(mainDivCon);
       const title= document.createElement("div");
             title.classList = "title";
             title.id = "title";
             title.style.backgroundColor = "red";
             mainDivCon.append(title);

         const gameTitle = document.createElement("h1");
             gameTitle.classList = "gameTitle";
             gameTitle.innerHTML = "Rock " + "Paper " + "Scissors";
             title.append(gameTitle);
       //created rstBtn
         const rstBtn = document.createElement("button");
             rstBtn.classList = "rst-Btn";
             rstBtn.id = "rstBtn";
             rstBtn.innerHTML = "RESET GAME";
             gameTitle.append(rstBtn);
       //rstBtn function
             rstBtn.addEventListener("click", rstGame);

             function rstGame(){
                botScore.innerHTML = "";
                playerScore.innerHTML = "";
                winnerLoserDisplay.innerHTML =  "";
                historyList.innerHTML = "<img src='../images/draw2.png'>";
                choiceDisplay.innerHTML = "<img src='../images/lose2.png'>";
            }      
//created h2 for soreBoard label
const scoreBoard = document.createElement("h1");
      scoreBoard.classList = "score-board";
      scoreBoard.innerHTML = "Score board";
      mainDivCon.append(scoreBoard);

//created for main div for score board label
const scoreContainer = document.createElement("div");
      scoreContainer.classList = "score-container";
      mainDivCon.append(scoreContainer);
//created container for player playerScore and botScore            
const playerScore = document.createElement("div");
      playerScore.classList = "playerScore";
      playerScore.innerHTML = "Player Score = 0";
      scoreContainer.append(playerScore);
      

const botScore = document.createElement("div");
      botScore.classList = "botScore";
      botScore.innerHTML = "Bot Score = 0";
      scoreContainer.append(botScore);

//created a div for the game display winner /loser
const winnerLoserDisplay = document.createElement("h1");
      winnerLoserDisplay.style.backgroundColor = "black";
      winnerLoserDisplay.classList = "wl-display";
      winnerLoserDisplay.id = "wlDisplay";
      winnerLoserDisplay.innerHTML = "Winner / Loser";
      winnerLoserDisplay.style.color = "white";
      mainDivCon.append(winnerLoserDisplay);
//created a div for the game display
const gameDivDisplay = document.createElement("div");
      gameDivDisplay.style.backgroundColor = "black";
      gameDivDisplay.classList = "game-display";
      gameDivDisplay.id = "gameDivDisplay";
      mainDivCon.append(gameDivDisplay);

//create 2 div for the display choice and game history display
const choiceDisplay = document.createElement("div");
      choiceDisplay.classList = "choice-display"; 
      choiceDisplay.id = "choiceDisplay";
      choiceDisplay.style.backgroundColor= "blue";
      choiceDisplay.innerHTML = "<img src='../images/draw2.png'>";
      gameDivDisplay.append(choiceDisplay); 
  
const historyDisplay = document.createElement("div");
      historyDisplay.classList = "history-display"; 
      historyDisplay.id = "historyDisplay";
      historyDisplay.innerHTML = "";
      historyDisplay.style.backgroundColor = "green";
      gameDivDisplay.append(historyDisplay); 

      //created li for history display
      let historyList = document.createElement("h1");
      historyDisplay.append(historyList);
           
//creating button div container
const buttonContainer = document.createElement("div");
      buttonContainer.classList = "button-container";
      buttonContainer.id = "buttonContainer";
      mainDivCon.append(buttonContainer);
      
// buttons functions main source
let botPick = [["<img src='../images/rock.png'>"], ["<img src='../images/paper.png'>"], ["<img src='../images/scissor.png'>"]];
let newPlayerScore = 0;
let newBotScore = 0;
//creating buttons


  const rockBtn = document.createElement("button");
             rockBtn.classList = "Btn";
             rockBtn.id = "rockBtn";
             //rockBtn.innerHTML = "ROCK";
             rockBtn.style.backgroundImage = "url('../images/rock.png')";
             buttonContainer.append(rockBtn);
       //rockBtn function
       rockBtn.addEventListener("click", rockFunc)
       
       function rockFunc(){
            let i = Math.floor(Math.random() * 3);
            choiceDisplay.innerHTML = ("<h1>Bot Picked</h1> " + botPick[i]);

            if (i == 0) {
                  winnerLoserDisplay.innerHTML = "Its a Draw!";
                  historyList.innerHTML = (botPick[0] +"VS"+["<img src='../images/rock.png'>"]);
                  
            }
            else if (i == 1) {
                  winnerLoserDisplay.innerHTML = "You lose!";
                  historyList.innerHTML = (botPick[1] +"VS"+["<img src='../images/rock.png'>"]);
                  choiceDisplay.style.color = "red";
                  //scoring
                  newBotScore++;
                  botScore.innerHTML = "Bot Score = " + newBotScore;
            }else{
                  winnerLoserDisplay.innerHTML = "You Win!";
                  historyList.innerHTML = (botPick[2] +"VS"+["<img src='../images/rock.png'>"]);
                  choiceDisplay.style.color = "Yellow";
                  //scoring
                  newPlayerScore++;
                  playerScore.innerHTML = "Your Score = " + newPlayerScore;

            }

       }


  const paperBtn = document.createElement("button");
             paperBtn.classList = "Btn";
             paperBtn.id = "paperBtn";
             paperBtn.style.backgroundImage = "url('../images/paper.png')";
             buttonContainer.append(paperBtn);

             //paper function
             paperBtn.addEventListener("click", paperFunc);
       
             function paperFunc(){
                  let i = Math.floor(Math.random() * 3);
                  choiceDisplay.innerHTML = ("<h1>Bot Picked</h1> " + botPick[i]);
      
                  if (i == 0) {
                        winnerLoserDisplay.innerHTML = "You Win!";
                        historyList.innerHTML = (botPick[0] +"VS"+["<img src='../images/paper.png'>"]);
                        //scoring
                        newPlayerScore++;
                        playerScore.innerHTML = "Your Score = " + newPlayerScore;
                  }
                  else if (i == 1) {
                        winnerLoserDisplay.innerHTML = "Its a Draw!";
                        historyList.innerHTML = (botPick[1] +"VS"+["<img src='../images/paper.png'>"]);
                        choiceDisplay.style.color = "red";
                        //scoring
                       
                  }else{
                        winnerLoserDisplay.innerHTML = "You Lose!";
                        historyList.innerHTML = (botPick[2] +"VS"+["<img src='../images/paper.png'>"]);
                        choiceDisplay.style.color = "Yellow";
                        //scoring
                        newBotScore++;
                        botScore.innerHTML = "Bot Score = " + newBotScore;
      
                  }
      
             }
             


  const scrBtn = document.createElement("button");
             scrBtn.classList = "Btn";
             scrBtn.id = "scrBtn";
             scrBtn.style.backgroundImage = "url('../images/scissor.png')";
             buttonContainer.append(scrBtn);

                 //paper function
                 scrBtn.addEventListener("click", scrFunc);
       
                 function scrFunc(){
                      let i = Math.floor(Math.random() * 3);
                      choiceDisplay.innerHTML = ("<h1>Bot Picked</h1> " + botPick[i]);
          
                      if (i == 0) {
                            winnerLoserDisplay.innerHTML = "You Lose!";
                            historyList.innerHTML = (botPick[0] +"VS"+["<img src='../images/scissor.png'>"]);
                            //scoring
                            newBotScore++;
                            botScore.innerHTML = "Bot Score = " + newBotScore;
                      }
                      else if (i == 1) {
                            winnerLoserDisplay.innerHTML = "You Win!";
                            historyList.innerHTML = (botPick[1] +"VS"+["<img src='../images/scissor.png'>"]);
                            choiceDisplay.style.color = "red";
                            //scoring
                            newPlayerScore++;
                            playerScore.innerHTML = "Your Score = " + newPlayerScore;
                      }else{
                            winnerLoserDisplay.innerHTML = "Its a Draw!";
                            historyList.innerHTML = (botPick[2] +"VS"+["<img src='../images/scissor.png'>"]);
                            choiceDisplay.style.color = "Yellow";
                      }
          
                 }


