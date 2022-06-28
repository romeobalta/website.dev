# website.dev

This is kind of like a theme for a personal website of a somebody that writes code. It's built using [astro](https://astro.build/), [react](https://reactjs.org/) and [tailwind](https://tailwindui.com/) and deployed on [netlify](https://netlify.com/).

If you want to use it, use it. Consider leaving the links in the footer so others can find it's source too.

## 🚀 Project Structure

```
/
├── src/
│   └── content/
│       └── posts/
│           └── post-1.md
│           └── post-2.md
│       └── about.md
...
```

Both the about text and the blog posts are built from `.md` files. The about page is generated from `src > content > about.md` and the posts are create from the files inside `src > content > posts`. Then name of the file will become the `url` of the post.

## 🧞 Commands

These are [astro](https://astro.build/)

All commands are run from the root of the project, from a terminal:

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Installs dependencies                        |
| `npm run dev`     | Starts local dev server at `localhost:3000`  |
| `npm run build`   | Build your production site to `./dist/`      |
| `npm run preview` | Preview your build locally, before deploying |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into their [Discord server](https://astro.build/chat).
