/* Should write to trips.json and add data there that will then be re-rendered with the other trips, attaching
the same functionality as the other buttons have */
import data from '../../databases/trips.json' assert { type: 'json' };
import { useState } from 'react';

const CreateTrip = () => {
  const [submit, setSubmit] = useState(<></>);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const formJSON = Object.fromEntries(formData.entries());

    data.push({
      id: data.length + 1,
      destination: String(formJSON.destination),
      people: String(formJSON.people).split(','),
      budget: Number(formJSON.budget),
    });

    setSubmit(<h3>{`Trip to ${formJSON.destination} created!`}</h3>);
  };

  return (
    <>
      <div id="create-trip-title">
        <h2>Create Adventure</h2>
      </div>
      <form id="add-trip" method="post" onSubmit={handleSubmit}>
        <label>
          Destination: <input  className='input'  id="destination" name="destination" required/>
        </label>
        <br />
        <label>
          People: <input className='input' id="people" name="people" required/>
        </label>
        <br />
        <label>
          Budget: <input className='input' id="budget" name="budget" required/>
        </label>
        <br />
        <button type="submit" id="trip-button">
          Add Trip
        </button>
      </form>
      <div>{submit}</div>
    </>
  );
};

export default CreateTrip;
