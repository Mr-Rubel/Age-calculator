function calculate(){
    var youryear = document.querySelector(".btn-1").value;
    var yourmonth = document.querySelector(".btn-2").value;
    var  yourdays= document.querySelector(".btn-3").value;

    var  todaysyear= document.querySelector(".tbtn-1").value;
    var  todaysmonth= document.querySelector(".tbtn-2").value;
    var  todaysdays= document.querySelector(".tbtn-3").value;
    var resultyear = Math.abs(youryear - todaysyear);
    var resultmonth = Math.abs(yourmonth - todaysmonth);
    var resulttdays = Math.abs(yourdays - todaysdays);
    document.querySelector(".rbtn-1").value = resultyear;
    document.querySelector(".rbtn-2").value = resultmonth;
    document.querySelector(".rbtn-3").value = resulttdays;
}

// var x = -100;
// Math.abs(x);
// It will convert nagitive value to possitive