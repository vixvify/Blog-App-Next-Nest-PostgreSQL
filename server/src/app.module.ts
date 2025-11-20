import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { DataModule } from './data/data.module';

@Module({
  imports: [PrismaModule, DataModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
