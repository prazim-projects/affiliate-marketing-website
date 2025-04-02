<script setup>
defineProps({
    label: {
        type: String,
        default: '',
    },
    modelValue: {
        type: String,
        default: "",
    },
})



</script>

<template>
    <div class="input-wrap">
        <label > {{ label }}</label>
        <input type="text"  :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" />
    </div>

</template>

<style lang='scss' scoped>


</style>