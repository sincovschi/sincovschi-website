import { Controller, Get, Res, Req } from '@nestjs/common';
import { Request, Response } from 'express';

import { ViewService } from './view.service';

@Controller()
export class ViewController {
  constructor(private viewService: ViewService) {}

  @Get('*')
  async static(@Req() req: Request, @Res() res: Response) {
    const nextApp = this.viewService.getNextServer();
    const handle = nextApp.getRequestHandler();
    handle(req, res);
  }
}
