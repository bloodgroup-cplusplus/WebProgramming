import './NewEventForm.css'

export default function NewEventForm()
{

    return (
        <form className='new-event-form'>
            <label>
                <span>Event Title:</span>
            
                <input type="text" id="title"/>
            </label>
            <label>
                <span> Event Date:</span>
                <input type= "date"/>
            </label>

            <button>Submit</button>


        </form>
        
    )
}