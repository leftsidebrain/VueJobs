<script setup>
import { ref, defineProps, onMounted, reactive } from "vue";
import axios from "axios";
import JobList from "./JobList.vue";
import { RouterLink } from "vue-router";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";

defineProps({
  limit: Number,
  showButton: {
    type: Boolean,
    default: false,
  },
});

const state = reactive({
  jobs: [],
  loading: true,
});

onMounted(async () => {
  try {
    const res = await axios.get("/api/jobs");
    state.jobs = res.data;
  } catch (error) {
    console.log(error);
  } finally {
    state.loading = false;
  }
});
</script>

<template>
  <section class="bg-blue-100 py-10 px-4">
    <div class="container-xl lg:container m-auto">
      <h2 class="text-2xl font-bold text-green-500 mb-6 text-center">Browse Jobs</h2>

      <div v-if="state.loading" class="text-center text-gray-600 py-6">
        <PulseLoader />
      </div>
      <div v-else class="grid grid-cols-1 gap-6 md:grid-cols-3">
        <JobList v-for="job in state.jobs.slice(0, limit || state.jobs.length)" :key="job.id" :job="job" />
      </div>
    </div>
  </section>
  <section v-if="showButton" class="m-auto max-w-lg my-10 px-6">
    <RouterLink to="/jobs" class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700">View All Jobs</RouterLink>
  </section>
</template>
