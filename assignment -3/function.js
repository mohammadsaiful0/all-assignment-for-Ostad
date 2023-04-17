function digitalClock(){
     // Get the current time
    const todayDate=new Date();
    
     // Get the current day name, month name, and year
    let dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let dayName = dayNames[todayDate.getDay()];
    let monthName = monthNames[todayDate.getMonth()];
    let year = todayDate.getFullYear();
    let dayNumber=todayDate.getDate();


    // Format the time into hours, minutes, and seconds
    let hours = todayDate.getHours();
    let minutes=todayDate.getMinutes();
    let seconds=todayDate.getSeconds();
    
    // Format the time into hours, minutes, and seconds and Day Night Status 
    hours = hours <10 ? "0" + hours : hours;
    minutes = minutes <10 ? "0" + minutes : minutes;
    seconds = seconds <10 ? "0" + seconds : seconds;
    clockStatus= hours <12 ? "AM" : "PM";
    // PM / AM 
    if (todayDate.getHours()==0){
        hours=12;
    }
    else if (todayDate.getHours()>12){
        hours=todayDate.getHours()-12;
    }
    else{
        hr=todayDate.getHours();
    }
    // display The output 
    document.getElementById("hours").innerHTML= hours + ":";
    document.getElementById("minute").innerHTML= minutes + ":";
    document.getElementById("second").innerHTML= seconds;
    document.getElementById("status").innerHTML= clockStatus;
    document.getElementById("dayName").innerHTML= dayName + ",";
    document.getElementById("MonthName").innerHTML= monthName + "";
    document.getElementById("Year").innerHTML= year;  
    document.getElementById("dayNumber").innerHTML= dayNumber;  
    
}
//run the function
digitalClock();
setInterval(function(){
    digitalClock();
},1000);
    