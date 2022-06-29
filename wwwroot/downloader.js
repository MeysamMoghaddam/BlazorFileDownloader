// This is a JavaScript module that is loaded on demand. It can export any number of
// functions, and may import other JavaScript modules if required.

export async function downloadFileFromStream(fileName, contentStreamReference) {
    const arrayBuffer = await contentStreamReference.arrayBuffer();
    const blob = new Blob([arrayBuffer]);
    const url = URL.createObjectURL(blob);    
    triggerFileDownload(fileName, url);
    URL.revokeObjectURL(url);
}

export async function downloadFileFromUrl(fileName, url) {
    triggerFileDownload(fileName, url);
}

window.triggerFileDownload = (fileName, url) => {
    const anchorElement = document.createElement('a');   

    anchorElement.href = url;
    anchorElement.download = fileName ?? '';
    anchorElement.click();
    anchorElement.remove();
}