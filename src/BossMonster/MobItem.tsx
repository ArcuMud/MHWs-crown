import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { CheckFlag, CheckFlagValue, Mob } from './types';
import { hasFlag } from './utils';

type Props = {
  mob: Mob;
};

export function MobItem({ mob }: Props) {
  const [checkValue, setCheckValue] = useState<CheckFlagValue>(CheckFlag.None);

  const toggleCheck = (flag: CheckFlag) => {
    setCheckValue((val) => ((val & flag) === flag ? val & ~flag : val | flag) as CheckFlagValue);
  };

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div className={cn('mob', mob.className)}>
          {mob.oneSize ? null : (
            <>
              <div
                className={cn('crown', 'small', hasFlag(checkValue, CheckFlag.Small) && 'check')}
                onClick={() => toggleCheck(CheckFlag.Small)}
              />
              <div
                className={cn('crown', 'big', hasFlag(checkValue, CheckFlag.Big) && 'check')}
                onClick={() => toggleCheck(CheckFlag.Big)}
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
