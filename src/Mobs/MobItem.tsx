import { useState } from 'react';
import clsx from 'clsx';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { Mob } from './types';

type Props = {
  mob: Mob;
};
export function MobItem({ mob }: Props) {
  const [small, setSmall] = useState(false);
  const [big, setBig] = useState(false);

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div className={clsx('mob', mob.className)}>
          {mob.noSize ? null : (
            <>
              <div
                className={clsx('crown', 'small', small && 'check')}
                onClick={() => {
                  console.count('🚀 ~ MobItem ~ small:');

                  setSmall((val) => !val);
                }}
              />
              <div
                className={clsx('crown', 'big', big && 'check')}
                onClick={() => {
                  console.count('🚀 ~ MobItem ~ big:');
                  setBig((val) => !val);
                }}
              />
            </>
          )}
        </div>
      </TooltipTrigger>
      <TooltipContent side="top" align="center">
        <p>{mob.zhName}</p>
      </TooltipContent>
    </Tooltip>
  );
}
