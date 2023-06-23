# Create Alpine App

Create an Alpine application in a single command.

```bash
npx create-alpine-app my-app
```

![Create Alpine App Screenshot](https://cdn.devdojo.com/images/june2023/create-react-app.jpeg)

The **Create Alpine App** package is similar to [Create React App](https://create-react-app.dev/), except it's for **Alpine**. This is a simple starter application that creates a blank [Alpine](https://alpinejs.dev) and [Tailwind](https://tailwindcss.com) app using [Vite](https://vitejs.dev/) bundler.

## Installation

Install and get running with the following commands:

```bash
npx create-alpine-app my-app
cd my-app
npm run dev
```

## Usage

Now, you can edit the `index.html` file in the root directory. Alpine is loaded in the `index.js`, and Tailwind is loaded in the `index.css` file. Hot Reloading Enabled 🔥

## Hot Reloading

You can update the directory or file type that you want the watcher to look for inside of the **handleHotUpdate** method inside of **alpine-vite-plugin.js**.

## Building for production

If you want to distribute this application, you can run:

```
npm run build
```

And you're application will be built inside of the `/dist` folder.

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)