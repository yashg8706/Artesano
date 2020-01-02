<!--
  Developed by:- Yash Gandhi
  Purpose:- Game contest.
-->
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
    <title>Speed To Win</title>
    <link rel="icon" href="../images/racing.png" type="image" sizes="16x16">
    <script type="text/javascript" src="../JS/contest.js"></script>
    <link rel="stylesheet" type="text/css" href="../css/game2.css">
    <link href="https://fonts.googleapis.com/css?family=Slabo+27px" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Orbitron" rel="stylesheet">
  </head>

  <body onkeydown="" onkeyup="moveSelection(event)"><!--EVENT HANDLERS-->
    <main id="main">
      <div id="audio1">
      <audio id="car_sound" controls>
      <source src="../audio/car_sound.mp3" type="audio/mpeg">  
    </audio>
    <audio id="cheer_sound" controls >
      <source src="../audio/cheer_up.mp3" type="audio/mpeg">  
    </audio>
     <audio id="winner_sound" controls >
      <source src="../audio/winner_sound1.mp3" type="audio/mpeg">  
    </audio>
    </div>

        <div id="game_ins">
            <h1>Speed to Win</h1>
            <p id="instruction">
                Press -&gt; to drive car.<br/>
                Time Limit 30 Seconds.   
            </p>
            <button id="play" type="button">PLAY</button>
            <img src="../images/game_back.jpg" style="width: 500px; height: 250px; margin-left: 50px; border-radius: 10px;" id="background">
        </div>
    <div id="timer_container">
        <p id="timer">You have <span id="time">30 </span> Seconds</p>
    </div>
    <div id="play_again_box"><p id="play_again">RETRY..</p></div>
    <button id="home_screen" type="button">Main Screen</button>
    <div id="game">
      <img src="../images/start.png" alt="Start position" id="start_pos" title="Start position" class="flags" >
  <img id="image1" src="../images/racing.png" alt="Player car" title="Player" style="position: absolute; left: 15; right: 15; top: 500; bottom: auto;">
  <img src="../images/finish.png" alt="Finish line" id="finish_pos" title="finish line" class="flags" >
  </div>
  </main>
 </body>
</html>