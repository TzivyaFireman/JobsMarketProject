namespace WebApplication1.Models
{
    public enum JobField { DEVELOPER, QA, EMBEDDED }

    public class Job
    {
        public JobField JobField { get; set; }
        public string JobName { get; set; }
        public string Area { get; set; }
        public string[] Requirements { get; set; }
        public bool FromHome { get; set; }

        public Job(JobField jobField, string jobName, string area, string[] requirements, bool fromHome)
        {
            JobField = jobField;
            JobName = jobName;
            Area = area;
            Requirements = requirements;
            FromHome = fromHome;
        }
    }
}
