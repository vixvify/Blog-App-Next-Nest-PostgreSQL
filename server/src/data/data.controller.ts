import { Controller } from '@nestjs/common';
import { Get, Post, Body } from '@nestjs/common';
import { DataService } from './data.service';

@Controller('data')
export class DataController {
  constructor(private dataservice: DataService) {}
  @Get()
  getData() {
    return this.dataservice.getData();
  }
}
