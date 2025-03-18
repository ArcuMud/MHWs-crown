export type Mob = {
  id: number;
  name: string;
  zhName: string;
  className: string;
  oneSize?: boolean;
};

export const enum CheckFlag {
  None = 0,
  Small = 1,
  Big = 2,
  All = 3,
}

export type CheckFlagValue = 0 | 1 | 2 | 3;
