 //declaring the timeInterval
  
  var time=0;  
  //assigning the function to an onclick event
  
  var innerFact_card=document.createElement('li');
  function play(){
  theTimer=setInterval(function() {
    if(time===90){
document.getElementById('Thefact_card').innerHTML+=referee[refSelector]+" "+fulltime[End]+"<div>";
document.getElementById('time').innerHTML="FT";
        clearInterval(theTimer);
    }else if(time===1){
        
        document.getElementById('Thefact_card').innerHTML+=commentators[commentatorSelector]+" "+commentatorIntro[commentatorIntroSelector]+"<div>";
        
        document.getElementById('Thefact_card').innerHTML+=commentators[commentatorSelector]+": "+""+referee[refSelector]+" "+refereeIntro[refereeIntroSelector]+'<div>';
 
        document.getElementById('Thefact_card').innerHTML+=referee[refSelector]+" "+Start[StartSelector]+"<div>";
        time++;
  
        
    }else if(time==45){
        document.getElementById('Thefact_card').innerHTML+=referee[refSelector]+" "+HalfTime[halftimeSelector]+"<div>";
        document.getElementById('Thefact_card').innerHTML+=referee[refSelector]+" "+secondHalf[secondhalfSelector]+"<div>";
document.getElementById('time').innerHTML="HT";
       
       
       time++;
    }
    
    else{
    time++;
    document.getElementById('time').innerHTML=time;
    } 
}, 320)}; 
    
  //full time events 
  
  var fulltime=["ends this one","blows for full time",'signals for full time']
  
 
 //rando.ly generating a num for full time event
 var End;
   setInterval(function() {
       End=Math.floor(Math.random()*fulltime.length);
       
   }, 300);
   
   //the referee names Array
   var referee =["Dean Mctee","Elshabeez","Martin","Frank","Peter","John","Ferdinand",'Raulf']
   
    var refSelector;
   setTimeout(function() {
       refSelector=Math.floor(Math.random()*referee.length);
       
   }, 10);
   
   //Start match events
   var Start=['signals for the start of the match','Starts the match','gets this one up and running'];
   
   
  var  StartSelector;
   setTimeout(function() {
       StartSelector=Math.floor(Math.random()*Start.length);
       
   }, 10);
   
   //Half time events
   
   var HalfTime=['blows for half time','signals for half time'];
 
 var halftimeSelector;
   setTimeout(function() {
       halftimeSelector=Math.floor(Math.random()*HalfTime.length);
       
   }, 10);
   
   //second half resumpation events
   
   var secondHalf=['starts the second part of this game ','signals the start of the second half','indicates the start of another action packed second half'];
   
    var secondhalfSelector;
   setTimeout(function() {
       secondhalfSelector=Math.floor(Math.random()*secondHalf.length);
       
   },10)
   
   //commentators
   
   var commentators=['Maps','Ash','T’deiro','D’Elroi','Peter'];
   
 var  commentatorSelector;
   setTimeout(function() {
       commentatorSelector=Math.floor(Math.random()*commentators.length);
   },10);
   
   // commentator intro events
   
  var commentatorIntro =['joins me in commentary today','Is the commentator for today’s game','brings us all the commentary today'];
  
   var  commentatorIntroSelector;
   setTimeout(function() {
       commentatorIntroSelector=Math.floor(Math.random()*commentatorIntro.length);
       
   },10);
   
   //commentator events introducing referee
   
   var refereeIntro=['is the match officiator today','holds the referrential office today','is the referee today'];
   
   
      var  refereeIntroSelector;
   setTimeout(function(){refereeIntroSelector=Math.floor(Math.random()*refereeIntro.length);
    
   },10);
   
  //miss events

  var miss=['so close','how on earth did he miss that','inches away','And woodwork denies him','so so unlucky','what was he thinking shooting from there']
   
      var  missSelector;
   setInterval(function(){
       missSelector=Math.floor(Math.random()*miss.length);
    
   },10);
   
//miss events callee

 setInterval(function() {
     if(time<90&&time>0){
         document.getElementById('Thefact_card').innerHTML+=time+" "+miss[missSelector]+'<div>'
     }
 }, Math.floor(Math.random()*40000));
 
   //team selection
   
   var hometeam=[                       {Name:"Mancity",Rating:93,Squad:["Ederson","kyle Walker","dias","Laporte","Joao Cancelo","Gundogun","Bernado silva","Rodri","De bruyne","Jesus","sterling","Foden"],Stadium:"Etihad Stadium",City:"Manchester"},    
      {Name:"Man U",Rating:88,Squad:["De Gea","Telles","Varane","Lindeloaf","Luke Shaw","Pogba","Fred","Bruno","Rashford","Cavani","Ronaldo"],Stadium:"Old Trafford",City:"Manchester"},            
     {Name:"Liverpool",Rating:92,Squad:["Alisson","Andrew Robertson","Virgil van dyke","Matip","Trent Arnold","Fabinho","Thiago Alcantara","Keita","Mo Salah","Sadio Mane","Diogo Jota"],Stadium:"Anfield Road",City:"Liverpool"},
     {Name:"Chelsea",Rating:90,Squad:["Mendy","Reece James","Rudiger","Thiago Silva","Ben Chillwell","Kante","Kovacic","Mount","Pulisic","Romelu Lukaku","Hudson Odoi"],Stadium:"Stamford Bridge",City:"London"}
   ]
   
   console.log(hometeam[0].Squad.splice(6))
var hometeamSelector;
var homeTeamPlayerSelector;
   setTimeout(function(){
       hometeamSelector=Math.floor(Math.random()*hometeam.length);
    
document.getElementById('hometeam').innerHTML=hometeam[hometeamSelector].Name; 
   
   },10);
  
  

   
   
   
 
   //awayteam
      var awayteam=[                    {Name:"Mancity",Rating:93,Squad       :["Ederson","kyle Walker"         ,"dias","Laporte","Joao             Cancelo","Gundogun","Bernado       silva","Rodri","De bruyne"       ,"Jesus","sterling","Foden"]      ,Stadium:"Etihad Stadium"         ,City:"Manchester"},
          {Name:"Liverpool",Rating:92,Squad:["Alisson","Andrew Robertson","Virgil van dyke","Matip","Trent Arnold","Fabinho","Thiago Alcantara","Keita","Mo Salah","Sadio Mane","Diogo Jota"],Stadium:"Anfield Road",City:"Liverpool"},
          {Name:"Chelsea",Rating:90,Squad:["Mendy","Reece James","Rudiger","Thiago Silva","Ben Chillwell","Kante","Kovacic","Mount","Pulisic","Romelu Lukaku","Hudson Odoi"],Stadium:"Stamford Bridge",City:""},
         {Name:"Man U",Rating:88,Squad:["De Gea","Telles","Varane","Lindeloaf","Luke Shaw","Pogba","Fred","Bruno","Rashford","Cavani","Ronaldo"],Stadium:"Old Trafford",City:"Manchester"},
   ]
   
   
     document.getElementById('awayteam').innerHTML=awayteam[0].img+"<div>"; 
   
  //selecting the awayteam
var awayteamSelector;
   setTimeout(function(){
       awayteamSelector=Math.floor(Math.random()*awayteam.length);
       
  document.getElementById('awayteam').innerHTML=awayteam[awayteamSelector].Name+"<div>"; 
   
   
   },10);
   
 
   //awayteamscores
     
var h_scorelineSelector;
   setInterval(function(){
       h_scorelineSelector=Math.round(Math.random()*hometeam.length);
      console.log(h_scorelineSelector)
  
   },10);
   
   //hometeam scoreline
   
 
   
   var h_scoreline=0;
   let h_assist=0;
   setInterval(function() {
       if(time<90&&time>0&&h_scoreline<5){
           h_scoreline++;
           h_assist++;
       document.getElementById('homeTeamScore').innerHTML=h_scoreline;
       
       document.getElementById('Thefact_card').innerHTML+=time+"’"+hometeam[hometeamSelector].Squad[h_scorelineSelector]+" "+Score[scoreSelector]+"<div>";
  } },Math.floor(Math.random()*65000));
   
   
   var a_scoreline=0;
   setInterval(function() {
       if(time<90&&time>0&&a_scoreline<5){
           a_scoreline++;
       document.getElementById('awayTeamScore').innerHTML=a_scoreline;
       
       document.getElementById('Thefact_card').innerHTML+=time+"’"+awayteam[awayteamSelector].Squad[h_scorelineSelector]+" "+Score[scoreSelector]+"<div>";
  } },Math.ceil(Math.random()*65000));
    
   // events to be appended after a goal
   
   var Score=['a real net buster','just flew past the diving goalie','the crowd are on their feet','moments of disbelief','thats a scruffy goal but he wont mind though','the goalie was rooted to the spot']
    
    //the score selector
    
    var scoreSelector;
    
      setInterval(function(){
       scoreSelector=Math.floor(Math.random()*Score.length);
       
  
   
   },10);
   
      //crosses home
   var homecrosses =0;
   setInterval(function() {
       if(time>0&&time<90){homecrosses++;
       document.getElementById('crossesHome').innerHTML=homecrosses;
   }},Math.floor( Math.random()*20000));
   
   
       //crosses away
   var awaycrosses =0;
   setInterval(function() {
       if(time>0&&time<90){
           awaycrosses++;
       document.getElementById('crossesAway').innerHTML=awaycrosses;
   }},Math.floor( Math.random()*20000));
   
   
  // penalties home
   var homepenalties =0;
   setInterval(function() {
       if(time>0&&time<90&&homepenalties<2){
           homepenalties++;
       document.getElementById('penaltiesHome').innerHTML=homepenalties;
       document.getElementById('Thefact_card').innerHTML+=time+" "+homepenalties+'hmetm???'+"<div>";
   }},Math.floor( Math.random()*70000));
   
   
       //penalties away
   var awaypenalties =0;
   setInterval(function() {
       if(time>0&&time<90&&awaypenalties<2){
           awaypenalties++;
       document.getElementById('penaltiesAway').innerHTML=awaypenalties;
       
       document.getElementById('Thefact_card').innerHTML+=time+" "+awaypenalties+'awaytm???'+"<div>";
   }},Math.floor(Math.random()*70000));
   
   
  
   
   // the awaytm #redcards
   
    awayredcards =0;
    
   setInterval(function() {
       if(time>0&&time<90&&awayredcards<2){
           awayredcards++;
       document.getElementById('redcardsAway').innerHTML=awayredcards;
       
      document.getElementById('Thefact_card').innerHTML+=time+" "+"tts not how to tackle"+"<div>"; 
      document.getElementById('Thefact_card').innerHTML+=awayteam[awayteamSelector].Squad[a_redcardsSelector]+"is out"+"<div>";
      a_redcardsSelector.reset();
   }},Math.floor(Math.random()*80000));
   



   // the hometm #redcards
   
    homeredcards =0;
    
   setInterval(function() {
       if(time>0&&time<90&&awayredcards<2){
           homeredcards++;
       document.getElementById('redcardsHome').innerHTML=homeredcards;
       
      document.getElementById('Thefact_card').innerHTML+=time+" "+"tts not how to tackle"+"<div>"; 
   }},Math.floor(Math.random()*80000));
   
  /*var a_redcardsSelector;
  setTimeout(function() {
     a_redcardsSelector= Math.random()*awayteam[awayteamSelector].Squad.length;
      console.log(a_redcardsSelector);
  }, 10);*/
