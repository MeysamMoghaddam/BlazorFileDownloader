using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FileDownloader
{
    public static class RegisterDI
    {
        public static IServiceCollection AddFileDownloder(this IServiceCollection services)
        {
            services.AddScoped<Downloader>();

            return services;
        }
    }
}
