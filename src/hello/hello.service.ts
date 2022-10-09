import { Injectable } from '@nestjs/common';

@Injectable()
export class HelloService {
  public getHelloWorld(): object {
    return {
      message: 'Hello world!',
      name: 'Hansel',
    };
  }
}
