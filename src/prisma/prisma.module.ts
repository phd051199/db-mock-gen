import { Global, Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';

import { PrismaService } from './prisma.service';
import { PrismaExceptionFilter } from './prisma-exception.filter';

@Global()
@Module({
  providers: [
    PrismaService,
    {
      provide: APP_FILTER,
      useClass: PrismaExceptionFilter,
    },
  ],
  exports: [PrismaService],
})
export class PrismaModule {}
