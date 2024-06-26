import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';

import { CommandHandlers } from './commands';
import { HealthResolver } from './health.resolver';

@Module({
  imports: [TerminusModule, HttpModule],
  providers: [...CommandHandlers, HealthResolver],
})
export class HealthModule {}
