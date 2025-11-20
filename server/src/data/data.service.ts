import { Injectable } from '@nestjs/common';

@Injectable()
export class DataService {
  getData() {
    return 'Hello from Nest.js';
  }
}
