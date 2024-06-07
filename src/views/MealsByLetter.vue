<script setup>
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
</script>

<template>
    <div class="flex flex-col justify-center p-8">
        <div class="flex gap-2 mt-2 justify-center">
            <router-link v-for="letter in letters" :key="letter" :to="{ name: 'byLetter', params: { letter } }">
                {{ letter }}
            </router-link>
        </div>
    </div>
</template>