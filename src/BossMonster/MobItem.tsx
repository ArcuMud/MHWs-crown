import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';

import { CheckFlag, CheckFlagValue, Mob } from './types';
import { useCrown } from './useCrown';
import { hasFlag } from './utils';

type Props = {
  mob: Mob;
};

export function MobItem({ mob }: Props) {
  const { getCrown, setCrown } = useCrown();

  const toggleCheck = (flag: CheckFlag) => {
    const value = getCrown(mob.id);
    const nextValue = ((value & flag) === flag ? value & ~flag : value | flag) as CheckFlagValue;
    setCrown(mob.id, nextValue);
  };

  const checkValue = getCrown(mob.id);

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
        <p>{mob.name}</p>
      </TooltipContent>
    </Tooltip>
  );
}
