using System.IO;
using System.Security.Cryptography.X509Certificates;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;

namespace HacksSTS
{
    public class Startup
    {
        private readonly IHostingEnvironment _environment;

        public Startup(IHostingEnvironment environment)
        {
            _environment = environment;
        }

        public void ConfigureServices(IServiceCollection services)
        {
            var cert = GetCertificate();

            services.AddIdentityServer(options =>
                {
                    // Do not use this in production :)
                    options.RequireSsl = false;
                })
                .SetSigningCredential(cert);
        }

        public void Configure(IApplicationBuilder app)
        {
            app.UseIdentityServer();
        }

        private X509Certificate2 GetCertificate()
        {
            return new X509Certificate2(Path.Combine(_environment.ContentRootPath, Path.Combine("keys", "hacks.pfx")), "hacks");
        }
    }
}
