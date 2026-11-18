import { compute } from '@prisma/composer-prisma-cloud';
import { postgres } from '@prisma/composer-prisma-cloud/orm';
import nextjs from '@prisma/composer/nextjs';
import { appContract } from './prisma/composer.ts';

// The Next.js app as a Composer service. `prisma dev` runs `next dev` for it.
export default compute({
  name: 'web',
  deps: { db: postgres(appContract) },
  build: nextjs({ module: import.meta.url, appDir: '.' }),
});
