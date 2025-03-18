import { CheckFlag, CheckFlagValue } from './types';

export function toHex(decimal: number): string {
  return decimal.toString(16).padStart(2, '0');
}

export function hasFlag(value: CheckFlagValue, flag: CheckFlag): boolean {
  return (value & flag) === flag;
}

export function setFlag(value: CheckFlagValue, flag: CheckFlag): CheckFlagValue {
  return (value | flag) as CheckFlagValue;
}

export function removeFlag(value: CheckFlagValue, flag: CheckFlag): CheckFlagValue {
  return (value & ~flag) as CheckFlagValue;
}

export function toggleFlag(value: CheckFlagValue, flag: CheckFlag): CheckFlagValue {
  return (value ^ flag) as CheckFlagValue;
}
