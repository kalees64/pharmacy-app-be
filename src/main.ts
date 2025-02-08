import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: ['http://localhost:4200', 'https://your-frontend-app.com'],
    methods: 'GET,POST,PUT,PATCH,DELETE',
    allowedHeaders: 'Content-Type, Authorization',
    credentials: true,
  });

  await app.listen(process.env.PORT ?? 3000, () => {
    console.debug(
      '\x1b[35m',
      `[Nest] - \t ${new Date().toLocaleString()} \t LOG : Server is running on http://localhost:${process.env.PORT ?? 3000}`,
    );
  });
}
bootstrap();
