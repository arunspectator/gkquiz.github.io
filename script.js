document.getElementById("gkquiz").onsubmit=function(){
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