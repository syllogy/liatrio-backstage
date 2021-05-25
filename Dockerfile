# syntax=docker/dockerfile:1.0.0-experimental
# Stage 1 - Create yarn install skeleton layer
FROM node:14-buster-slim AS packages

WORKDIR /app
COPY package.json yarn.lock ./

COPY packages/ packages/
#COPY plugins plugins

RUN find packages \! -name "package.json" -mindepth 2 -maxdepth 2 -exec rm -rf {} \+

# Stage 2 - Install dependencies and build packages
FROM node:14-buster-slim AS build

WORKDIR /app
COPY --from=packages /app .

RUN --mount=type=cache,target=/root/.yarn YARN_CACHE_FOLDER=/root/.yarn yarn install --frozen-lockfile --network-timeout 600000

COPY . .

RUN yarn tsc
RUN yarn --cwd packages/backend backstage-cli backend:bundle --build-dependencies

# Stage 3 - Build the actual backend image and install production dependencies
FROM node:14-buster-slim

WORKDIR /app

RUN apt update && \
    apt install -y curl gcc build-essential zlib1g-dev libncurses5-dev libgdbm-dev libnss3-dev libssl-dev libsqlite3-dev libreadline-dev libffi-dev libbz2-dev

RUN cd /tmp && curl -O https://www.python.org/ftp/python/3.8.2/Python-3.8.2.tar.xz && \
    tar -xvf Python-3.8.2.tar.xz && \
    cd Python-3.8.2 && \
    ./configure --enable-optimizations && \
    make -j 4 && \
    make altinstall

RUN pip3.8 install cookiecutter mkdocs mkdocs-techdocs-core Markdown==3.2.2

# Copy the install dependencies from the build stage and context
COPY --from=build /app/yarn.lock /app/package.json /app/packages/backend/dist/skeleton.tar.gz ./
RUN tar xzf skeleton.tar.gz && rm skeleton.tar.gz

RUN --mount=type=cache,target=/root/.yarn YARN_CACHE_FOLDER=/root/.yarn yarn install --frozen-lockfile --production --network-timeout 600000

# Copy the built packages from the build stage
COPY --from=build /app/packages/backend/dist/bundle.tar.gz .
RUN tar xzf bundle.tar.gz && rm bundle.tar.gz

# Copy any other files that we need at runtime
COPY app-config* ./

CMD ["node", "packages/backend", "--config", "app-config.yaml"]
