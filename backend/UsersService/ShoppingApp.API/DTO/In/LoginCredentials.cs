﻿namespace UsersService.API.DTO.In;

public class LoginCredentials
{
    public string Email { get; set; } = default!;
    public string Password { get; set; } = default!;
}
