# Generic Component

This is a fairly minimal component boilerplate who aims to allow for quick iteration and automatically up-to-date documentation with support for Babel stage 0 and JSX. Uses Rollup to pack the component. Published modules only includes the build. Iterate with the doc pages, then automatically update the docs on publish.

To get started,

- Edit package.json and changes all the relevant variables
- Edit docs/package.json and change "homepage" to the GitHub project page URL
- `yarn && cd docs && yarn && cd ..`
- `yarn run start` -- open your browser to localhost:3000
  - You'll see the documentation page. You can edit the documentation by editing `docs/src/App.js` and relevant files
  - Making changes to the docs and to the component will automatically refresh the docs
  - I outlined a nice way to include very basic and relatively unstyled examples, but you can do whatever you want -- the docs folder is just a create-react-app. I had to eject so I could use raw-loader to pull in the text of examples. I think it's worth it.
  - I left the jest stuff in the docs, but never use it. You can if you want. It might actually be a decent place to test the component.
- Be sure to change the version in package.json!
  - The version in docs/package.json doesn't matter
- `yarn publish`
  - Publishes the component
  - (see .npmignore) only includes build (`lib`)
  - Updates the docs on the gh-pages branch automatically
