using Microsoft.EntityFrameworkCore;

namespace Celo.Models
{
    public class UserContext : DbContext
    {
        public UserContext(DbContextOptions<UserContext> options)
            : base(options)
        {
        }

        public UserContext()
        {

        }
        public virtual DbSet<User> Users { get; set; }
    }
}