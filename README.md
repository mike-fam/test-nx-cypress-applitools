# Applitools with Cypress in an Nx Workspace – POC

This is an [Nx workspace](https://nx.dev).

[Learn more about this workspace setup and its capabilities](https://nx.dev/getting-started/tutorials/angular-monorepo-tutorial?utm_source=nx_project&amp;utm_medium=readme&amp;utm_campaign=nx_projects) or run `npx nx graph` to visually explore what was created.

## Run tasks

To run the dev server for the sample app, use:

```sh
npx nx serve demo-app
```

To create a production bundle:

```sh
npx nx build demo-app
```

To see all available targets to run for a project, run:

```sh
npx nx show project demo-app
```

These targets are either [inferred automatically](https://nx.dev/concepts/inferred-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) or defined in the `project.json` or `package.json` files.

[More about running tasks in the docs &raquo;](https://nx.dev/features/run-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Libraries
Libraries are in the `libs` directory. There's only 1 library called `ui-shared` in this repo, for the sake of simplicity.

### Running component testing in libraries
Create a file called `.env.component-test` in `libs/ui-shared`. This is a regular `.env` file used to define environment variables. The content of the file can be as follows. 

```
APPLITOOLS_API_KEY=<your-key>
APPLITOOLS_SERVER_URL=<your-server-url>
```

These environment variables will be used when running the tests. Alternatively, you can set environment variables the traditional way, using `export`.

Once the `.env.component-test` file is set up, run

```sh
npx nx component-test ui-shared
```

to kick off Cypress and run the tests.


## Useful links

Learn more:

- [Learn more about this workspace setup](https://nx.dev/getting-started/tutorials/angular-monorepo-tutorial?utm_source=nx_project&amp;utm_medium=readme&amp;utm_campaign=nx_projects)
- [Learn about Nx on CI](https://nx.dev/ci/intro/ci-with-nx?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Releasing Packages with Nx release](https://nx.dev/features/manage-releases?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [What are Nx plugins?](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

And join the Nx community:
- [Discord](https://go.nx.dev/community)
- [Follow us on X](https://twitter.com/nxdevtools) or [LinkedIn](https://www.linkedin.com/company/nrwl)
- [Our Youtube channel](https://www.youtube.com/@nxdevtools)
- [Our blog](https://nx.dev/blog?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
