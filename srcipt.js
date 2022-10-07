// function display(){
//     var a =10;
//     var b =15;
//     var c =20;
//     if()
// }


// function add(){
//     var _count =parseInt( document.getElementById('count').value);
//     _count++;
//     document.getElementById('count').value=_count;
// }

// function sub(){
//     var _count =parseInt( document.getElementById('count').value);
    

//     if(_count<=0){
//         _count=0;
//     }
//     else{
//         _count--;
//     }

//     document.getElementById('count').value=_count;
// }






// ------------------------------------ 
// result sheet
// ----------------------------------------- 


//------------------------
 // For Bangla Frist Pepar
 //-----------------------
 function result1(){
	var _tm=parseInt(document.getElementById('tm').value);
	var _pm=parseInt(document.getElementById('pm').value);
	if (_tm <=0 && _pm <=0 || document.getElementById('tm').value=="" && document.getElementById('pm').value) {
		alert("Please Enter Mark First");
		document.getElementById('ttm').value=0;
	}
	else{
		var _totalMark=_tm+_pm;
		document.getElementById('ttm').value=_totalMark;
		
		if (_totalMark >= 80 && _totalMark <=100) {
			document.getElementById('grade').value="A+";
			document.getElementById('point').value="5.00";
		}
		else if (_totalMark >= 70 && _totalMark <=79) {
			document.getElementById('grade').value="A";
			document.getElementById('point').value="4.00";
		}
		else if (_totalMark >= 60 && _totalMark <=69) {
			document.getElementById('grade').value="A-";
			document.getElementById('point').value="3.50";
		}
		else if (_totalMark >= 50 && _totalMark <=59) {
			document.getElementById('grade').value="B";
			document.getElementById('point').value="3.00";
		}
		else if (_totalMark >= 40 && _totalMark <=49) {
			document.getElementById('grade').value="C";
			document.getElementById('point').value="2.00";
		}
		else if (_totalMark >= 33 && _totalMark <=39) {
			document.getElementById('grade').value="D";
			document.getElementById('point').value="1.00";
		}
		else if (_totalMark >= 0 && _totalMark <=32) {
			document.getElementById('grade').value="F";
			document.getElementById('point').value="0.00";
		}
		else{
			alert("Invalid Input");
			document.getElementById('grade').value="";
			document.getElementById('point').value="";
			document.getElementById('tm').value="";
			document.getElementById('pm').value="";
			document.getElementById('ttm').value="";
		}
	}
}

//------------------------
 // For Bangla 2nd Pepar
 //-----------------------
 function result2(){
	var _tm=parseInt(document.getElementById('tm2').value);
	var _pm=parseInt(document.getElementById('pm2').value);
	if (_tm <=0 && _pm <=0 || document.getElementById('tm2').value=="" && document.getElementById('pm2').value) {
		alert("Please Enter Mark First");
		document.getElementById('ttm2').value=0;
	}
	else{
		var _totalMark=_tm+_pm;
		document.getElementById('ttm2').value=_totalMark;
		
		if (_totalMark >= 80 && _totalMark <=100) {
			document.getElementById('grade2').value="A+";
			document.getElementById('point2').value="5.00";
		}
		else if (_totalMark >= 70 && _totalMark <=79) {
			document.getElementById('grade2').value="A";
			document.getElementById('point2').value="4.00";
		}
		else if (_totalMark >= 60 && _totalMark <=69) {
			document.getElementById('grade2').value="A-";
			document.getElementById('point2').value="3.50";
		}
		else if (_totalMark >= 50 && _totalMark <=59) {
			document.getElementById('grade2').value="B";
			document.getElementById('point2').value="3.00";
		}
		else if (_totalMark >= 40 && _totalMark <=49) {
			document.getElementById('grade2').value="C";
			document.getElementById('point2').value="2.00";
		}
		else if (_totalMark >= 33 && _totalMark <=39) {
			document.getElementById('grade2').value="D";
			document.getElementById('point2').value="1.00";
		}
		else if (_totalMark >= 0 && _totalMark <=32) {
			document.getElementById('grade2').value="F";
			document.getElementById('point2').value="0.00";
		}
		else{
			alert("Invalid Input");
			document.getElementById('grade2').value="";
			document.getElementById('point2').value="";
			document.getElementById('tm2').value="";
			document.getElementById('pm2').value="";
			document.getElementById('ttm2').value="";
		}
	}
}


//------------------------
 // For Enlish 1st Papar
 //-----------------------
 function result3(){
	var _tm=parseInt(document.getElementById('tm3').value);
	var _pm=parseInt(document.getElementById('pm3').value);
	if (_tm <=0 && _pm <=0 || document.getElementById('tm3').value=="" && document.getElementById('pm3').value) {
		alert("Please Enter Mark First");
		document.getElementById('ttm3').value=0;
	}
	else{
		var _totalMark=_tm+_pm;
		document.getElementById('ttm3').value=_totalMark;
		
		if (_totalMark >= 80 && _totalMark <=100) {
			document.getElementById('grade3').value="A+";
			document.getElementById('point3').value="5.00";
		}
		else if (_totalMark >= 70 && _totalMark <=79) {
			document.getElementById('grade3').value="A";
			document.getElementById('point3').value="4.00";
		}
		else if (_totalMark >= 60 && _totalMark <=69) {
			document.getElementById('grade3').value="A-";
			document.getElementById('point3').value="3.50";
		}
		else if (_totalMark >= 50 && _totalMark <=59) {
			document.getElementById('grade3').value="B";
			document.getElementById('point3').value="3.00";
		}
		else if (_totalMark >= 40 && _totalMark <=49) {
			document.getElementById('grade3').value="C";
			document.getElementById('point3').value="2.00";
		}
		else if (_totalMark >= 33 && _totalMark <=39) {
			document.getElementById('grade3').value="D";
			document.getElementById('point3').value="1.00";
		}
		else if (_totalMark >= 0 && _totalMark <=32) {
			document.getElementById('grade3').value="F";
			document.getElementById('point3').value="0.00";
		}
		else{
			alert("Invalid Input");
			document.getElementById('grade3').value="";
			document.getElementById('point3').value="";
			document.getElementById('tm3').value="";
			document.getElementById('pm3').value="";
			document.getElementById('ttm3').value="";
		}
	}
}

//------------------------
 // For English 2nd Pepar
 //-----------------------
 function result4(){
	var _tm=parseInt(document.getElementById('tm4').value);
	var _pm=parseInt(document.getElementById('pm4').value);
	if (_tm <=0 && _pm <=0 || document.getElementById('tm4').value=="" && document.getElementById('pm4').value) {
		alert("Please Enter Mark First");
		document.getElementById('ttm4').value=0;
	}
	else{
		var _totalMark=_tm+_pm;
		document.getElementById('ttm4').value=_totalMark;
		
		if (_totalMark >= 80 && _totalMark <=100) {
			document.getElementById('grade4').value="A+";
			document.getElementById('point4').value="5.00";
		}
		else if (_totalMark >= 70 && _totalMark <=79) {
			document.getElementById('grade4').value="A";
			document.getElementById('point4').value="4.00";
		}
		else if (_totalMark >= 60 && _totalMark <=69) {
			document.getElementById('grade4').value="A-";
			document.getElementById('point4').value="3.50";
		}
		else if (_totalMark >= 50 && _totalMark <=59) {
			document.getElementById('grade4').value="B";
			document.getElementById('point4').value="3.00";
		}
		else if (_totalMark >= 40 && _totalMark <=49) {
			document.getElementById('grade4').value="C";
			document.getElementById('point4').value="2.00";
		}
		else if (_totalMark >= 33 && _totalMark <=39) {
			document.getElementById('grade4').value="D";
			document.getElementById('point4').value="1.00";
		}
		else if (_totalMark >= 0 && _totalMark <=32) {
			document.getElementById('grade4').value="F";
			document.getElementById('point4').value="0.00";
		}
		else{
			alert("Invalid Input");
			document.getElementById('grade4').value="";
			document.getElementById('point4').value="";
			document.getElementById('tm4').value="";
			document.getElementById('pm4').value="";
			document.getElementById('ttm4').value="";
		}
	}
}

//------------------------
 // For Mathmatics
 //-----------------------
 function result5(){
	var _tm=parseInt(document.getElementById('tm5').value);
	var _pm=parseInt(document.getElementById('pm5').value);
	if (_tm <=0 && _pm <=0 || document.getElementById('tm5').value=="" && document.getElementById('pm5').value) {
		alert("Please Enter Mark First");
		document.getElementById('ttm5').value=0;
	}
	else{
		var _totalMark=_tm+_pm;
		document.getElementById('ttm5').value=_totalMark;
		
		if (_totalMark >= 80 && _totalMark <=100) {
			document.getElementById('grade5').value="A+";
			document.getElementById('point5').value="5.00";
		}
		else if (_totalMark >= 70 && _totalMark <=79) {
			document.getElementById('grade5').value="A";
			document.getElementById('point5').value="4.00";
		}
		else if (_totalMark >= 60 && _totalMark <=69) {
			document.getElementById('grade5').value="A-";
			document.getElementById('point5').value="3.50";
		}
		else if (_totalMark >= 50 && _totalMark <=59) {
			document.getElementById('grade5').value="B";
			document.getElementById('point5').value="3.00";
		}
		else if (_totalMark >= 40 && _totalMark <=49) {
			document.getElementById('grade5').value="C";
			document.getElementById('point5').value="2.00";
		}
		else if (_totalMark >= 33 && _totalMark <=39) {
			document.getElementById('grade5').value="D";
			document.getElementById('point5').value="1.00";
		}
		else if (_totalMark >= 0 && _totalMark <=32) {
			document.getElementById('grade5').value="F";
			document.getElementById('point5').value="0.00";
		}
		else{
			alert("Invalid Input");
			document.getElementById('grade5').value="";
			document.getElementById('point5').value="";
			document.getElementById('tm5').value="";
			document.getElementById('pm5').value="";
			document.getElementById('ttm5').value="";
		}
	}
}

//------------------------
 // For Social Science
 //-----------------------
 function result6(){
	var _tm=parseInt(document.getElementById('tm6').value);
	var _pm=parseInt(document.getElementById('pm6').value);
	if (_tm <=0 && _pm <=0 || document.getElementById('tm6').value=="" && document.getElementById('pm6').value) {
		alert("Please Enter Mark First");
		document.getElementById('ttm6').value=0;
	}
	else{
		var _totalMark=_tm+_pm;
		document.getElementById('ttm6').value=_totalMark;
		
		if (_totalMark >= 80 && _totalMark <=100) {
			document.getElementById('grade6').value="A+";
			document.getElementById('point6').value="5.00";
		}
		else if (_totalMark >= 70 && _totalMark <=79) {
			document.getElementById('grade6').value="A";
			document.getElementById('point6').value="4.00";
		}
		else if (_totalMark >= 60 && _totalMark <=69) {
			document.getElementById('grade6').value="A-";
			document.getElementById('point6').value="3.50";
		}
		else if (_totalMark >= 50 && _totalMark <=59) {
			document.getElementById('grade6').value="B";
			document.getElementById('point6').value="3.00";
		}
		else if (_totalMark >= 40 && _totalMark <=49) {
			document.getElementById('grade6').value="C";
			document.getElementById('point6').value="2.00";
		}
		else if (_totalMark >= 33 && _totalMark <=39) {
			document.getElementById('grade6').value="D";
			document.getElementById('point6').value="1.00";
		}
		else if (_totalMark >= 0 && _totalMark <=32) {
			document.getElementById('grade6').value="F";
			document.getElementById('point6').value="0.00";
		}
		else{
			alert("Invalid Input");
			document.getElementById('grade6').value="";
			document.getElementById('point6').value="";
			document.getElementById('tm6').value="";
			document.getElementById('pm6').value="";
			document.getElementById('ttm6').value="";
		}
	}
}

//------------------------
 // For physics
 //-----------------------
 function result7(){
	var _tm=parseInt(document.getElementById('tm7').value);
	var _pm=parseInt(document.getElementById('pm7').value);
	if (_tm <=0 && _pm <=0 || document.getElementById('tm7').value=="" && document.getElementById('pm7').value) {
		alert("Please Enter Mark First");
		document.getElementById('ttm7').value=0;
	}
	else{
		var _totalMark=_tm+_pm;
		document.getElementById('ttm7').value=_totalMark;
		
		if (_totalMark >= 80 && _totalMark <=100) {
			document.getElementById('grade7').value="A+";
			document.getElementById('point7').value="5.00";
		}
		else if (_totalMark >= 70 && _totalMark <=79) {
			document.getElementById('grade7').value="A";
			document.getElementById('point7').value="4.00";
		}
		else if (_totalMark >= 60 && _totalMark <=69) {
			document.getElementById('grade7').value="A-";
			document.getElementById('point7').value="3.50";
		}
		else if (_totalMark >= 50 && _totalMark <=59) {
			document.getElementById('grade7').value="B";
			document.getElementById('point7').value="3.00";
		}
		else if (_totalMark >= 40 && _totalMark <=49) {
			document.getElementById('grade7').value="C";
			document.getElementById('point7').value="2.00";
		}
		else if (_totalMark >= 33 && _totalMark <=39) {
			document.getElementById('grade7').value="D";
			document.getElementById('point7').value="1.00";
		}
		else if (_totalMark >= 0 && _totalMark <=32) {
			document.getElementById('grade7').value="F";
			document.getElementById('point7').value="0.00";
		}
		else{
			alert("Invalid Input");
			document.getElementById('grade7').value="";
			document.getElementById('point7').value="";
			document.getElementById('tm7').value="";
			document.getElementById('pm7').value="";
			document.getElementById('ttm7').value="";
		}
	}
}

//------------------------
 // For Chemistry
 //-----------------------
 function result8(){
	var _tm=parseInt(document.getElementById('tm8').value);
	var _pm=parseInt(document.getElementById('pm8').value);
	if (_tm <=0 && _pm <=0 || document.getElementById('tm8').value=="" && document.getElementById('pm8').value) {
		alert("Please Enter Mark First");
		document.getElementById('ttm8').value=0;
	}
	else{
		var _totalMark=_tm+_pm;
		document.getElementById('ttm8').value=_totalMark;
		
		if (_totalMark >= 80 && _totalMark <=100) {
			document.getElementById('grade8').value="A+";
			document.getElementById('point8').value="5.00";
		}
		else if (_totalMark >= 70 && _totalMark <=79) {
			document.getElementById('grade8').value="A";
			document.getElementById('point8').value="4.00";
		}
		else if (_totalMark >= 60 && _totalMark <=69) {
			document.getElementById('grade8').value="A-";
			document.getElementById('point8').value="3.50";
		}
		else if (_totalMark >= 50 && _totalMark <=59) {
			document.getElementById('grade8').value="B";
			document.getElementById('point8').value="3.00";
		}
		else if (_totalMark >= 40 && _totalMark <=49) {
			document.getElementById('grade8').value="C";
			document.getElementById('point8').value="2.00";
		}
		else if (_totalMark >= 33 && _totalMark <=39) {
			document.getElementById('grade8').value="D";
			document.getElementById('point8').value="1.00";
		}
		else if (_totalMark >= 0 && _totalMark <=32) {
			document.getElementById('grade8').value="F";
			document.getElementById('point8').value="0.00";
		}
		else{
			alert("Invalid Input");
			document.getElementById('grade8').value="";
			document.getElementById('point8').value="";
			document.getElementById('tm8').value="";
			document.getElementById('pm8').value="";
			document.getElementById('ttm8').value="";
		}
	}
}

//------------------------
 // For Biology
 //-----------------------
 function result9(){
	var _tm=parseInt(document.getElementById('tm9').value);
	var _pm=parseInt(document.getElementById('pm9').value);
	if (_tm <=0 && _pm <=0 || document.getElementById('tm9').value=="" && document.getElementById('pm9').value) {
		alert("Please Enter Mark First");
		document.getElementById('ttm9').value=0;
	}
	else{
		var _totalMark=_tm+_pm;
		document.getElementById('ttm9').value=_totalMark;
		
		if (_totalMark >= 80 && _totalMark <=100) {
			document.getElementById('grade9').value="A+";
			document.getElementById('point9').value="5.00";
		}
		else if (_totalMark >= 70 && _totalMark <=79) {
			document.getElementById('grade9').value="A";
			document.getElementById('point9').value="4.00";
		}
		else if (_totalMark >= 60 && _totalMark <=69) {
			document.getElementById('grade9').value="A-";
			document.getElementById('point9').value="3.50";
		}
		else if (_totalMark >= 50 && _totalMark <=59) {
			document.getElementById('grade9').value="B";
			document.getElementById('point9').value="3.00";
		}
		else if (_totalMark >= 40 && _totalMark <=49) {
			document.getElementById('grade8').value="C";
			document.getElementById('point8').value="2.00";
		}
		else if (_totalMark >= 33 && _totalMark <=39) {
			document.getElementById('grade9').value="D";
			document.getElementById('point9').value="1.00";
		}
		else if (_totalMark >= 0 && _totalMark <=32) {
			document.getElementById('grade9').value="F";
			document.getElementById('point9').value="0.00";
		}
		else{
			alert("Invalid Input");
			document.getElementById('grade9').value="";
			document.getElementById('point9').value="";
			document.getElementById('tm9').value="";
			document.getElementById('pm9').value="";
			document.getElementById('ttm9').value="";
		}
	}
}

//------------------------
 // For Higher math
 //-----------------------
 function result10(){
	var _tm=parseInt(document.getElementById('tm10').value);
	var _pm=parseInt(document.getElementById('pm10').value);
	if (_tm <=0 && _pm <=0 || document.getElementById('tm10').value=="" && document.getElementById('pm10').value) {
		alert("Please Enter Mark First");
		document.getElementById('ttm10').value=0;
	}
	else{
		var _totalMark=_tm+_pm;
		document.getElementById('ttm10').value=_totalMark;
		
		if (_totalMark >= 80 && _totalMark <=100) {
			document.getElementById('grade10').value="A+";
			document.getElementById('point10').value="5.00";
		}
		else if (_totalMark >= 70 && _totalMark <=79) {
			document.getElementById('grade10').value="A";
			document.getElementById('point10').value="4.00";
		}
		else if (_totalMark >= 60 && _totalMark <=69) {
			document.getElementById('grade10').value="A-";
			document.getElementById('point10').value="3.50";
		}
		else if (_totalMark >= 50 && _totalMark <=59) {
			document.getElementById('grade10').value="B";
			document.getElementById('point10').value="3.00";
		}
		else if (_totalMark >= 40 && _totalMark <=49) {
			document.getElementById('grade10').value="C";
			document.getElementById('point10').value="2.00";
		}
		else if (_totalMark >= 33 && _totalMark <=39) {
			document.getElementById('grade10').value="D";
			document.getElementById('point10').value="1.00";
		}
		else if (_totalMark >= 0 && _totalMark <=32) {
			document.getElementById('grade10').value="F";
			document.getElementById('point10').value="0.00";
		}
		else{
			alert("Invalid Input");
			document.getElementById('grade10').value="";
			document.getElementById('point10').value="";
			document.getElementById('tm10').value="";
			document.getElementById('pm10').value="";
			document.getElementById('ttm10').value="";
		}
	}
}

//------------------------
 // For Islam Sikkha
 //-----------------------
 function result11(){
	var _tm=parseInt(document.getElementById('tm11').value);
	var _pm=parseInt(document.getElementById('pm11').value);
	if (_tm <=0 && _pm <=0 || document.getElementById('tm11').value=="" && document.getElementById('pm11').value) {
		alert("Please Enter Mark First");
		document.getElementById('ttm11').value=0;
	}
	else{
		var _totalMark=_tm+_pm;
		document.getElementById('ttm11').value=_totalMark;
		
		if (_totalMark >= 80 && _totalMark <=100) {
			document.getElementById('grade11').value="A+";
			document.getElementById('point11').value="5.00";
		}
		else if (_totalMark >= 70 && _totalMark <=79) {
			document.getElementById('grade11').value="A";
			document.getElementById('point11').value="4.00";
		}
		else if (_totalMark >= 60 && _totalMark <=69) {
			document.getElementById('grade11').value="A-";
			document.getElementById('point11').value="3.50";
		}
		else if (_totalMark >= 50 && _totalMark <=59) {
			document.getElementById('grade11').value="B";
			document.getElementById('point11').value="3.00";
		}
		else if (_totalMark >= 40 && _totalMark <=49) {
			document.getElementById('grade11').value="C";
			document.getElementById('point11').value="2.00";
		}
		else if (_totalMark >= 33 && _totalMark <=39) {
			document.getElementById('grade11').value="D";
			document.getElementById('point11').value="1.00";
		}
		else if (_totalMark >= 0 && _totalMark <=32) {
			document.getElementById('grade11').value="F";
			document.getElementById('point11').value="0.00";
		}
		else{
			alert("Invalid Input");
			document.getElementById('grade11').value="";
			document.getElementById('point11').value="";
			document.getElementById('tm11').value="";
			document.getElementById('pm11').value="";
			document.getElementById('ttm11').value="";
		}
	}
}



// -------------------------------------------- ---------------- 

// ------------------final result--------------------
// --------------------------------------------------------------- 

function finalResult(){
	
	if(document.getElementById("grade").value=="F" || document.getElementById("grade2").value=="F" || document.getElementById("grade3").value=="F" || document.getElementById("grade4").value=="F" || document.getElementById("grade5").value=="F" || document.getElementById("grade6").value=="F" || document.getElementById("grade7").value=="F" || document.getElementById("grade8").value=="F" || document.getElementById("grade9").value=="F" || document.getElementById("grade10").value=="F" || document.getElementById("grade11").value=="F")
	{

		document.getElementById("totalgrade").value="F";
		document.getElementById("totalPoint").value="0.00";
		document.getElementById("totalMark").value="0.00";
	}
	else{
		var _tm=document.getElementById('ttm').value;
		var _tm2=document.getElementById('ttm2').value;
		var _tm3=document.getElementById('ttm3').value;
		var _tm4=document.getElementById('ttm4').value;
		var _tm5=document.getElementById('ttm5').value;
		var _tm6=document.getElementById('ttm6').value;
		var _tm7=document.getElementById('ttm7').value;
		var _tm8=document.getElementById('ttm8').value;
		var _tm9=document.getElementById('ttm9').value;
		var _tm10=document.getElementById('ttm10').value;
		var _tm11=document.getElementById('ttm11').value;
		var _totalMark = parseInt(_tm)+parseInt(_tm2)+parseInt(_tm3)+parseInt(_tm4)+parseInt(_tm5)+parseInt(_tm6)+parseInt(_tm7)+parseInt(_tm8)+parseInt(_tm9)+parseInt(_tm10)+parseInt(_tm11);
		document.getElementById('totalMark').value=_totalMark;

		var _point =document.getElementById('point').value;
		var _point2 =document.getElementById('point2').value;
		var _point3 =document.getElementById('point3').value;
		var _point4 =document.getElementById('point4').value;
		var _point5 =document.getElementById('point5').value;
		var _point6 =document.getElementById('point6').value;
		var _point7 =document.getElementById('point7').value;
		var _point8 =document.getElementById('point8').value;
		var _point9 =document.getElementById('point9').value;
		var _point10 =document.getElementById('point10').value;
		var _point11 =document.getElementById('point11').value;
		var _totalPoint=((parseFloat(_point) + parseFloat(_point2) + parseFloat(_point3) + parseFloat(_point4) + parseFloat(_point5) + parseFloat(_point5) + parseFloat(_point6) + parseFloat(_point7) + parseFloat(_point7) + parseFloat(_point8) + parseFloat(_point9) + parseFloat(_point10) + parseFloat(_point11))/11);

		document.getElementById("totalPoint").value=_totalPoint;

		if (_totalPoint==5.00) {
			document.getElementById("totalgrade").value="A+";
		}
		else if(_totalPoint >= 4.00 && _totalPoint<=4.99){
			document.getElementById("totalgrade").value="A";
		}
		else if(_totalPoint >= 3.00 && _totalPoint<=3.99){
			document.getElementById("totalgrade").value="A-";
		}
		else if(_totalPoint >= 2.00 && _totalPoint<=2.99){
			document.getElementById("totalgrade").value="A-";
		}
		else if(_totalPoint >= 1.00 && _totalPoint<=1.99){
			document.getElementById("totalgrade").value="A-";
		}
	}
}