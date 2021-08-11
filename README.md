# [Backstage](https://backstage.io)

## What is Backstage?

Backstage is a Spotify open-source project that is designed to be an all in one stop for managing software. Developers and Managers can go to Backstage and quickly find software and documentation for their projects. The main features are [Software Catalog](https://backstage.io/docs/features/software-catalog/software-catalog-overview), [Software Templates](https://backstage.io/docs/features/software-templates/software-templates-index), and [TechDocs](https://backstage.io/docs/features/techdocs/techdocs-overview). There are also community plugins for other great features and integrations.

## Our Deployment

backstage-staging.internal.lead.prod.liatr.io

For Liatrio purporses, we created our own custom internal instance of Backstage. The Service Catalog is filled with important Github Repos, TechDocs integration is 



## Local Development

### Install Depdencies

`yarn install --frozen-lockfile`

### Run App Locally

`yarn dev`

### Build and Serve Project

1. `yarn build`
2. `node packages/backend --config app-config.yaml`

### Build and Run Docker container

If using Docker, create an `.env` file with the following contents:

> The Docker container will serve both frontend & backend so we will need to configure the url accordingly.
```
APP_CONFIG_app_baseUrl=http://localhost:7000
APP_CONFIG_backend_baseUrl=http://localhost:7000
APP_CONFIG_backend_cors_origin=http://localhost:7000
```

1. `yarn docker:build`
2. `yarn docker:run`
