// global.d.ts
import { PrismaClient } from '@prisma/client';

declare global {
  var prisma: PrismaClient; // This must be a `var` and not `let` or `const`.
}
