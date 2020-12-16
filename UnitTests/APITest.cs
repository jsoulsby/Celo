using Xunit;
using Celo.Models;
using Celo.Controllers;
using EntityFrameworkCoreMock;

namespace UnitTests
{
    public class GetSingleUserTests
    {
        [Fact]
        public void GetById_UnknownIDPassed_ReturnsNotFoundResult()
        {
            var id = -1;
            var initialEntities = new[]
                {
                new User { UserID = 1, FirstName = "Eric Cartoon" },
                new User { UserID = 2, FirstName = "Billy Jewel" },
            };

            var dbContextMock = new DbContextMock<UserContext>();
            var usersDbSetMock = dbContextMock.CreateDbSetMock(x => x.Users, initialEntities);
            var userController = new UserController(dbContextMock.Object);

            var result = userController.GetUser(id);

            //Assert result equal to expectations
        }

    }
}
