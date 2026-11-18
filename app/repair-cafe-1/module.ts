import { appRoot } from '@prisma/composer';
import { postgres } from '@prisma/composer-prisma-cloud/orm';
import { appContract } from './prisma/composer.ts';
import web from './service.ts';

export default appRoot('repair-cafe', ({ provision }) => {
  const database = provision(
    postgres({
      name: 'database',
      contract: appContract,
      config: './prisma.config.ts',
    }),
  );
  provision(web, { deps: { db: database } });
});
