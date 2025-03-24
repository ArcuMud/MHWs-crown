// db.ts
import Dexie, { type EntityTable } from 'dexie';

interface Mission {
  id: number;
  star: number;
  target1: string;
  target2: string;
  target1Star: number;
  target2Star: number;
  time: number;
  reward: string;
  timeRemaining: number;

  /** 0: no crown, 1: small crown, 2: big crown */
  crown: 0 | 1 | 2;
}

const db = new Dexie('MhwsDatabase') as Dexie & {
  friends: EntityTable<
    Mission,
    'id' // primary key "id" (for the typings only)
  >;
};

// Schema declaration:
db.version(1).stores({
  missions: '++id', // primary key "id" (for the runtime!)
});

export type { Mission };
export { db };
