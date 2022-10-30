import { NestFactory, Reflector } from "@nestjs/core";
import { AppModule } from './app.module';
import {JwtAuthGuard} from './auth/jwt-auth.guard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const reflector = app.get<Reflector>(Reflector);

  app.setGlobalPrefix('api');
  app.enableCors();
  app.useGlobalGuards(new JwtAuthGuard(reflector));
  await app.listen(3000);
}
bootstrap();
