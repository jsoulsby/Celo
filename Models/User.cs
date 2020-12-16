using System;
using System.ComponentModel.DataAnnotations;
namespace Celo.Models
{
    public class User
    {
        [Key]
        public int UserID { get; set; }
        public string Title { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public DateTime DOB { get; set; }
        public string PhoneNumber { get; set; }
        public string ProfileImageLargeURL { get; set; }
        public string ProfileImageThumbnailURL { get; set; }

    }
}