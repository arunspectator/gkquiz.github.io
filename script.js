document.getElementById("gkquiz").onsubmit=function(){
	result=0;
	q1=parseInt(document.querySelector('input[name="q1"]:checked').value);
	q2=parseInt(document.querySelector('input[name="q2"]:checked').value);
	q3=parseInt(document.querySelector('input[name="q3"]:checked').value);
	q4=parseInt(document.querySelector('input[name="q4"]:checked').value);
	q5=parseInt(document.querySelector('input[name="q5"]:checked').value);
	q6=parseInt(document.querySelector('input[name="q6"]:checked').value);
	q7=parseInt(document.querySelector('input[name="q7"]:checked').value);
	q8=parseInt(document.querySelector('input[name="q8"]:checked').value);
	q9=parseInt(document.querySelector('input[name="q9"]:checked').value);
	q10=parseInt(document.querySelector('input[name="q10"]:checked').value);

	result=q1+q2+q3+q4+q5+q6+q7+q8+q9+q10;
	document.getElementById("score").innerHTML=result;

	if(result<=4)
	    {
			grade="try again";
		}
	else if(result>4 && result<=7)
		{
			grade="Good";
		}
	else 
	   {
           grade="Excellent";
	   };
	
	document.getElementById("grade").innerHTML=grade;

return false;
}
//timer
var mins = 1; 
  
        //calculate the seconds 
        var secs = mins * 60; 
  
        //countdown function is evoked when page is loaded 
        function countdown() { 
            setTimeout('Decrement()', 60); 
        } 
  
        //Decrement function decrement the value. 
        function Decrement() { 
            if (document.getElementById) { 
                minutes = document.getElementById("minutes"); 
                seconds = document.getElementById("seconds"); 
  
                //if less than a minute remaining 
                //Display only seconds value. 
                if (seconds < 59) { 
                    seconds.value = secs; 
                } 
  
                //Display both minutes and seconds 
                //getminutes and getseconds is used to 
                //get minutes and seconds 
                else { 
                    minutes.value = getminutes(); 
                    seconds.value = getseconds(); 
                } 
                //when less than a minute remaining 
                //colour of the minutes and seconds 
                //changes to red 
                if (mins < 1) { 
                    minutes.style.color = "red"; 
                    seconds.style.color = "red"; 
                } 
                //if seconds becomes zero, 
                //then page alert time up 
                if (mins < 0) { 
                    alert('time up'); 
                    minutes.value = 0; 
                    seconds.value = 0; 
                } 
                //if seconds > 0 then seconds is decremented 
                else { 
                    secs--; 
                    setTimeout('Decrement()', 1000); 
                } 
            } 
        } 
  
        function getminutes() { 
            //minutes is seconds divided by 60, rounded down 
            mins = Math.floor(secs / 60); 
            return mins; 
        } 
  
        function getseconds() { 
            //take minutes remaining (as seconds) away  
            //from total seconds remaining 
            return secs - Math.round(mins * 60); 
        } 