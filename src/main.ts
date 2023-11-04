import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 公共前缀，大小写不敏感
  app.setGlobalPrefix('HongLangMan');
  await app.listen(3000);
}
bootstrap();
