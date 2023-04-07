async function fetchRepos()

{
    const response = await fetch ('https://api.github.com/users/bloodgroup-cplusplus/repos')
    const repos = await response.json();
    return repos;

    

}




const ReposPage =  async () =>{
    const repos = await fetchRepos()
    // since this is a server component so on doing console.log we see it on the server side code only 
    // the code is not reflected on the client side browser console
    // if we say " use client on the top and then console log then it's going to be put on the browser"
    console.log(repos)
    return <div>
        {repos[0].name}
    </div>
}

export default ReposPage