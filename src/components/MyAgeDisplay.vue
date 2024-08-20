<script setup>
defineProps({
  label: String,
  number: Number,
});
</script>
<template>
  <div class="segment">
    <div class="relative pt-10 overflow-hidden">
      <transition name="ticker">
        <span
          :key="number"
          class="numbers text-green absolute top-0 left-[50%]">{{ number }}</span>        
      </transition>
    </div>

    <span class="block pt-2 label pb-2">{{ label }}</span>
  </div>
</template>
<style>
.segment {
  width: 90px;  
  text-align:center;
}
.text-green {
  color:green
}
.numbers {
  transform: translateX(-50%);
  font-size: 2rem;
}
.ticker-enter-active,
.ticker-leave-active {
  transition: 0.5s ease;
}
.ticker-enter-from {
  transform: translate(-50%,-100%);
}
.ticker-leave-to {
  transform: translate(-50%,100%);
}
.ticker-enter-to,
.ticker-leave-from {
  transform: translate(-50%,0);
}
</style>
