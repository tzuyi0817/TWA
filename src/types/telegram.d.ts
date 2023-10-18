declare namespace TelegramWebApps {
  interface SDK {
    WebApp: WebApp;
  }

  type EventType = 'themeChanged' | 'viewportChanged' | 'mainButtonClicked' | 'backButtonClicked';

  interface WebApp {
    initData: string;
    initDataUnsafe: WebAppInitData;
    colorScheme: 'light' | 'dark';
    themeParams: ThemeParams;
    isExpanded: boolean;
    viewportHeight: number;
    viewportStableHeight: number;
    MainButton: MainButton;
    BackButton: BackButton;
    onEvent(eventType: EventType, eventHandler: Function): void;
    offEvent(eventType: EventType, eventHandler: Function): void;
    sendData(data): void;
    ready(): void;
    expand(): void;
    close(): void;
  }

  interface ThemeParams {
    bg_color?: string;
    text_color?: string;
    hint_color?: string;
    link_color?: string;
    button_color?: string;
    button_text_color?: string;
  }

  interface WebAppInitData {
    query_id?: string;
    user?: WebAppUser;
    receiver?: WebAppUser;
    start_param?: string;
    auth_date?: number;
    hash?: string;
  }

  interface WebAppUser {
    id?: number;
    is_bot: boolean;
    first_name: string;
    last_name?: string;
    usernames?: string;
    language_code?: string;
    photo_url?: string;
  }

  interface MainButton {
    text: string;
    color: string;
    textColor: string;
    isVisible: boolean;
    isActive: boolean;
    isProgressVisible: boolean;
    setText(text: string): MainButton;
    onClick(callback: Function): MainButton;
    show(): MainButton;
    hide(): MainButton;
    enable(): MainButton;
    disable(): MainButton;
    showProgress(leaveActive: boolean): MainButton;
    hideProgress(): MainButton;
    setParams(params: MainButtonParams): MainButton;
  }

  interface MainButtonParams {
    text?: string;
    color?: string;
    text_color?: string;
    is_active?: boolean;
    is_visible?: boolean;
  }

  interface BackButton {
    isVisible: boolean;
    show(): BackButton;
    hide(): BackButton;
    onClick(callback: Function): BackButton;
    offClick(callback: Function): BackButton;
  }
}

declare interface Window {
  Telegram: TelegramWebApps.SDK;
}
