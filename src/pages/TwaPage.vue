<script setup lang="ts">
import { onMounted, onBeforeUnmount } from 'vue';
import WebApp from '@twa-dev/sdk';
import { showBackButton, hideBackButton, showMainButton, hideMainButton } from '@/plugins/twa';

function showWebAppAlert() {
  WebApp.showAlert('Main Button was clicked');
}

onMounted(() => {
  showBackButton();
  showMainButton(showWebAppAlert);
});
onBeforeUnmount(() => {
  hideBackButton();
  hideMainButton(showWebAppAlert);
});
</script>

<template>TWA</template>
