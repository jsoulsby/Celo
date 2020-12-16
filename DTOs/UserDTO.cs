using System;

namespace Celo.DTOs
{

    public class UserDTO
    {
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