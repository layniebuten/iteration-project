import List from './List';
// import Trips from '../../server/models';

interface Trips {
  name: string;
  people: string[];
  budget: number;
}

// Hard-coded but reformatted to mimic the database (works)
const Form = () => {
  const trips: Trips[] = [
    {
      name: 'Paris',
      people: ['Lucy', 'Larry', 'Bryan', 'Roberta'],
      budget: 1300,
    },
    {
      name: 'Tokyo',
      people: ['Elise', 'Jordan', 'Mei'],
      budget: 2000,
    },
    {
      name: 'Cartagena',
      people: [
        'Lucy',
        'Lexie',
        'Robbi',
        'Rosie',
        'Ariana',
        'Mary-Kay',
        'Beatrice',
      ],
      budget: 4000,
    },
    {
      name: 'Islamabad',
      people: ['Mohamed', 'Ali', 'Mary', 'Andre', 'Tony'],
      budget: 1800,
    },
  ];

  return (
    <>
      <div id="trips-title">
        <h2>Group Trips</h2>
      </div>
      <section className="group-trips">
        {trips.map((trip) => {
          return (
            <button>
              <List title={`Trip to ${trip.name}`} subtitle={`${trip.people.length} members`} amount={trip.budget} />
            </button>
          )
        })}
      </section>
    </>
  )
};

// Using database
// const Form = () => {
//   const getData = async (): Promise<void> => {
//     const data = await Trips.find({});
//     console.log(data);
//     // return data;
//   };
//   getData();
//   // const data = getData();

//   return (
//     <>
//       <div id="trip-title">
//         <h2>Group Trips</h2>
//       </div>
//       <section className="group-trips">
//         {data.map((trip) => {
//           return (
//             <button>
//               <List
//                 title={`Trip to ${trip.name}`}
//                 subtitle={`${trip.people.length} members`}
//                 amount={trip.budget}
//               />
//             </button>
//           );
//         })}
//       </section>
//     </>
//   );
// };

// Hard-coded
// const Form = () => {
// return (
//   <>
//     <h2>Group Trips</h2>
//     <section className="group-trips">
//       <button>
//         <List title="Trip to Paris" subtitle="4 members" amount={1300} />
//       </button>
//       <button>
//         <List title="Trip to Tokyo" subtitle="3 members" amount={2000} />
//       </button>
//       <button>
//         <List title="Trip to Cartagena" subtitle="7 members" amount={4000} />
//       </button>
//       <button>
//         <List title="Trip to Islamabad" subtitle="5 members" amount={1800} />
//       </button>
//     </section>
//   </>
// );
// }

export default Form;

// export const Form = () => {
//     return (
//         <div className= "flex flex-col font-semibold text-3xl pl-3">
//             {/* <Search className="mb-4 mt-4"/> */}
//             <p className="mb-4">Adventures </p>
//         </div>
//     )
// }
