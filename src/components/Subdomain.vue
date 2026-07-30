<template>
  <article class="card subdomain-card">
    <img :src="imageUrl" alt="Subdomain image" />
    <div>
      <h2>{{ name }}</h2>
      <p>{{ propMessage }}</p>
      <div class="subdomain-action">
        <a :href="destination" target="_blank" rel="noreferrer">Visit site</a>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { computed, defineProps, defineOptions } from "vue";

defineOptions({
  name: "AppSubdomain",
});

const props = defineProps<{
  propMessage: string;
  destination: string;
  imagefile: string;
  name: string;
}>();

const imageUrl = computed(() => require(`@/assets/${props.imagefile}`));
</script>

<style>
.subdomain-card {
  display: grid;
  gap: 14px;
}

.subdomain-card img {
  width: 100%;
  border-radius: 16px;
}

.subdomain-action a {
  color: #ffc528;
}
</style>
