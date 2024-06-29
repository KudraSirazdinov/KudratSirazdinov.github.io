<script setup>


import VHeader from "./components/VHeader.vue";
import VFooter from "./components/VFooter.vue";
import VPromo from "./components/VPromo.vue";
import VClass from "./components/VClass.vue";
import VHistory from "./components/VHistory.vue";
import VPossibilities from "./components/VPossibilities.vue";
import VReviews from "./components/VReviews.vue";
import VIdea from "./components/VIdea.vue";
    components: { VIdea }
    components: { VReviews }
    components: { VPossibilities }
    components: { VHistory }
    components: { VClass }
    components: { VPromo }
    components: { VFooter } 
    components: { VHeader }
</script>

<template>
    <v-header/>
    <main>
        <v-promo/>
        <v-class/>
        <v-history/>
        <v-possibilities/>
        <v-idea/>
        <v-reviews/>
    </main>
    <v-footer/>
</template>

<style scoped>

</style>