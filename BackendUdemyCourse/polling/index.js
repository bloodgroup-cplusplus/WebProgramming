const app = require("express")()

// empty dictionary
// key will be the j-id
// value will be progress 
const jobs = {}


app.post("/submit",(req,res)=>{
    // every 5 seconds we update the job 10%
    const jobId = `job:${Date.now()}`
    // we use the time to add new job id 
    jobs[jobId]
    // new dictionary
    updateJob(jobId,0);
    // a new job is just created 
    // udpate job will just 10 second every 5 percent
    res.end("\n\n"+jobId+"\n\n")

})


app.get("/checkstatus", (req,res)=>{
    console.log(jobs[req.query.jobId])
    res.end("\n\nJobStatus:"+ jobs[req.query.jobId]+"%\n\n")
})


app.listen(8080,()=>console.log("listening on port 8080"))


function updateJob(jobId,prg)
{
    jobs[jobId] = prg; 
    console.log(`updated ${jobId} to ${prg}`)
    if(prg ==100) return ;
    this.setTimeout(() => {
        updateJob(jobId,prg+10)
        
    }, 5000);
}