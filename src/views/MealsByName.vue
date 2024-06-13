<script setup>
import { computed, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

import store from './../store';

const route = useRoute();

const search = ref('');

const meals = computed(() => store.state.filteredMeals);

onMounted(() => {
    search.value = route.params.name;

    if (search.value) {
        searchMeals();
    }
});

function searchMeals() {
    store.dispatch('searchMeals', search.value);
}
</script>

<template>
    <div class="p-8 pb-0">
        <input v-model:="search" type="text" class="border-2 border-gray-200 rounded w-full"
            placeholder="Search for meals" @change="searchMeals" />
    </div>

    <div class="gap-5 grid grid-cols-1 p-8 md:grid-cols-3">
        <div v-for="meal in meals" :key="meal.idMeal" class="bg-white rounded-xl shadow">
            <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
                <img :src="meal.strMealThumb" :alt="meal.strMeal" class="h-48 object-cover rounded-t-xl w-full" />
            </router-link>

            <div class="p-3">
                <h3 class="font-bold">{{ meal.strMeal }}</h3>

                <p class="mb-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>

                <div class="flex justify-end">
                    <a :href="meal.strYoutube" target="_blank"
                        class="bg-red-500 border-2 border-red-600 px-3 py-2 rounded text-white transition-colors hover:bg-red-600">YouTube</a>
                </div>
            </div>
        </div>
    </div>
</template>