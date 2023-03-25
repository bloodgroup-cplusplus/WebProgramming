const app = require('express')()

const jobs = {}

app.post("/submit", (req,res)=>{
    const jobId = `job:${Date.now()}`
    jobs[jobId]
    updateJob(jobId,0);
    res.end("\n\n"+jobId +"\n\n")
})


app.get("/checkstatus", async(req,res)=>{
    console.log(jobs[req.query.jobId])
    //long polling don't respond unitl done 
    while(await checkJobComplete(req.query.jobId) ==false);
    // make this an asynchronous check 
    // not a synchronous check as synchronous check will never execute the program 
    // dont write 
    // while(jobs[req.query.jobId]<100); this will perform a synchronous check intead of async check 
    res.end("\n\n job status : complete" + jobs[req.query.jobId] + "%\n\n")
})


app.listen(8080,()=>console.log("listening on 8080"))

async function checkJobComplete(jobId)
{
    return new Promise((resolve,reject)=>{
        if(jobs[jobId]<100)
        this.setTimeout(()=> resolve(false),1000);
        else
        resolve(true);
    })
}


function updateJob(jobId,prg)
{
    jobs[jobId] = prg;
    console.log(`update ${jobId} to ${prg}`)
    if(prg==100) return ;
    this.setTimeout(()=>updateJob(jobId,prg+10),3000)
}