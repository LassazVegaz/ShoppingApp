﻿using MassTransit;
using Microsoft.Extensions.DependencyInjection;
using System.Reflection;

namespace TrendingApp.Packages.MassTransitDependencyInjection;

public static class Extension
{
    public static IServiceCollection AddTrendingAppMassTransit(this IServiceCollection services)
        => services.AddMassTransit(ops =>
        {
            ops.AddConsumers(Assembly.GetExecutingAssembly());

            ops.UsingRabbitMq((context, config) =>
            {
                config.Host(Constants.RabbitMqHost, h =>
                {
                    h.Username(Constants.RabbitMqUsername);
                    h.Password(Constants.RabbitMqPassword);
                });
                config.ConfigureEndpoints(context);
            });
        });
}
