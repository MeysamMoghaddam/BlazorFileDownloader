# FileDownloader
download file in blazor wasm project from byte array

## Install
`
Install-Package FileDownloader -Version x.x.x
`

or 
[Latest Version](https://www.nuget.org/packages/FileDownloader/)

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
