function getAvatarURL(name: string) {
  return new URL(`../assets/images/avatars/${name}`, import.meta.url).href;
}

export { getAvatarURL };
