

type Mods = Record<string, boolean | string>;


export function classNames(cls: string, mode: Mods = {}, additional: string[] = []): string {
    return [
        cls,
        ...additional.filter(Boolean),
        ...Object.entries(mode)
            .filter(([className, value]) => Boolean(value))
            .map(([className, value]) => className)
    ].join(' ');
}

classNames('remove-btn', {hoverd: true, selectable: true, red: true}, ['pdg'])