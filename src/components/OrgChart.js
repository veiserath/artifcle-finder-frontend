import React from 'react'
import { useEffect, useState } from 'react';
import Tree from 'react-d3-tree';
import { Link } from 'react-router-dom';

// This is a simplified example of an org chart with a depth of 2.
// Note how deeper levels are defined recursively via the `children` property.


export default function OrgChartTree() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getData = async () => {
          try {
            const response = await fetch(
              `https://mocki.io/v1/a0e4aced-9317-49d0-aab4-e05ce884ecb2`
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
      }, [])

    return data && (
        // `<Tree />` will fill width/height of its container; in this case `#treeWrapper`.
            <div id="treeWrapper" style={{ width: '1500px', height: '1500px' }}>
                <Tree data={data} />
                <Link to='/'>Go back</Link>
            </div>

    );
}