using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace noJunkAgain.Models
{
    public class messageContext:DbContext
    {
        public DbSet<message> messages { get; set; }
    }
}