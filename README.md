# Create Alpine App

![Create Alpine App Screenshot](https://cdn.devdojo.com/images/june2023/create-alpine-app.png)

Create an [Alpine](https://alpinejs.dev) and [Tailwind](https://tailwindcss.com) app with a single command. Similar to how [React](https://react.dev/) has [Create React App](https://create-react-app.dev/), this is the equivalent to get you up and running with a simple static Alpine application.

## Installation

Install and get running with the following commands:

```bash
npx create-alpine-app my-app
cd my-app
npm run dev
```

## Usage

Now, you can edit the `index.html` file in the root directory. Alpine is loaded in the `index.js`, and Tailwind is loaded in the `index.css` file. Hot Reloading Enabled 🔥

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