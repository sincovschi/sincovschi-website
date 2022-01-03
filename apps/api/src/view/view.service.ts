import { Injectable, OnModuleInit } from '@nestjs/common';
import next from 'next';
import { NextServer } from 'next/dist/server/next';

@Injectable()
export class ViewService implements OnModuleInit {
  private server!: NextServer;

  async onModuleInit(): Promise<void> {
    try {
      this.server = next({
        isNextDevCommand: true,
        dir: 'dist/apps/blog',
      });
      this.server.prepare();
    } catch (error) {
      console.log('NEXT SERVER:', error);
    }
  }

  getNextServer(): NextServer {
    return this.server;
  }
}
