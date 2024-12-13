<script setup>
import Hero from "../components/Hero.vue";
import HomeCard from "../components/HomeCard.vue";
import JobList from "../components/JobLists.vue";
</script>

<template>
  <Hero />
  <HomeCard />
  <JobList :limit="3" :show-button="true" />
</template>
