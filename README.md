# BlazorFileDownloader
download file in blazor wasm project from byte array

## Install
`
Install-Package BlazorFileDownloader -Version x.x.x
`

or 
[Latest Version](https://www.nuget.org/packages/BlazorFileDownloader/)

## Use
### Register Service In DI Container
```
builder.Services.AddFileDownloder();
```

### Use Downloader
inject class in your component
```
@inject Downloader downloader
```
then use
```
await downloader.Download(bytes, "filename"); 
```
