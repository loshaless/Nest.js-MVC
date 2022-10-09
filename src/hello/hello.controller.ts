import { Controller, Get, Render } from '@nestjs/common';
import { HelloService } from './hello.service';

@Controller()
export class HelloController {
  constructor(private readonly helloService: HelloService) {}

  @Get()
  @Render('home')
  public home(): object {
    return this.helloService.getHelloWorld();
  }
}
