import { Controller, Post, UseGuards, Request, Get } from "@nestjs/common";
import { AuthService } from './auth.service';
import { LocalAuthGuard } from "./local-auth.guard";
import { JwtAuthGuard } from "./jwt-auth.guard";
import { Public } from "../decorators/public.decorator";
import { GetUser } from "../decorators/get-user.decorator";

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return req.user;
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@GetUser() user) {
    return this.authService.getUser(user.username);
  }
}
