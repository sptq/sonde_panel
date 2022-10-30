import { Injectable } from '@nestjs/common';
import { Config, JsonDB } from "node-json-db";
import { join } from "path";
import { JwtService } from "@nestjs/jwt";
import { JwtPayload } from "./jwtPayload.interface";

@Injectable()
export class AuthService {

  private db: JsonDB;

  constructor(
    private readonly jwtService: JwtService,
  ) {
    const pathToDB = join(__dirname, '../../', 'tmp')
    this.db = new JsonDB(new Config(pathToDB+"/users.json", true, true, '/'));
  }

  async validateUser (username: string, password: string): Promise<any> {
    const users = await this.db.getData('/users');
    const user = users.find((user: any) => user.username === username);

    if (user && user.password === password) {

      const payload : JwtPayload = { username: user.username, id: user.userId, email: user.email };
      const accessToken = this.jwtService.sign(payload);

      return {accessToken};
    }

    return null;
  }

  async getUser (username: string): Promise<any> {
    const users = await this.db.getData('/users');
    const user = users.find((user: any) => user.username === username);

    if (user) {
      return user;
    }

    return null;
  }

}
