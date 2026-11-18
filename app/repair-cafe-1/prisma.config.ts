
import 'dotenv/config';
import { definePrismaConfig } from 'prisma/config';
import { defineConfig as ormConfig } from '@prisma/orm-postgres/config';
import { defineConfig as composerConfig } from '@prisma/composer/config';
import { nodeBuild } from '@prisma/composer/node/control';
import { nextjsBuild } from '@prisma/composer/nextjs/control';
import {
  prismaCloud,
  prismaState,
} from '@prisma/composer-prisma-cloud/control';

export default definePrismaConfig({
  orm: ormConfig({
    contract: './prisma/contract.prisma',
    db: {
      connection: process.env['DATABASE_URL']!,
    },
  }),

  composer: composerConfig({
    entry: './module.ts',
    extensions: [prismaCloud(), nodeBuild(), nextjsBuild()],
    state: prismaState(),
  }),
});
