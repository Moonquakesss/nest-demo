import { Controller, Get, Post, Request } from '@nestjs/common';
import { GirlService } from './girl.service';

@Controller('girl')
export class GirlController {
  // 这里的构造函数作用类似于 this.girlService = new GirlServie();
  constructor(private girlService: GirlService) {}
  @Get()
  getGirls(): any {
    return this.girlService.getGirls();
  }
  @Post('/add')
  addGirls(@Request() req): any {
    console.log(req.body);
    return this.girlService.addGirls();
  }
  @Get('/getGirlById')
  getGirlById(@Request() req): any {
    const id: number = parseInt(req.query.id);
    return this.girlService.getGirlById(id);
  }
  @Get('/thirdImgGet')
  getThirdImg() {
    const res = this.girlService.getBingImg('1');
    console.log('bing img = ', res);
    return res;
  }
}
