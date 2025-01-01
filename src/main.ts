import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'https://gson44.github.io', // or '*'
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
})
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

