import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GirlModule } from './girl/girl.module';

@Module({
  imports: [GirlModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
