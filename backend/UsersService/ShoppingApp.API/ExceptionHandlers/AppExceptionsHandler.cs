﻿using Microsoft.AspNetCore.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using UsersService.Core.Exceptions;

namespace UsersService.API.ExceptionHandlers;

// Handle custom exceptions defined in logical layer. They give a little support for web layers
// so lets take that chance 🥳
public class AppExceptionsHandler(ILogger<AppExceptionsHandler> logger) : IExceptionHandler
{
    private readonly ILogger<AppExceptionsHandler> _logger = logger;

    public async ValueTask<bool> TryHandleAsync(HttpContext httpContext, Exception exception, CancellationToken cancellationToken)
    {
        if (exception is not CustomException appException)
            return false;

        _logger.LogError(exception, "An application error occurred.");

        var problemDetails = new ProblemDetails
        {
            Status = appException.StatusCode,
            Detail = appException.Message,
            Type = appException.Url,
        };

        httpContext.Response.StatusCode = appException.StatusCode ?? 500;
        await httpContext.Response.WriteAsJsonAsync(problemDetails, cancellationToken);

        return true;
    }
}
