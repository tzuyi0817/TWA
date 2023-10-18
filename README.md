# TWA

Telegram Web App example

![CI](https://github.com/tzuyi0817/TWA/actions/workflows/ci.yml/badge.svg)
![CD](https://github.com/tzuyi0817/TWA/actions/workflows/cd.yml/badge.svg)

## Import Web Pages Into Telegram Bot

- Telegram to join BotFather
- Enter `/newbot` and follow the instructions to create a robot
- Enter `/mybots` and select the robot you just created
- Select `Bot Settings > Menu Button`, then paste the web page you just created and enter the button title
- You should be able to see the button when you join the robot you just created. After clicking it, you will see the web page you just created.

## Project Files

```text
src/
├── __tests__/
│   ├── __mocks__/
│   ├── setup/
│   │   └── unitTest.ts
│   ├── e2e/*
│   └── unit/*
├── apis/*
├── assets/*
│   └── images/
│       └── svgIcons
│          └── vue.svg
├── components/
│   ├── common/
│   │   └── SvgIcon.vue
│   └── indexPage/
│       └── HelloWorld.vue
├── configs/*
├── hooks/*
├── locales/
│   ├── en-US.json
│   └── zh-CN.json
├── mocks/
│   ├── handlers/*
│   │   ├── apis/*
│   │   └── index.ts
│   │── browser.ts
│   └── server.ts
├── pages/
│   └── IndexPage.vue
├── plugins/
│   └── i18n.ts
├── router/
│   └── index.ts
├── stores/
│   ├── modules
│   │   └── config.ts
│   └── index.ts
├── styles/
│   ├── common/
|   │   ├── all.postcss
|   │   └── button.postcss
│   ├── index.postcss
│   └── tailwind.postcss
├── types/*
├── utils/*
├── App.vue
├── vite-env.d.ts
└── main.ts
```
