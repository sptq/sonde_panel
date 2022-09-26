module.exports = {
  apps : [{
    script: 'dist/main.js',
    watch: false,
    env: {
      "NODE_ENV": "production",
      "LAN": "51.3678",
      "LON": "20.2951",
      "NUMBERS_OF_SDRS": 4,
    }
  }]
};