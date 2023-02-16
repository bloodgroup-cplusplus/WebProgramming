const people = [
    {
      name: 'Leslie Alexander',
      role: 'Co-Founder / CEO',
      school:'Barfung',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },

    {
        name:'Chad',
    }
    // More people...
  ]
  
  export default function CecMembers() {
    return (
    <div className="app__header app__wrapper section__padding">

        <h2 className="headtext__cormorantb">Chief Executive committee</h2>
        <ul role="list" className="list-none grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                  <img className="h-20 w-20 rounded-full" src={person.imageUrl} alt="" />
                  <div>
                    <h3 className="p__opensansb">{person.name}</h3>
                    <p className="p__opensansb">{person.role}</p>
                    <p className="p__opensansb">{person.school}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
    )
  }

  {/*<div className="bg-white py-24 sm:py-32">
    <div className="mx-auto grid max-w-7xl gap-y-20 gap-x-8 px-6 lg:px-8 xl:grid-cols-3">*/}
  