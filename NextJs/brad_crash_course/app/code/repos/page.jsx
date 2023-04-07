import Link from "next/link"
import {FaStar,FaCodeBranch,FaEye} from "react-icons/"


async function fetchRepos()

{
    const response = await fetch ('https://api.github.com/users/bradtraversy/repos',{
    next:{
        revalidate:60 // number of seconds it has to wait to revalidate new data
        // if you are wanting to do it with dynamic changing data we do it 60 as how often are you adding the 
        // new data or new repo

    }})
    await new Promise((resolve)=>setTimeout(resolve,1000));// wait one second
    const repos = await response.json();
    return repos;

    

}




const ReposPage =  async () =>{
    const repos = await fetchRepos()
    // since this is a server component so on doing console.log we see it on the server side code only 
    // the code is not reflected on the client side browser console
    // if we say " use client on the top and then console log then it's going to be put on the browser"

        return (
          <div className='repos-container'>
            <h2>Repositories</h2>
            <ul className='repo-list'>
              {repos.map((repo) => (
                <li key={repo.id}>
                  <Link href={`/code/repos/${repo.name}`}>
                    <h3>{repo.name}</h3>
                    <p>{repo.description}</p>
                    <div className='repo-details'>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        );
      };

export default ReposPage;
   