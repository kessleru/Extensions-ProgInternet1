let extensionsData = null;

async function loadData() {
  try {
    // Correção necessaria para funcionar no github pages
    const dataUrl = new URL('../../data.json', import.meta.url);
    const response = await fetch(dataUrl);
    extensionsData = await response.json();

    console.log(extensionsData);
    return extensionsData;
  } catch (error) {
    console.error('Erro ao carregar dados:', error);
  }
}

function getExtensionsData() {
  return extensionsData;
}

export { getExtensionsData, loadData };
