import { Injectable } from '@nestjs/common';

@Injectable()
export class GirlService {
  getGirls(): any {
    return {
      code: '0',
      data: ['1', '2'],
      msg: '请求女孩列表成功',
    };
  }
}
