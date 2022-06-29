
using Microsoft.JSInterop;
namespace FileDownloader
{
    public class Downloader : IAsyncDisposable
    {
        private readonly Lazy<Task<IJSObjectReference>> moduleTask;

        public Downloader(IJSRuntime jsRuntime)
        {
            moduleTask = new(() => jsRuntime.InvokeAsync<IJSObjectReference>(
                "import", "./_content/FileDownloader/downloader.js").AsTask());
        }

        public async Task Download(byte[] file, string fileName)
        {
            var fileStream = new MemoryStream(file);
            using var streamRef = new DotNetStreamReference(stream: fileStream);

            var module = await moduleTask.Value;
            await module.InvokeVoidAsync("downloadFileFromStream", fileName, streamRef);
        }

        public async ValueTask DisposeAsync()
        {
            if (moduleTask.IsValueCreated)
            {
                var module = await moduleTask.Value;
                await module.DisposeAsync();
            }
        }
    }
}
