# [Backstage](https://backstage.io)

Internal Liatrio Backstage Portal

## Install Depdencies

`yarn install --frozen-lockfile`

## Environment Variables

If using Docker, create an `.env` file with the following contents:

> The Docker container will serve both frontend & backend so we will need to configure the url accordingly.

```
APP_CONFIG_app_baseUrl=http://localhost:7000
APP_CONFIG_backend_baseUrl=http://localhost:7000
APP_CONFIG_backend_cors_origin=http://localhost:7000
```

## Run App Locally

`yarn dev`

## Build and Serve Project

1. `yarn build`
2. `node packages/backend --config app-config.yaml`

## Build and Run Docker container

1. `yarn docker:build`
2. `yarn docker:run`
