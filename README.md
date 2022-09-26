<p align="center">
  <img src="web/public/logo.jpg" width="200" alt="Nest Logo" />
</p>


  <p align="center">New Sonde Panel for <a href="https://github.com/sp9skp/spdxl">sp9skp/spdxl</a> app.</p>
    <p align="center">
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Before install

Install node.js v16

```
https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions
```

then install pm2
```
npm install pm2 -g
```


## Installation

```bash
npm install
npm run build 
cd web
npm install
npm run build
```

## Configuration
Edit file: ecosystem.config.js

```
module.exports = {
  apps : [{
    script: 'dist/main.js',
    watch: false,
    env: {
      "NODE_ENV": "production",
      "LAN": "51.3678", //set your lan
      "LON": "20.2951", //set your lon
      "NUMBERS_OF_SDRS": 4, //set number of sdrs
    }
  }]
};
```

## Start app

```bash
pm2 start ecosystem.config.js
```


App is on [MIT licensed](LICENSE).
