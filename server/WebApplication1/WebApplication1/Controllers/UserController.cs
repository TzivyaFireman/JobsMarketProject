using Microsoft.AspNetCore.Mvc;
using WebApplication1.Models;
using System.Collections.Generic;

//// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

using Microsoft.AspNetCore.Components;
using RouteAttribute = Microsoft.AspNetCore.Components.RouteAttribute;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        public static List<User> Users = new List<User>()
        {
            new User("1","a","1",JobField.QA),
            new User("2","Chana Levi","12345",JobField.DEVELOPER),
            new User("3","Itamar Zax","1234",JobField.EMBEDDED),
            new User("4","Tzivya Fireman","123",JobField.EMBEDDED),
        };
        // GET api/<PersonController>/5
        [HttpPost("getUser")]
        public User GetById(User user)
        {
            User currentUser = Users.Find(u => u.UserName == user.UserName && u.Password == user.Password);
          //  if(currentUser != null)
                return currentUser;
           // return null;
        }

    }
}
