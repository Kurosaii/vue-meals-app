<script setup>
import AppNavbar from './AppNavbar.vue';
</script>

<template>
    <div class="bg-gray-100 h-full">
        <AppNavbar />

        <main>
            <router-view />
        </main>
    </div>
</template>