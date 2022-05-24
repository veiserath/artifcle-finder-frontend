import React from 'react'
import { useEffect, useState } from 'react';
import Tree from 'react-d3-tree';
import { Link, useParams } from 'react-router-dom';


export default function OrgChartTree() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const {url} = useParams()

    useEffect(() => {
        const getData = async () => {
          try {
            // const response = await fetch(
            //   `https://mocki.io/v1/a0e4aced-9317-49d0-aab4-e05ce884ecb2`
            // );
            
            console.log(url)
            const response = await fetch(
                `http://localhost:8000/polls/${url}/`
              );
            if (!response.ok) {
              throw new Error(
                `This is an HTTP error: The status is ${response.status}`
              );
            }
            let actualData = await response.json();
            setData(actualData);
            console.log(actualData) 
            setError(null);
          } catch(err) {
            setError(err.message);
            setData(null);
          } finally {
            setLoading(false);
          }  
        }
        getData()
      }, [url])

    return data && (
        // `<Tree />` will fill width/height of its container; in this case `#treeWrapper`.
            <div id="treeWrapper" style={{ width: '1500px', height: '1500px'}}>
                <Tree orientation='horizontal' data={data} />
                <Link to='/'>Go back</Link>
            </div>

    );
}