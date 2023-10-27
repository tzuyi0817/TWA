import WebApp from '@twa-dev/sdk';
import router from '@/router';

const isWebApp = !!WebApp.initData;

WebApp.ready();
WebApp.isClosingConfirmationEnabled = true;

function redirectBack() {
  router.back();
}

export function showMainButton(onClick: () => void) {
  if (!isWebApp) return;
  WebApp.MainButton.show();
  WebApp.MainButton.onClick(onClick);
}

export function hideMainButton(onClick: () => void) {
  if (!isWebApp) return;
  WebApp.MainButton.hide();
  WebApp.MainButton.offClick(onClick);
}

export function showBackButton(onClick = redirectBack) {
  if (!isWebApp) return;
  WebApp.BackButton.show();
  WebApp.BackButton.onClick(onClick);
}

export function hideBackButton(onClick = redirectBack) {
  if (!isWebApp) return;
  WebApp.BackButton.hide();
  WebApp.BackButton.offClick(onClick);
}
