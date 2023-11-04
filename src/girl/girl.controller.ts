import { Controller, Get } from '@nestjs/common';
import { GirlService } from './girl.service';

@Controller('girl')
export class GirlController {
  // 这里的构造函数作用类似于 this.girlService = new GirlServie();
  constructor(private girlService: GirlService) {}
  @Get()
  getGirls(): any {
    return this.girlService.getGirls();
  }
}
