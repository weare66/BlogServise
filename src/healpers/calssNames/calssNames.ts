type Mods = Record<string, boolean | string>;

export function calssNames(cls: string, mods: Mods, additional: string[]): string {
  return [
    cls,
    ...additional,
    ...Object.entries(mods)
      .filter(([className, value]) => Boolean(value)) //Boolean(value)
      .map(([className]) => className),
  ].join(' ');
}
