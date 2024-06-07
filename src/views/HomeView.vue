<script setup>
import store from '../store';
import { computed } from 'vue';

const meals = computed(() => store.state.meals);
</script>

<template>
    <pre>{{ meals }}</pre>
</template>