import router from '@/router';

const { WebApp } = window.Telegram;

WebApp.BackButton.show();
WebApp.BackButton.onClick(() => {
  router.back();
});

console.log(WebApp);
