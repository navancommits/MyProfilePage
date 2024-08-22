<script setup>
import MyAgeHeader from "./MyAgeCounter.vue";
import MyAgeDisplay from "./MyAgeDisplay.vue";
import { computed, onUnmounted, onMounted, ref } from "vue";

// make reactive now
let now = ref(new Date());
let interval = ref(0)
onUnmounted(() => clearInterval(interval));

const birthDate=ref('27')
let birthMonth=ref('04')
const birthYear=ref('1975')
const birthHour=ref('22')
const birthMinutes=ref('52')
const birthSeconds=ref('00')
const daysRounded=ref(0)
const hours =ref(0)
const hoursRounded =ref(0)
const minutes =ref(0)
const minutesRounded =ref(0)
const seconds=ref(0)
const secondsRounded=ref(0)
const yearsRounded=ref(0)
const monthsRounded=ref(0)
const actualDaysRounded=ref(0)
const actualMonthsRounded=ref(0)
const actualYearsRounded=ref(0)
let handle

onMounted(()=>{Calculate()})

const Calculate=() =>
{  
  //form the dob and note that month is index-based so need to reduce one from input month
  let dob = new Date(birthYear.value, birthMonth.value-1,birthDate.value, birthHour.value, birthMinutes.value, birthSeconds.value);
    
  interval.value = setInterval(() => (now.value = new Date()), 1000);
  //console.log('dobvvvv' +  Number(dob.getFullYear()))
  if (dob>now.value)
  {
    //not handling greater than current date 
    //console.log('now' +  now.value)
    clearInterval(interval)    
    hoursRounded.value='00'
    minutesRounded.value='00'
    actualYearsRounded.value='00'
    actualMonthsRounded.value='00'
    actualDaysRounded.value='00'
    secondsRounded.value='00'

    return
  }

  handle = requestAnimationFrame(Calculate)//loops this method
  
  //get the year diff
  yearsRounded.value = now.value.getFullYear() - birthYear.value;
  //console.log("years" + yearsRounded.value)

  if (birthDate.value > now.value.getDate()) 
    //if birth date alone is greater than current date, calc month till current one
    monthsRounded.value = now.value.getMonth() - dob.getMonth()-1  
  else
    //if birth date alone is less than current date, this number is definitely 1 more than prev case
    monthsRounded.value = now.value.getMonth()+1 - dob.getMonth()-1

  //console.log("months rounded" + monthsRounded.value)
  
  //console.log(days.value)
  
  //console.log("month index" + now.value.getMonth())
  //console.log("days in prev month" + daysInMonth(now.value.getYear(),now.value.getMonth()))
  
  //console.log('next'+actualMonthsRounded.value)

  if (monthsRounded.value<0) {
    //if month is greater than current month, it could be negative so, normalize it
    actualMonthsRounded.value=12 +  monthsRounded.value
    actualYearsRounded.value =yearsRounded.value -1
  }
  else
  {
    actualYearsRounded.value=yearsRounded.value
    actualMonthsRounded.value =monthsRounded.value
  }
  
  //day calc starts from current month - relative month start date
  const currMonthStartDateTime = new Date((now.value.getFullYear()).toString(),(now.value.getMonth()).toString(), birthDate.value, 
  birthHour.value, birthMinutes.value, birthSeconds.value); 

  //current date/month scenario
  if (birthDate.value ==now.value.getDate() && birthMonth.value ==now.value.getMonth()+1)  {        
    if (Date.now()<currMonthStartDateTime.getTime()){     
      actualMonthsRounded.value=actualMonthsRounded.value+11
      actualYearsRounded.value=actualYearsRounded.value-1
    }
  }  

  //console.log("curr month rel start datetime" + currMonthStartDateTime)
  
  //get total days btw now and this month relative start date
  const days = computed(() => {
    const one_day = 1000 * 60 * 60 * 24;
    return (now.value.getTime()-currMonthStartDateTime.getTime()) / one_day;
  });

  //console.log('final'+actualMonthsRounded.value)
  daysRounded.value = Math.floor(days.value);//get days alone since the decimal will help calculate mm, hh and ss
  
  //console.log("day diff" + daysRounded.value)
  if (daysRounded.value<0) {
    const daysInprevMonth = (year, month) => new Date(year, month, 0).getDate();//useful in getting total no. of days in a month
    //console.log("days in month" + daysInprevMonth(now.value.getYear(),now.value.getMonth()))
    //negative val must be converted to actual days by adding with prev month total days    
    actualDaysRounded.value=daysInprevMonth(now.value.getYear(),now.value.getMonth()) +  daysRounded.value
  }
  else
  {
    //all good if not negative
    actualDaysRounded.value=daysRounded.value     
  }

  //console.log('last'+actualMonthsRounded.value)
  hours.value = 24 * (days.value - daysRounded.value);
  hoursRounded.value =  Math.floor(hours.value);
  minutes.value = 60 * (hours.value - hoursRounded.value);
  minutesRounded.value =  Math.floor(minutes.value);
  seconds.value =  60 * (minutes.value - minutesRounded.value);
  secondsRounded.value = Math.floor(seconds.value);
}
</script>
<template>
    <div class="countdown-box">      
      <div class='container'>
          <label>Date/time of Birth: </label>
          <input type='number' min="1" max="31" style="width:20px" maxlength=2 placeholder="DD" v-model="birthDate" />
          <label style="width:10px">/</label>
          <input type='number' min="1" max="12" style="width:20px" maxlength=2   placeholder="MM" v-model="birthMonth" />
          <label style="width:10px">/</label>
          <input type='number' style="width:40px" maxlength=4  placeholder="YYYY" v-model="birthYear" />
          
          <input type='number' style="width:20px" maxlength=2   placeholder="hh" v-model="birthHour" />
          <label style="width:10px">:</label>
          <input type='number' style="width:20px" maxlength=2  placeholder="mm" v-model="birthMinutes" />
          <label style="width:10px">:</label>
          <input type='number' style="width:20px" maxlength=2  placeholder="ss" v-model="birthSeconds" />          
      </div>
      <main class="flex justify-left">
        <MyAgeDisplay data-test="years" label="years" :number="actualYearsRounded" />
        <MyAgeDisplay data-test="months" label="months" :number="actualMonthsRounded" />
        <MyAgeDisplay data-test="days" label="days" :number="actualDaysRounded" />
        <MyAgeDisplay
          data-test="hours"
          label="hours"
          :number="hoursRounded"
        />
        <MyAgeDisplay
          data-test="minutes"
          label="minutes"
          :number="minutesRounded"
        />
        <MyAgeDisplay
          data-test="seconds"
          label="seconds"
          :number="secondsRounded"
        />
      </main>
    </div>
</template>

<style scoped>
.countdown-box {
  box-shadow: 0rem 0.5rem 0.5rem 0rem #c8c8c8;  
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
.container {
  border-top:50px;
  text-align:left;
  padding-left: 20px;
  font-style:italic;  
  padding-bottom: 10px;  
}
</style>
