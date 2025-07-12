const button = document.querySelector(".button");
const inputDay = document.getElementById("dayInput");
const inputMonth = document.getElementById("monthInput");
const inputYear = document.getElementById("yearInput");
const resultDay = document.getElementById("dRes");
const resultMonth = document.getElementById("mRes");
const resultYear = document.getElementById("yRes");
const months = document.getElementById("months");
const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const inputs = [inputDay, inputMonth, inputYear];



// filter inputs 
inputs.forEach(inp =>{
    inp.addEventListener("input", ()=>{
        inp.value = inp.value.replace(/\D/g, "");
    })
    inp.addEventListener("focusout", ()=>{
        if(inp.value.length == 1){
            inp.value = "0" + inp.value}
    })
})


button.addEventListener("click", ()=>{


    //test 
    console.log("----------------------------");
    console.log("this is a random num: "+ Math.floor(Math.random() * 30));
    //test


    let values = []; // get values from 3 input field and store it in array

    

    inputs.forEach(input =>{
        if(input.value.length < 1){ // check if any field is empty
            input.nextElementSibling.classList.remove("hide");
            input.previousElementSibling.style.color = "var(--Red-400)";
            input.style.borderColor = "var(--Red-400)";
        }

        else{
            values.push(input.value); // if 3 field is ok thier values will be added to the array in line 32
        }


        input.addEventListener("input", ()=>{ // for remove error messages after fill the empty field
            input.nextElementSibling.classList.add("hide");
            input.previousElementSibling.style.color = "var(--Grey-500)";
            input.style.borderColor = "var(--Grey-200)";
            
        })
        
         
    })

    
    

    // MAIN Function
    if(values.length > 2){

        if(inputMonth.value > 12){
            inputMonth.nextElementSibling.textContent = "*Month Can't be greater than 12";
            inputMonth.nextElementSibling.classList.remove("hide");
            inputMonth.previousElementSibling.style.color = "var(--Red-400)";
            inputMonth.style.borderColor = "var(--Red-400)";
        }
    

        else if(inputDay.value > 31){
            inputDay.nextElementSibling.textContent = "*Day Can't be greater than 31";
            inputDay.nextElementSibling.classList.remove("hide");
            inputDay.previousElementSibling.style.color = "var(--Red-400)";
            inputDay.style.borderColor = "var(--Red-400)";
        }

        else{

            // VARIABLES ...
            
            let bDate = new Date(`${values[1]}-${values[0]}-${values[2]}`);
            let cDate = new Date(Date.now());
    
    
    
            // 1. Method ...
            // calculate age usıng math (based of age by days number)
            // let diff = Math.floor((cDate.getTime() - bDate.getTime())/ 1000 / 60 / 60 / 24); // Convert Age to Days
            // resultYear.textContent = Math.floor(diff / 365.25); // YYYY
            // resultMonth.textContent = Math.floor((diff % 365.25) / 30.44); // MM
            // resultDay.textContent = Math.round(((diff % 365.25) % 30.44)); // DD
            
    
            // 2. Method ....
            // calculate age by date logic..
            let yyyy = cDate.getFullYear()  -  bDate.getFullYear();
            let mm = cDate.getMonth()   -   bDate.getMonth();
            let dd = cDate.getDate()   -  bDate.getDate();
            let byMonths = Math.floor((cDate.getTime() - bDate.getTime()) / 1000 / 60 / 60 / 24 / 30);
            let byDays = Intl.NumberFormat().format(Math.floor((cDate.getTime() - bDate.getTime()) / 1000 / 60 / 60 / 24));              
            let byHours = Intl.NumberFormat().format(Math.floor((cDate.getTime() - bDate.getTime()) / 1000 / 60 / 60));
            let byminutes = Intl.NumberFormat().format(Math.floor((cDate.getTime() - bDate.getTime()) / 1000 / 60));
            let byseconds = Intl.NumberFormat().format(Math.floor((cDate.getTime() - bDate.getTime()) / 1000));
    
            if(bDate > cDate){
                alert("Wrong Date Input");
            }
            else{
                
                if(mm < 0){
                    yyyy--;
                    mm += 12;
                    if( dd < 0){
                        mm--;
                        dd += 30;
                    }
                }

                else if(dd < 0){
                    mm--;
                    dd += 30;
                    if(mm < 0 ){
                        yyyy--;
                        mm += 12;
                    }
                }
                resultYear.textContent = yyyy;
                resultMonth.textContent = mm;
                resultDay.textContent = dd;
                months.textContent = byMonths;
                days.textContent = byDays;
                hours.textContent = byHours;
                minutes.textContent = byminutes;
                seconds.textContent = byseconds;
            }
        }
        
    }

    


    
})




// Clear Function ...
document.querySelector(".clear").addEventListener("click", ()=>{
    inputs.forEach(input=>{
        input.nextElementSibling.classList.add("hide");
        input.previousElementSibling.style.color = "var(--Grey-500)";
        input.style.borderColor = "var(--Grey-200)";
        input.value = "";
        resultDay.textContent = "--";
        resultMonth.textContent = "--";
        resultYear.textContent = "--";
        months.textContent = "--";
        days.textContent = "--";
        hours.textContent = "--";
        minutes.textContent = "--";
        seconds.textContent = "--";
    })
    console.clear();
})







// // LEAP YEARS function .....
//         function leap(birthDate, currentDate){
//             let leapCount = 0;
//             if(birthDate.getFullYear() % 4 == 0){
//                 if(currentDate.getFullYear() % 4 == 0){
//                     if(birthDate.getMonth()+1 <= 2 && currentDate.getMonth()+1 >= 2){
//                         leapCount += ((currentDate.getFullYear() - birthDate.getFullYear()) / 4) +1 ;
//                     }
//                     else if(birthDate.getMonth()+1 > 2 && currentDate.getMonth()+1 > 2){
//                         leapCount += ((currentDate.getFullYear() - birthDate.getFullYear()) / 4);                       
//                     }
//                     else if(birthDate.getMonth()+1 > 2 && currentDate.getMonth()+1 < 2){
//                         leapCount += ((currentDate.getFullYear() - birthDate.getFullYear()) / 4) - 1;                       
//                     }
//                 }
//                 else if(currentDate.getFullYear() % 4 != 0){
//                     if(birthDate.getMonth()+1 <= 2){
//                         leapCount += Math.floor(((currentDate.getFullYear() - birthDate.getFullYear()) / 4)+1)  ;
//                     }
//                     else if(birthDate.getMonth()+1 > 2){
//                         leapCount += Math.floor((currentDate.getFullYear() - birthDate.getFullYear()) / 4);
//                     }
//                 }
//             }
//             else{
//                 leapCount += Math.floor(((currentDate.getFullYear() - birthDate.getFullYear()) / 4) +1) ;
//             }
//             return leapCount;
//         }








// // AGE To DAY function .....
//         function age2day(birthDate, currentDate){
//             let ageByDays = 0;
//             if(currentDate.getMonth() < birthDate.getMonth()){

//                 ageByDays += (( currentDate.getFullYear() - birthDate.getFullYear() - 1) * 365)
//                 + leap(bDate, cDate) + month2day(birthDate.getMonth(), monthsDayCount)
//                 + month2day(currentDate.getMonth() ,birthDate.getMonth(), monthsDayCount);
                
//             }
//             return ageByDays;
//         }










// // MONTH To DAY function .....
//         function month2day(startMonth, endMonth){
//             let monthsDayCount = [31,28,31,30,31,30,31,31,30,31,30,31];
//             let total = 0;
//             for(let i = startMonth; i < endMonth; i++){
//                 total += monthsDayCount[i];
//             }
//             return total;
//         }