import { Controller } from '@nestjs/common';
import { Get, Post, Body } from '@nestjs/common';
import { DataService } from './data.service';
import { BlogDTO } from 'DTO/blog.dto';

@Controller('data')
export class DataController {
  constructor(private dataservice: DataService) {}
  @Get('getData')
  getData() {
    return this.dataservice.getData();
  }

  @Post('createData')
  createData(@Body() data: BlogDTO) {
    return this.dataservice.createData(data);
  }
}
