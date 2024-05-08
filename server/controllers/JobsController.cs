using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using WebApplication1.Models;
using jobs.Models;

namespace jobs.controller
{
    [Route("api/[controller]")]
    [ApiController]

    public class JobsController
    {
        public static List<Job> allJobs= new List<Job>()
        {
            new Job(JobField.DEVELOPER,"back end")
        }
        [HttpGet("GetAllCourses")]
        public ActionResult GetAllCourses()
        {

            return Ok(allJobs);

        }

    }
}
