
        import React, { useEffect, useState } from 'react';
        const Temp = () => {
            const [data, setData] = useState([]);
            useEffect(() => {
                async function getData() {
                    try {
                        const response = await fetch('https://geeks-for-geeks-api.vercel.app/pankaj07');
                        const data = await response.json();
                        setData(data);
                    } catch (error) {
                        throw new Error("kyu nhi ho rha fetch dtat ")
                    }
                }
                getData();
            },[]);
                console.log(data);
            //     const fetchData = async () => {
            //         try {
            //             const response = await fetch('https://api.github.com/users/pankaj143p/events');
            //             const data = await response.json();
            //             setData(data);
            //         } catch (error) {
            //             console.log('error', error);
            //         }
            //     };
            // }, []);
            // console.log(data);
            return (
                <div>
                    <h1>GeeksforGeeks</h1>
                    <table>
                        <thead>
                            <tr>
                                <th>title {data.currentStreak}</th>
                                <th>url</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item) => (
                                <tr key={item.title}>
                                    <td> {data.item.currentStreak}</td>
                                    <td>{item.url}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            );
        };
        export default Temp;

