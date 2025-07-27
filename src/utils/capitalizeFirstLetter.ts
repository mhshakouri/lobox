export default function capitalizeFirstLetter(word: string) {
  return !word.length ? "" : word.charAt(0).toUpperCase() + word.slice(1);
}