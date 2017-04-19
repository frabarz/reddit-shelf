# Shelf for reddit

A modular theme for subreddits.

This theme contains elements inpired by a few other subreddits, along with some things made on the way.

Feel free to fork it and modify it however you want.

The `/styles/drrp` folder contains elements made specifically for a subreddit I manage, so you can delete it if you want to work with this stylesheet.
Remember to remove their references in `/styles/build.scss` too.

## Development

This repo is preconfigured to work with Node.js, but you can use your own. The files are ready to be compiled.

The first time you want to run the node environment, you will need to download some dependencies, so run `npm install`.

To start the environment, run `npm run dev`, and your browser should open. Any changes made on the files should appear instatly on the browser.

Currently browsersync doesn't allow login on reddit through proxy, so for now you only can see the unlogged view.

The development view sets an environment variable `$ENV` in the code. You can use this to show images while editing on local and use the `%%name%%` tags for reddit on the final build. You can check the file `/styles/drrp/_urls.scss` for an example.

## Final CSS

To build the definitive CSS, run on the console `npm run build`. This will create the file `/build/build.css`. Copy its contents to the textarea of your subreddit stylesheet config screen and Previsualize it.
