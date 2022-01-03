import { Injectable, OnModuleInit } from '@nestjs/common';
import next from 'next';
import { NextServer, NextServerOptions } from 'next/dist/server/next';

@Injectable()
export class ViewService implements OnModuleInit {
  private server!: NextServer;

  async onModuleInit(): Promise<void> {
    const nextOptions: NextServerOptions = {
      dev: false,
      dir: 'dist/apps/blog',
    };

    try {
      this.server = next(nextOptions);
      this.server.prepare();
    } catch (error) {
      console.log('NEXT SERVER:', error);
    }
  }

  getNextServer(): NextServer {
    return this.server;
  }
}
