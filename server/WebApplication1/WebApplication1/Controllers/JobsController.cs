using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    [Route("api/Jobs")]
    [ApiController]
    public class JobsController : ControllerBase
    {
        public static List<Job> Jobs = new List<Job>()
        {
            new Job(JobField.DEVELOPER,"back end","Tel Aviv",new string[]{"experiance in Java","hhh"},true),
            new Job(JobField.QA,"embedded","Yahud", new string[]{ "experiance in C++","knowledge Assembler"},false),
            new Job(JobField.EMBEDDED,"QA","Jerusalem",new string[]{ "experiance of 3 years in QA","independent learning ability"},false)
        };

    [HttpGet("GetJobs")]
        public ActionResult getJobs()
        {
            return Ok(Jobs);
        }
    }
}
