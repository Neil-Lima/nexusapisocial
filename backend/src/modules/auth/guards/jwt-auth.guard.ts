/* eslint-disable prettier/prettier */
import { ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  canActivate(context: ExecutionContext) {
    return super.canActivate(context);
  }

  handleRequest(err: any, user: any, info: any, context: ExecutionContext) {
    if (err || !user) {
      throw new UnauthorizedException('Token inválido ou ausente');
    }
    return user;
  }

  getAuthenticateOptions(context: ExecutionContext) {
    return {};
  }

  logIn<TRequest extends { logIn: Function; }>(request: TRequest): Promise<void> {
    return request.logIn(request);
  }

  getRequest(context: ExecutionContext) {
    return context.switchToHttp().getRequest();
  }
}
