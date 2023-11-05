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
  addGirls(): any {
    return {
      code: 200,
      data: { id: 4, name: '大蜜', msg: '添加女孩成功' },
    };
  }
  getGirlById(id: number) {
    let retJson: any = {};
    switch (id) {
      case 1:
        retJson = { id: 1, name: 'girl1' };
        break;
      case 2:
        retJson = { id: 2, name: 'girl2' };
        break;
      case 3:
        retJson = { id: 3, name: 'girl3' };
        break;
    }
    return retJson;
  }
}
