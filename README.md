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

```bash
bun webie create
# or
bun webie c
```

### Publish article(s)

```bash
bun webie publish
# or
bun webie p
```

### Update article(s)

> [!NOTE]
> This is automatically called as a `pre-commit` hook

```bash
bun webie update
# or
bun webie u
```

## Markdown
