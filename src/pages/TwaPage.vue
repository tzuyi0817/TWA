<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import WebApp from '@twa-dev/sdk';
import { showBackButton, hideBackButton, showMainButton, hideMainButton } from '@/plugins/twa';

const initData = ref('');
const initDataUnsafe = ref();

function showWebAppAlert() {
  WebApp.showAlert('Main Button was clicked');
}

function setInitData() {
  initData.value = WebApp.initData;
  initDataUnsafe.value = WebApp.initDataUnsafe;
}

onMounted(() => {
  showBackButton();
  showMainButton(showWebAppAlert);
  setInitData();
});
onBeforeUnmount(() => {
  hideBackButton();
  hideMainButton(showWebAppAlert);
});
</script>

<template>
  <h1>TWA</h1>

  <article>
    <p>initData</p>
    {{ initData }}
  </article>

  <article>
    <p>initDataUnsafe</p>
    {{ initDataUnsafe }}
  </article>
</template>
