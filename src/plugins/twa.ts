import WebApp from '@twa-dev/sdk';
import router from '@/router';

const isWebApp = !!WebApp.initData;
let isExpanding = false;

try {
  WebApp.ready();
  WebApp.isClosingConfirmationEnabled = true;
  WebApp.expand();
  WebApp.setBackgroundColor('#19191e');
  WebApp.onEvent('viewportChanged', ({ isStateStable }) => {
    if (isExpanding || !isStateStable) return;
    isExpanding = true;
    window.requestAnimationFrame(() => {
      !WebApp.isExpanded && WebApp.expand();
      isExpanding = false;
    });
  });
  WebApp.setHeaderColor('#19191e');
} catch (error) {
  console.error('WebApp SDK is not available');
}

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

export function closeWebApp() {
  if (!isWebApp) return;
  WebApp.close();
}
