const isProd = process.env.NODE_ENV === 'production';

const config = {
  LAN: 51.3678,
  LON: 20.2951,
  DB_FILE_PATH: isProd ? '/tmp/sonde.csv' : './demo_data/sonde.csv',
  NUMBERS_OF_SDRS: 1,
  SDR_FILE_PATH: isProd ? '/tmp' : './demo_data',
  NUMBERS_OF_CONFIGS: 1,
  CONFIG_FILE_PATH: isProd ? '/tmp' : './demo_data',
};

export default config;