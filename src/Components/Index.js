import React from 'react';
import './Index.css';
import {useEffect,useState} from 'react';

function Index() {

    const [data, setdata] = useState([]);

    const getCovidData= async ()=>{

        let res=await fetch('https://api.covidtracking.com/v1/states/current.json');
        let result=await res.json();
        console.log(result);
        setdata(result);
    }
    useEffect(() => {
       getCovidData();
    }, []);


    return (
        <div className='Container'>
            <h1 className='heading'>Covid Tracker</h1>
            
            <div className='dataBody'>
                <table className='tableData'>
                    <thead className='tableHeader'>
                        <tr>
                            <th>State</th>
                            <th>Total Cases</th>
                            <th>Positive Cases</th>
                            <th>Negitive Cases</th>
                            <th>Deaths</th>
                        </tr>
                    </thead>
                    <tbody className='tableBody'>

                        {
                            data.map((ind)=>{
                                return(<tr key={ind+1}>
                                    <td>{ind.state}</td>
                                    <td className='total'>{ind.total}</td>
                                    <td className='positive'>{ind.positive}</td>
                                    <td className='negative'>{ind.negative ? ind.negative: "null"}</td>
                                    <td className='death'>{ind.death}</td>
                                </tr>)
                            })
                        }
                    
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Index;