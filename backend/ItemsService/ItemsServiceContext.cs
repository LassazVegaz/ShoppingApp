﻿using Microsoft.EntityFrameworkCore;

namespace ItemsService;

public class ItemsServiceContext(DbContextOptions<ItemsServiceContext> options) : DbContext(options)
{
    public DbSet<Item> Items { get; set; }
}
