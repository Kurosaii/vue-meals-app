<script setup>
import { onMounted, ref } from 'vue';

import axiosClient from '../axiosClient';

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const ingredients = ref([]);

onMounted(async () => {
    const response = await axiosClient.get('/list.php?i=list');
    ingredients.value = response.data;
});
</script>

<template>
    <div class="flex flex-col justify-center p-8">
        <input type="text" class="border-gray-200 border-2 rounded w-full" placeholder="Search for meals" />

        <div class="flex gap-2 mt-2">
            <router-link v-for="letter in letters" :key="letter" :to="{ name: 'byLetter', params: { letter } }">
                {{ letter }}
            </router-link>
        </div>
    </div>

    <pre>{{ ingredients }}</pre>
</template>