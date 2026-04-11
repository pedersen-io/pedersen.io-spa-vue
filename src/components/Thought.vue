<template>
  <article class="thought-item">
    <div class="thought-header">
      <img v-if="iconUrl" :src="iconUrl" alt="icon" class="thought-icon" />
      <div>
        <strong>{{ title }}</strong>
        <div>{{ subtitle }}</div>
      </div>
    </div>

    <p>{{ post }}</p>

    <button type="button" class="primary-button" @click="showDialog = true">
      Read more
    </button>

    <div v-if="showDialog" class="overlay" @click.self="showDialog = false">
      <div class="dialog-panel">
        <h3>{{ title }}</h3>
        <p>{{ post }}</p>
        <button type="button" @click="showDialog = false">Close</button>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { computed, defineOptions, ref } from "vue";

defineOptions({
  name: "AppThought",
});

const props = defineProps<{
  title: string;
  subtitle: string;
  post: string;
  icon: string;
}>();

const showDialog = ref(false);
const iconUrl = computed(() => require(`@/assets/icons/${props.icon}.svg`));
</script>

<style>
.dialog-panel {
  background: #ffffff;
  color: #002878;
  border-radius: 16px;
  padding: 24px;
  max-width: 520px;
  margin: 10vh auto;
}

.primary-button {
  border: none;
  background: #ffc528;
  color: #002878;
  padding: 10px 16px;
  border-radius: 10px;
  cursor: pointer;
}

.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  display: grid;
  place-items: center;
}
</style>
