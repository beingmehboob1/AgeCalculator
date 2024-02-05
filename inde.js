function calculate(){

    let day;
    let month;
    let year;

   let currentYear=parseInt(cd.value.slice(0,4),10)
   let currentMonth=parseInt(cd.value.slice(5,7),10); 
   let currentDay=parseInt(cd.value.slice(8,10),10);
   console.log("current month:-",currentYear, currentMonth, currentDay);

   let birthYear=parseInt(dob.value.slice(0,4),10)
   let birthMonth=parseInt(dob.value.slice(5,7),10); 
   let birthDay=parseInt(dob.value.slice(8,10),10);
   console.log("dob:- ",birthYear, birthMonth, birthDay);

   if(currentDay>=birthDay){
    day=currentDay-birthDay;
   }
   else{
    day= (currentDay + new Date(currentYear,currentMonth).getDate()) -birthDay;
    currentMonth--;
   }
   if(currentMonth>=birthMonth){
    month=currentMonth-birthMonth
   }
   else{
    month=currentMonth+12-birthMonth;
    currentYear--;
   }

   year=currentYear-birthYear;

   if(year<0){
    Currentage.innerHTML="Kya Mazak Karab Lode sahi date dal"
   }
   else{
    Currentage.innerHTML=year +" years,"+ month +" months,"+ day +" days"
   }
   
}