<script setup>
import store from '../store';
import { computed } from 'vue';

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
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
</template>