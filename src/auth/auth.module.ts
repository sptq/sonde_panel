import { Module } from '@nestjs/common';
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";

import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { LocalStrategy } from "./local.strategy";
import { JwtStrategy } from "./jwt.strategy";

import config from "../app.configuration";

@Module({
  controllers: [AuthController],
  imports: [
    PassportModule,
    JwtModule.register({
      secret: config.JWT_SECRET,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy]
})
export class AuthModule {}
