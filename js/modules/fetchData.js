let extensionsData = null;

async function loadData() {
  try {
    const response = await fetch('../data.json');
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
