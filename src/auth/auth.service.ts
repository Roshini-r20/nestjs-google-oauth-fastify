import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  async validateOAuthLogin(profile: any): Promise<any> {
    // you can handle DB save here
    return profile;
  }
}