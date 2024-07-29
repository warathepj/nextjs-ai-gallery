'use client';

import React, { useEffect, useState } from 'react';
import EnvVariable from '../../pages/actions/test';

function ClientComponent() {
    const [host, setHost] = useState(undefined);

    useEffect(() => {
        EnvVariable().then(result => {
            setHost(result.host);
        });
    }, []);

    
    if (host) {
        return (
            <>
            <p>{host}</p>
            </>
        );
    }

    return null;
}

export default ClientComponent;
