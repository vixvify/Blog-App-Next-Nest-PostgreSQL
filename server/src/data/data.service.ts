import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { BlogDTO } from 'DTO/blog.dto';

@Injectable()
export class DataService {
  constructor(private prismaservice: PrismaService) {}

  async getData() {
    try {
      const data = await this.prismaservice.blog.findMany();
      return { status: 200, data };
    } catch (err) {
      return { status: 400, error: err };
    }
  }
  async createData(data: BlogDTO) {
    try {
      await this.prismaservice.blog.create({
        data: {
          title: data.title,
          content: data.content,
          author: data.author,
        },
      });
      return { status: 201, msg: 'Post Complete' };
    } catch (err) {
      return { status: 400, error: err };
    }
  }
}
