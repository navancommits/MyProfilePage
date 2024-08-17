<script setup>
defineOptions(
    {
        inheritAttrs:false
    }
)

const urlEmit=defineEmits()
</script>
<template>
 <img src="../../assets/blogger.png" alt="My Blog" class="thumbnail" @click="urlEmit('hrefClick','https://navansitecorenotes.blogspot.com')" />
</template>

