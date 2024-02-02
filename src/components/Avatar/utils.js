export function avatarify(name) {
    return name
        .split(' ')
        .map((s) => s[0])
        .join('');
}
