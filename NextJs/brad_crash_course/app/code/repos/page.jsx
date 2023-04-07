import Link from "next/link"
import {FaStar,FaCodeBranch,FaEye} from "react-icons/"


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
    return <div className="repos-container">
        <h2>Repositories</h2>
        <ul className="repo-list1">
            {repos.map((repo)=>(
                <li key = {repo.id} >
                <Link href = {`/code/repos/${repo.name}`}>
                    <h3>{repo.name} </h3>
                    <div className="repo-details">
                        <span>
                        </span>
                    </div>
                </Link>
                </li>
            ))}
        </ul>
    </div>
}

export default ReposPage