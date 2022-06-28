# website.dev

[![Netlify Status](https://api.netlify.com/api/v1/badges/93ddd4f7-c37d-4603-9c4e-a2213bb6f95e/deploy-status)](https://app.netlify.com/sites/romeo-dev/deploys)

This is kind of like a theme for a personal website of somebody that writes code. It's built using [astro](https://astro.build/), [react](https://reactjs.org/) and [tailwind](https://tailwindui.com/) and deployed on [netlify](https://netlify.com/).

I've built it to use it on [romeo.dev](https://romeo.dev/)

If you want to use it, use it. Consider leaving the links in the footer so others can find their way around here and use it too.

## 🚀 Project Structure

Everything you should care about should be inside the `src > content` folder. All the text is generated as static pages from `.md` files:

- the about page is generated from `src > content > about.md`
- the posts are create from the files inside `src > content > posts` - the name of the file will become the `url` of the post

```
/
├── src/
│   └── content/
│       └── posts/
│           └── post-1.md
│           └── post-2.md
│       └── about.md
... other stuff
```

If you want to change other stuff, feel free to do it.

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
