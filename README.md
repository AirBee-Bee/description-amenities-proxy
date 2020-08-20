# Air Bee & Bee | Proxy Server

> This repo contains a proxy server for 4 services, which together render the Air Bee & Bee listing page.

## Related Projects

  - https://github.com/AirBee-Bee/photo-carousel
  - https://github.com/AirBee-Bee/description-amenities
  - https://github.com/AirBee-Bee/checkin-checkout
  - https://github.com/AirBee-Bee/reviews

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> This repo relies on 4 services. Use the links above for the related projects to view usage instructions for each service. Each service will need to be cloned to your local computer, dependencies installed, databases setup and seeded, and servers started.

> The below instructions are for the proxy directory only. From within the root directory for the proxy server, run the following commands:

```sh
npm install
npm run start
```

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- cors 2.8.5
- express 4.17.1
- nodemon 2.0.4

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

