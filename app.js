const birthDateInpute=document.getElementById("birthYear");
const calculateBtn=document.getElementById("calculate");
const resetBtn=document.getElementById("reset");
const ageDisplay=document.getElementById("ageDisplay");
const weeksDsplay=document.getElementById("weeksDsplay");
const daysDisplay=document.getElementById("daysDisplay");
function calculateBirthDate(){
    const birthDate=new Date(birthDateInpute.value);
    const today=new Date();
    if(isNaN(birthDate)|| birthDate>today){
        // alert("please Enter Valid Date");
        swal.fire({
            title: "Error",
            text: "Invalid Date. please enter a valid date of birth.",
            icon: "error",
            confirmButtonText: "OK",
        })

    return;}
    let year =today.getFullYear()-birthDate.getFullYear();
    let month=today.getMonth()-birthDate.getMonth();
    let day=today.getDate()-birthDate.getDate();
    if(day<0){
        month--;
        day+=new Date(today.getFullYear(), today.getMonth(),today.getDate())
    }
    if(month<0){
        year--;
        month+=12;
    }
    const totalDays=Math.floor((today-birthDate)/(1000*60*60*24));
    const weeks=Math.floor(totalDays/7);
    ageDisplay.textContent=`you are ${year} years, ${month} months and ${day} days old.`;
    weeksDsplay.textContent=`that's approximately ${weeks} weeks.`
    daysDisplay.textContent=`or about ${totalDays} days.`
}
resetBtn.addEventListener('click',(e)=>{
    birthDateInpute.value='';
    daysDisplay.textContent='';
    ageDisplay.textContent='';
    weeksDsplay.textContent=';'
})
calculateBtn.addEventListener('click', calculateBirthDate);



