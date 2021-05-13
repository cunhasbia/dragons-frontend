export default function sortByName(itens) {
  const result = itens.sort((a, b) => a.name.localeCompare(b.name));
  
  return result;
};