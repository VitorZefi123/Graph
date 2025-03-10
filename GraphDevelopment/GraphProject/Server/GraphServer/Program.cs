using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowSpecificOrigin", policy =>
    {
        policy.WithOrigins("http://127.0.0.1:5500")  // Allow the frontend URL
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

// Add services to support controllers
builder.Services.AddControllers();

var app = builder.Build();

// Apply the CORS policy globally.
app.UseCors("AllowSpecificOrigin");
// Enable controllers
app.UseRouting();
app.UseEndpoints(endpoints =>
{
    endpoints.MapControllers();
});

app.Run();
