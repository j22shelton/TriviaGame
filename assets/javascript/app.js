
$(document).ready(function() {

    var answers = ["cardinal", "hummingbird", "painted bunting", "owl", "condor", "raven", "ostrich", "goldie"];
    var correctAnswer = 0;
    var incorrectAnswer = 0;
    var blank = 0;
    var totalQuiz = 8;
    var count = 60;
    var data = $("input");
    
    console.log(data);
    function scoreCount() {
    for (var i = 0; i < data.length; i++) {
    
    if (data[i].checked) {


    console.log(correctAnswer);
    if (answers.indexOf(data[i].value) !== -1) {
    correctAnswer++;
    } else {
    incorrectAnswer++;
    }
    }
    }
    
    var totalAnswered = correctAnswer + incorrectAnswer;
    console.log(totalAnswered);
    if (totalAnswered !== totalQuiz) {
    blank = totalQuiz - totalAnswered;
    }
   
    $('#correct').html(" " + correctAnswer);
    $('#incorrect').html(" " + incorrectAnswer);
    $("#blank").html(" " + blank);
   
    } 
   
    $("#quiz, #results").hide();
   
   
    $("#start").click(function() {
    $("#start-container").hide("slow");
    $("#quiz").show("slow");
    
    
        var startTimer = setInterval(function() {
        count--;
        $("#countdown").html(count);
    
    
        if (count === 0) {
        clearInterval(timer);
        $("#quiz, #timer").hide("slow");
        $("#results").show("slow");
        scoreCount();
        }
        }, 1000);
    
    });
   
    $("#done").click(function() {
    $("#quiz, #timer").hide("slow");
    $("#results").show("slow");
    clearInterval(timer);
    scoreCount();
    });
   
    $("#restart").click(function() {
    location.reload();
    });
   });
   
   