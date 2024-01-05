import React from 'react';

const ZonesPage = async () => {

    const res = await fetch("http://localhost:5000/zone", {
        // cache: "force-cache"
        next: {
            revalidate: 5,
        }
    })
    const zones = await res.json()

    // console.log(zones);
    return (
        <div className='w-full'>
            <h1>Total Zones: {zones.length}</h1>
            <div >
                {
                    zones.map((zone, i) => <div key={i} className="card w-[70%] my-8 mx-auto bg-gray-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">Zone ID: {zone.zoneId}</h2>
                            <p>{zone.zoneName}</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Details</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ZonesPage;