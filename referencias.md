### Fetch data
```javascript
async function loadExtensionsData() {
    try {
        const response = await fetch('./data.json');
        const extensions = await response.json();
        
        console.log(extensions);
        return extensions;
    } catch (error) {
        console.error('Erro ao carregar dados:', error);
    }
}

async function init() {
    const data = await loadExtensionsData();
    
    data.forEach(extension => {
        console.log(extension.name, extension.isActive);
    });
}

init();
```