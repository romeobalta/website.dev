<p align="center">
  <br/>
  <code>website.dev</code> is a static website generator built on top of Next.js.
  <br/>
  Use <code>.mdx</code> files and your favourite version control system as your CMS.
  <br/><br/>
  <a href="https://romeo.dev">Live example</a>
  <br/><br/>
</p>

## Into

`website.dev` is a static website generator built on top of Next.js.

## Features

- [x] Dynamic router that generates article and category paths based on `.mdx` files
  - [x] Automatic sitemap generation
- [x] Control which articles get published using the `publishedAt` front matter field
- [x] CLI tool that allows to easily create and publish articles
  - [x] Pre-commit git hook that automatically sets `updatedAt` front matter on modified articles
- [x] Built with `shadcn/ui` for integrated a11y
- [x] SEO stuff like `Opengraph` and `JSON-LD`

## Contents

- [How to run](#how-to-run)
- [webie](#webie)
  - [Create article](#create-article)
  - [Publish article(s)](#publish-articles)
  - [Update article(s)](#update-articles)
- [Markdown](#markdown)

## How to run

Clone the repo:

```bash
git clone git@github.com:romeobalta/website.dev.git
```

Install packages:

```bash
bun install
```

Run in dev mode:

```bash
bun dev
```

> [!TIP]
> You can use `IS_DEMO=true bun dev` to build the app using the demo content.

## webie

`webie` is the CLI tools that simplifies repetitive tasks.

```bash
bun webie
# or
bun w
```

### Create article

You can use `webie` to run the article creation wizard. This has the benefit of generating a slug for your article based on the title and filling in the boilerplate front matter. If you set your editor config values, it will automatically open the article in your preferred editor.

```bash
bun webie create
# or
bun webie c
```

#### Example create

![Creating an article](https://github.com/romeobalta/website.dev/blob/main/docs/gifs/webie-create.gif)

### Publish article(s)

You can also use `webie` to run the article publishing wizard. It allows you to select one or multiple articles. The command automatically sets the `publishedAt` front matter for all the articles to `now`.

```bash
bun webie publish
# or
bun webie p
```

#### Example publish

![Publishing an article](https://github.com/romeobalta/website.dev/blob/main/docs/gifs/webie-publish.gif)

### Update article(s)

This tool automatically sets the `updatedAt` front matter of staged articles to `now`.

> [!NOTE]
> This is automatically called as a `pre-commit` hook so you don't have to call it manually.

```bash
bun webie update
# or
bun webie u
```

#### Example update

![Updating articles](https://github.com/romeobalta/website.dev/blob/main/docs/gifs/webie-update.gif)

## Markdown support
