import { Injectable } from '@nestjs/common';
import * as fs from "fs/promises";
import config from "../app.configuration";

@Injectable()
export class SdrService {

  componentToHex(c) {
    let hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }

  rgbToHex(r, g, b) {
    return "#" + this.componentToHex(r) + this.componentToHex(g) + this.componentToHex(b);
  }

  getColor(number: number) {
    let r, g, b;
    if(number>99) number=99;
    if (number < 50) {
      // blue to green
      g = Math.floor(255 * (number / 50));
      b = 120;
      r = 0;

    } else {
      // green to yelow
      r = 255;
      g = Math.floor(255 * ((50-number%50) / 50));
      b = 0;
    }

    return {rgb: `rgb(${r},${g},${b})`, hex: this.rgbToHex(r,g,b)};
  }

  ord(string) {
    const str = string + ''
    const code = str.charCodeAt(0)
    if (code >= 0xD800 && code <= 0xDBFF) {
      const hi = code
      if (str.length === 1) {
        return code
      }
      const low = str.charCodeAt(1)
      return ((hi - 0xD800) * 0x400) + (low - 0xDC00) + 0x10000
    }
    if (code >= 0xDC00 && code <= 0xDFFF) {
      return code
    }

    return code < 255 ? code : 255;
  }

  buildConfigData(configData: Array<string>) {
    const freq = configData[0].split(";")[1];
    const ppm = configData[1].split(";")[1];
    const gain = configData[2].split(";")[1];

    return {
      freq,
      ppm,
      gain
    }
  }

  buildSdrPreviewData(data: Array<string>) {
    const rows_name = ['id', 'freq', 'deviation', 'noise', 'graph']
    let json = [];
    for (let i = 0; i < data.length; i++) {
      let splitRow = data[i].split(";");
      let row = {};
      for (let j = 0; j < splitRow.length-1; j++) {
        row[rows_name[j]] = splitRow[j];
      }

      row['deviation'] = parseInt(row['deviation']);

      let lastLine = splitRow[splitRow.length-1];
      row['noise'] = this.ord(lastLine[0]);
      row['graph'] = lastLine.replace('\r', '').split('').map((char) => this.getColor(this.ord(char)));

      json.push(row);
    }

    return json;
  }

  mapDataToJson(data: string) {
    const sdrBin = data.split("\n");
    const sdrConfig = this.buildConfigData(sdrBin.slice(0, 3));
    const sdrStatus = this.buildSdrPreviewData(sdrBin.slice(3, -1));

    return {
      sdrConfig,
      sdrStatus
    }

  }


  async getSDRStatus(sdrNumber: number) {
    try {
      const sdrData = await fs.readFile(config.SDR_FILE_PATH + '/sdr' + sdrNumber +'.bin', { encoding: 'utf8' });
      return this.mapDataToJson(sdrData);
    } catch (error) {
      console.log(error);
    }



  }
}
