import { Injectable } from '@nestjs/common';
import * as fs from 'node:fs';
import * as path from 'node:path';

const filename = 'myFile.json';
const filePath = path.join(__dirname, '..', 'public/data', filename);

@Injectable()
export class AppService {
  async cronJob(): Promise<string> {
    const myFile = fs.readFileSync(filePath, 'utf-8');
    const { data } = JSON.parse(myFile.toString());

    fs.writeFileSync(
      filePath,
      JSON.stringify({
        data: [
          ...data,
          {
            date: new Date().toLocaleString(undefined, {
              timeZoneName: 'long',
            }),
          },
        ],
      }),
    );

    return 'Success';
  }

  async getFile(): Promise<string> {
    const myFile = fs.readFileSync(filePath, 'utf-8');
    return myFile.toString();
  }
}
