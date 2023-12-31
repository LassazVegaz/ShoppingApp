﻿namespace UsersService.Core.Services;

public interface IAuthService
{
    /// <summary>
    /// Login user with email and password. On success returns the JWT token otherwise null.
    /// </summary>
    /// <returns>If login is successful, returns the JWT token otherwise null.</returns>
    Task<string?> Login(string email, string password);
}
