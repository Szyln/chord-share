export function isFuzzyMatch(text: string, query: string): boolean {
  if (!query) return true;
  
  // Convert both to hiragana for comparison if wanakana is available
  let normalizedQuery = query.toLowerCase();
  let normalizedText = text.toLowerCase();
  
  if (typeof wanakana !== 'undefined') {
    normalizedQuery = wanakana.toHiragana(query).toLowerCase();
    normalizedText = wanakana.toHiragana(text).toLowerCase();
  }
  
  let i = 0, j = 0;
  while (i < normalizedText.length && j < normalizedQuery.length) {
    if (normalizedText[i] === normalizedQuery[j]) j++;
    i++;
  }
  return j === normalizedQuery.length;
}

export function getCompLevel(compStr: string): number {
  const match = compStr.match(/^(\d+)/);
  return match ? parseInt(match[1], 10) : -1;
}
