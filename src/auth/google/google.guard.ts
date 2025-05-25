import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

// Create a custom guard that uses the 'google' strategy
@Injectable()
export class GoogleAuthGuard extends AuthGuard('google') {}