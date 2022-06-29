// This is a JavaScript module that is loaded on demand. It can export any number of
// functions, and may import other JavaScript modules if required.

export async function downloadFileFromStream(fileName, contentStreamReference, target) {
    const arrayBuffer = await contentStreamReference.arrayBuffer();
    const blob = new Blob([arrayBuffer]);
    const url = URL.createObjectURL(blob);
    triggerFileDownload(fileName, url, target);
    URL.revokeObjectURL(url);
}

window.triggerFileDownload = (fileName, url, target) => {
    const anchorElement = document.createElement('a');
    if (target)
        anchorElement.target = target;

    anchorElement.href = url;
    anchorElement.download = fileName ?? '';
    anchorElement.click();
    anchorElement.remove();
}