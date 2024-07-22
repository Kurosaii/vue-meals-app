<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

import axiosClient from '../axiosClient';

const route = useRoute();

const meal = ref({});

onMounted(async () => {
    const response = await axiosClient.get(`lookup.php?i=${route.params.id}`);

    meal.value = response.data.meals?.[0] || {};
});
</script>

<template>
    <div class="w-[800px] mx-auto">
        <h1 class="font-bold mb-5 text-5-xl">{{ meal.strMeal }}</h1>
        <img :src="meal.strMealThumb" :alt="meal.strMeal" />
    </div>
</template>