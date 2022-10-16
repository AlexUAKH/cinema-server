import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import helmet from 'helmet';
import { AppModule } from './app.module';

async function bootstrap() {
  try {
    const port = process.env.PORT || 5000;
    const app = await NestFactory.create(AppModule);
    app.enableCors();
    app.use(helmet());
    app.useGlobalPipes(
      new ValidationPipe({
        transform: true
      })
    );

    const config = new DocumentBuilder()
      .setTitle('Cinema tickets app')
      .setDescription('REST API documentation')
      .setVersion('1.1.0')
      .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api/docs', app, document);

    await app.listen(port, () => console.log(`Server runs on port: ${port}`));
  } catch (e) {
    console.log('my app error: ', e);
  }
}
bootstrap();
