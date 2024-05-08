using WebApplication1.Models;

namespace WebApplication1.Models
{
    public class User
    {
        public string Id { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public JobField JobField { get; set; }

        public User(string id, string userName, string password, JobField jobField)
        {
            Id = id;
            UserName = userName;
            Password = password;
            JobField = jobField;
        }
    }
}