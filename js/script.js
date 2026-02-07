import { initDisplayCards} from './modules/displayCards.js';
import { filterCards } from './modules/filter.js';
import { toggleTheme } from './modules/toggleTheme.js';
import { loadData } from './modules/fetchData.js';

async function init() {
  await loadData();
  initDisplayCards();
  filterCards();
  toggleTheme();
}

init();
