---
title: Getting Started with Next.js
author: Doheon Kim
pubDatetime: 2026-02-15T12:00:00Z
featured: false
draft: false
tags:
  - nextjs
  - react
  - tutorial
description: A practical guide to setting up your first Next.js project, covering the basics of pages, routing, and static generation.
---

Next.js is a powerful React framework that makes building web applications straightforward. In this post, I'll walk through some of the core concepts that make Next.js great.

## Why Next.js?

Next.js provides several features out of the box that would take significant effort to set up manually:

- **File-based routing** - Create a file in `pages/`, and it becomes a route
- **Static Generation (SSG)** - Pre-render pages at build time for blazing fast performance
- **Server-Side Rendering (SSR)** - Render pages on each request when you need fresh data
- **API Routes** - Build your backend API right alongside your frontend
- **Built-in CSS support** - Use CSS Modules, Tailwind CSS, or any styling solution

## Creating a New Project

Getting started is as simple as running:

```bash
npx create-next-app@latest my-app
cd my-app
npm run dev
```

This gives you a fully configured project with TypeScript, ESLint, and Tailwind CSS.

## File-Based Routing

One of the best features of Next.js is its file-based router. The file structure maps directly to URL paths:

```
pages/
  index.js      → /
  about.js      → /about
  blog/
    index.js    → /blog
    [slug].js   → /blog/any-post-slug
```

## Static Generation with `getStaticProps`

For content that doesn't change frequently (like blog posts), static generation is ideal:

```javascript
export async function getStaticProps() {
  const data = await fetchSomeData();
  return {
    props: { data },
  };
}
```

The page is generated at build time and served as static HTML - fast and SEO-friendly.

## Dynamic Routes

For pages like blog posts where you need a unique page per item, use dynamic routes with `getStaticPaths`:

```javascript
export async function getStaticPaths() {
  const slugs = await getAllSlugs();
  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}
```

## Conclusion

Next.js removes a lot of the boilerplate involved in building React applications. Whether you're building a simple blog or a complex web app, it's a solid choice.

Give it a try and see how it fits your workflow!
