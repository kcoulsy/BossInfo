This project was bootstrapped with [Create Next App](https://github.com/segmentio/create-next-app).

Find the most recent version of this guide at [here](https://github.com/segmentio/create-next-app/blob/master/lib/templates/default/README.md). And check out [Next.js repo](https://github.com/zeit/next.js) for the most up-to-date info.

## Table of Contents

- [Questions? Feedback?](#questions-feedback)
- [Folder Structure](#folder-structure)
- [Available Scripts](#available-scripts)
  - [npm run dev](#npm-run-dev)
  - [npm run build](#npm-run-build)
  - [npm run start](#npm-run-start)
- [Fetching Data](#fetching-data)


## Folder Structure

Our project uses [atomic design file structure](http://bradfrost.com/blog/post/atomic-web-design/), it should look something like:

```
.
├── README.md
├── components
│   ├── atoms
│   │     └── componentname
│   │          ├── index.js
│   │          ├── component.js
│   │          ├── component-styles.js
│   │          └── component.test.js
│   ├── molecules
│   │     └── componentname
│   │          ├── index.js
│   │          ├── component.js
│   │          ├── component-styles.js
│   │          └── component.test.js
│   ├── organisms
│   │     └── componentname
│   │          ├── index.js
│   │          ├── component.js
│   │          ├── component-styles.js
│   │          └── component.test.js
│   ├── templates
│   │     └── componentname
│   │          ├── index.js
│   │          ├── component.js
│   │          ├── component-styles.js
│   │          └── component.test.js
│   └── pages
│         └── componentname
│              ├── index.js
│              ├── component.js
│              ├── component-styles.js
│              └── component.test.js
├── next.config.js
├── node_modules
│   ├── [...]
├── package.json
├── pages
│   └── index.js
├── static
│   └── favicon.ico
└── yarn.lock
```

Routing in Next.js is based on the file system, so `./pages/index.js` maps to the `/` route and
`./pages/about.js` would map to `/about`.

The `./static` directory maps to `/static` in the `next` server, so you can put all your
other static resources like images or compiled CSS in there.

Out of the box, we get:

- Automatic transpilation and bundling (with webpack and babel)
- Hot code reloading
- Server rendering and indexing of `./pages`
- Static file serving. `./static/` is mapped to `/static/`

Read more about [Next's Routing](https://github.com/zeit/next.js#routing)

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any errors in the console.

### `npm run build`

Builds the app for production to the `.next` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run start`

Starts the application in production mode.
The application should be compiled with \`next build\` first.

See the section in Next docs about [deployment](https://github.com/zeit/next.js/wiki/Deployment) for more information.

## Fetching Data

You can fetch data in `pages` components using `getInitialProps` like this:

### `./pages/stars.js`

```jsx
const Page = props => <div>Next stars: {props.stars}</div>

Page.getInitialProps = async ({ req }) => {
  const res = await fetch('https://api.github.com/repos/zeit/next.js')
  const json = await res.json()
  const stars = json.stargazers_count
  return { stars }
}

export default Page
```

For the initial page load, `getInitialProps` will execute on the server only. `getInitialProps` will only be executed on the client when navigating to a different route via the `Link` component or using the routing APIs.

_Note: `getInitialProps` can **not** be used in children components. Only in `pages`._

Read more about [fetching data and the component lifecycle](https://github.com/zeit/next.js#fetching-data-and-component-lifecycle)
