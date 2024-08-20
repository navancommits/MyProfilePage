<script setup>
import MyAgeHeader from "./MyAgeCounter.vue";
import MyAgeDisplay from "./MyAgeDisplay.vue";
import { computed, onUnmounted, onMounted, ref } from "vue";

// make reactive now
let now = ref(new Date());
let interval = ref(0)
onUnmounted(() => clearInterval(interval));

const birthDate=ref('27')
const birthMonth=ref('04')
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
  handle = requestAnimationFrame(Calculate)
  
  let dob = new Date(birthYear.value, birthMonth.value,birthDate.value, birthHour.value, birthMinutes.value, birthSeconds.value);
  
  const currYear = new Date(`01/01/${now.value.getYear()} 00:00:00`);
  const currMonthStartDateTime = new Date((now.value.getFullYear()).toString(),(now.value.getMonth()).toString(), birthDate.value, 
  birthHour.value, birthMinutes.value, birthSeconds.value);

  const days = computed(() => {
    const one_day = 1000 * 60 * 60 * 24;
    return (now.value.getTime()-currMonthStartDateTime.getTime()) / one_day;
  });

  const daysInMonth = (year, month) => new Date(year, month, 0).getDate();
  
  yearsRounded.value = now.value.getYear() - dob.getYear();

  if (birthDate.value > now.value.getDate())
    monthsRounded.value = Math.floor(now.value.getMonth() - dob.getMonth())
  else
    monthsRounded.value = Math.floor(now.value.getMonth()+1 - dob.getMonth())
  
  interval.value = setInterval(() => (now.value = new Date()), 1000);
  daysRounded.value = Math.floor(days.value);
  
  if (daysRounded.value<0) { 
    actualDaysRounded.value=daysInMonth(now.value.getYear(),now.value.getMonth()+1) +  daysRounded.value
    actualMonthsRounded.value =monthsRounded.value -1
  }
  else
  {
     actualDaysRounded.value=daysRounded.value
     actualMonthsRounded.value =monthsRounded.value
  }  

  if (monthsRounded.value<0) { 
    actualMonthsRounded.value=12 +  monthsRounded.value
    actualYearsRounded.value =yearsRounded.value -1
  }
  else
  {
     actualYearsRounded.value=yearsRounded.value
     actualMonthsRounded.value =monthsRounded.value
  }

  if (birthDate.value ==now.value.getDate() && birthMonth.value ==now.value.getMonth()+1)  {        
    if (Date.now()<currMonthStartDateTime.getTime()){     
      actualMonthsRounded.value=actualMonthsRounded.value+11
      actualYearsRounded.value=actualYearsRounded.value-1
    }
  }

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
          <input type='text' style="width:20px" maxlength=2 placeholder="Birth Date" v-model="birthDate" />
          <label style="width:10px">/</label>
          <input type='text' style="width:20px" maxlength=2   placeholder="Birth month" v-model="birthMonth" />
          <label style="width:10px">/</label>
          <input type='text' style="width:40px" maxlength=4  placeholder="Birth year" v-model="birthYear" />
          
          <input type='text' style="width:20px" maxlength=2   placeholder="Birth hour" v-model="birthHour" />
          <label style="width:10px">:</label>
          <input type='text' style="width:20px" maxlength=2  placeholder="Birth minutes" v-model="birthMinutes" />
          <label style="width:10px">:</label>
          <input type='text' style="width:20px" maxlength=2  placeholder="Birth seconds" v-model="birthSeconds" />          
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
.container {
  border-top:50px;
  text-align:left;
  padding-left: 20px;
  font-style:italic;  
  padding-bottom: 10px;  
}
</style>
