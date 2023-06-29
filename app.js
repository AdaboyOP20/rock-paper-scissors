let comp_ch, player_ch, result_ch;

function rock1(){
    player_ch = "Rock";
    result1();
}


function paper1(){
    player_ch  = "Paper";
    result1();
}


function scissors1(){
    player_ch = "scissors";
    result1();
}

function result1(){
    document.getElementById('player_choice').textContent = player_ch;
    var randnum = Math.floor(Math.random()*3);
    if(randnum == 0){
        comp_ch = "Rock";
    }
    else if(randnum == 1){
        comp_ch = "Paper";
    }
    else{
        comp_ch = "scissors"
    }
    document.getElementById('comp_choice').textContent = comp_ch;
    if(player_ch == "Rock"&&comp_ch == "Paper")
    {
        document.getElementById('result').textContent = "Computer wins";
    }
    else if(player_ch == "Rock"&&comp_ch == "scissors")
    {
        document.getElementById('result').textContent = "Player wins";
    }
    else if(player_ch == comp_ch)
    {
        document.getElementById('result').textContent = "Tie";
    }
    else if(player_ch == "Paper"&&comp_ch == "Rock")
    {
        document.getElementById('result').textContent = "Player Wins";
    }
    else if(player_ch == "Paper"&&comp_ch == "scissors")
    {
        document.getElementById('result').textContent = "Computer Wins";
    }
    else if(player_ch == "scissors"&&comp_ch == "Rock")
    {
        document.getElementById('result').textContent = "Computer Wins";
    }
    else if(player_ch == "scissors"&&comp_ch == "Paper")
    {
        document.getElementById('result').textContent = "Computer Wins";
    }
}

rock.onclick = rock1;
paper.onclick = paper1;
scissors.onclick = scissors1;
