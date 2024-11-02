function downloadFile() {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/uc?export=download&id=18-fPvXDbAZcavv6auW3TRKcFlgThASe3';  // Reemplaza con la ruta de tu archivo setup
    link.download = 'setup.exe';  // Nombre del archivo que se descargará
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
