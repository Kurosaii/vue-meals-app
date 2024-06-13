<template>
    <header class="bg-white flex h-16 justify-between shadow">
        <router-link :to="{ name: 'home' }" class="flex items-center px-5">
            Home
        </router-link>

        <div class="flex gap-1">
            <router-link :to="{ name: 'byName' }" class="flex items-center px-2 transition-colors hover:bg-purple-100">
                Search Meals
            </router-link>

            <router-link :to="{ name: 'byLetter' }"
                class="flex items-center px-2 transition-colors hover:bg-purple-100">
                Meals by Letter
            </router-link>

            <router-link :to="{ name: 'byIngredient' }"
                class="flex items-center px-2 transition-colors hover:bg-purple-100">
                Meals by Ingredient
            </router-link>
        </div>
    </header>
</template>