## Storyblok React Email Tutorial

This repository is alinged with the tutorial to [build email templates using Stortblok and Next.js](https://www.storyblok.com/tp/building-email-templates-with-storyblok).

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Requirements

To use this project you have to have a Storyblok account. If you don't have one yet you can register at [Storyblok](https://www.storyblok.com), it's free.

## How to get started?

### 1. Clone the repo

```sh
  $ git clone https://github.com/storyblok/building-email-templates-tutorial
```

### 2. Install all dependecies 
```sh
$  yarn # or npm install
```

### 3. Adding the Access token
Create a new empty Space and exchange the preview token with your own in ```app/layout.js``` as well as in ```api/send/route.js```.

```js
storyblokInit({
  accessToken: "your-preview-token",
  // for spaces located in the US:
  // apiOptions: {
  //   region: "us",
  // },
  use: [apiPlugin],
  components,
});
```

### 4. Run your project
Set the preview domain in <strong>Storyblok</strong> to `http://localhost:3000/`

```sh
# to run in developer mode
$ yarn dev # or npm run dev
```

```sh
# to build your project
$ yarn build # or npm run build
```


## Resources

- [Building Email Templates with Storyblok](https://www.storyblok.com/tp/building-email-templates-with-storyblok)
- [Link to copy the space](https://app.storyblok.com/#!/build/295376)
- [Next.js docs](https://nextjs.org/docs/#setup)
- [Storyblok Next.js Ultimate Tutorial](https://www.storyblok.com/tp/nextjs-headless-cms-ultimate-tutorial)


