<script setup>

let styledFallbackVal={color:'maroon',text:"Not provided"}

</script>
<template>
  <div class="item">
    <i>
      <slot name="icon"></slot>
    </i>
    <div class="details">
      <h3>
        <slot name="heading" suffix=" Profile"></slot>
      </h3>
      <slot name="content"><div v-styledfallback="styledFallbackVal"></div></slot>
    </div>
  </div>
</template>

<style scoped>
.item {
  margin-top: 2rem;
  display: flex;
  position: relative; 
}

.details {
  flex: 1;
  margin-left: 1rem;  
}

i {
  display: flex;
  place-items: center;
  place-content: center;
  width: 32px;
  height: 32px;

  color: var(--color-text);
}

h3 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
  font-weight:bold;
}

@media (min-width: 1024px) {
  .item {
    margin: 5px 0px 15px 0px;
    padding: 0.4rem calc(var(--section-gap) / 3) 1rem calc(var(--section-gap) / 3);
    border: 1px solid #888888;
    box-shadow: 5px 14px 18px gray;
  }

  i {
    top: calc(50% - 25px);
    left: -26px;
    position: absolute;
    border: 1px solid var(--color-border);
    background: var(--color-background);
    border-radius: 8px;
    width: 50px;
    height: 50px;
  }

  .item:before {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    bottom: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:after {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    top: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:first-of-type:before {
    display: none;
  }

  .item:last-of-type:after {
    display: none;
  }
}
</style>
