# [Backstage](https://backstage.io)

Internal Liatrio Backstage Portal

## Install Depdencies

`yarn install --frozen-lockfile`

## Environment Variables

In order to configure Github Authentication you will need to create a [Github OAuth App](https://docs.github.com/en/developers/apps/building-oauth-apps/creating-an-oauth-app).

Set them on your local machine if running on host:

```
export AUTH_GITHUB_CLIENT_ID=<client_id>
export AUTH_GITHUB_CLIENT_SECRET=<client_secret>
```

If using Docker, create an `.env` file with the following contents:

```
AUTH_GITHUB_CLIENT_ID=<client_id>
AUTH_GITHUB_CLIENT_SECRET=<client_secret>
```

## Run App Locally

`yarn dev`

## Build and Serve Project

1. `yarn build`
2. `node packages/backend --config app-config.yaml`

## Build and Run Docker container

1. `yarn docker:build`
2. `yarn docker:run`
