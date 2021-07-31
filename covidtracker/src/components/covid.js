// import React, { useEffect, useState } from 'react'
// import './covid.css';
// //import './covid1.css';

// const Covid = () => {
//     const [data, setData] = useState([]);


//     const getCovidData = async () => {
//         try {
//             const res = await fetch('https://api.covid19india.org/data.json')
//             const actualData = await res.json();
//             console.log(actualData.statewise[0]);
//             setData(actualData.statewise[0]);
//         } catch (err) {
//             console.log(err);
//         }
//     }


//     useEffect(() => {
//          getCovidData();
//     }, [])
//     return (
//         <>
//             <section>
//             <h1>🔴 LIVE</h1>
//             <h2>COVID-19 CORONAVIRUS TRACKER</h2>
//             <ul>
//                 <li className="card">
//                     <div className="card_main">
//                         <div className="card_inner c_i1">
//                             <p className="card_name"><span>OUR</span>COUNTRY</p>
//                             <p className="card_total">INDIA</p>
//                         </div>

//                     </div>

//                 </li>
//                 <li className="card">
//                     <div className="card_main">
//                         <div className="card_inner c_i2">
//                             <p className="card_name"><span>TOTAL</span>RECOVERED</p>
//                                 <p className="card_total">{data.recovered }</p>
//                         </div>

//                     </div>

//                 </li>
//                 <li className="card">
//                     <div className="card_main">
//                         <div className="card_inner c_i3">
//                             <p className="card_name"><span>TOTAL</span>CONFIRMED</p>
//                                 <p className="card_total">{data.confirmed }</p>
//                         </div>

//                     </div>

//                 </li>
//                 <li className="card">
//                     <div className="card_main">
//                         <div  className="card_inner c_i4">
//                             <p className="card_name"><span>TOTAL</span>DEATH</p>
//                                 <p className="card_total">{data.deaths }</p>
//                         </div>

//                     </div>

//                 </li>
//                 <li className="card">
//                     <div className="card_main">
//                         <div className="card_inner c_i5">
//                             <p className="card_name"><span>TOTAL</span>ACTIVE</p>
//                                 <p className="card_total">{data.active }</p>
//                         </div>

//                     </div>

//                 </li>
//                 <li className="card">
//                     <div className="card_main">
//                         <div className="card_inner c_i6">
//                             <p className="card_name"><span>LAST</span>UPDATE</p>
//                                 <p className="card_total">{data.lastupdatedtime }</p>
//                         </div>

//                     </div>

//                 </li>
//             </ul>
//             </section>
//         </>
//     )
// }

// export default Covid
