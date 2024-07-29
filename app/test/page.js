'use client';

import React, { useEffect, useState } from 'react';
import EnvVariable from '../../pages/actions/test';

function ClientComponent() {
    const [theVariable, setTheVariable, host, setHost] = useState(undefined);

    useEffect(() => {
        EnvVariable().then(result => {
            setTheVariable(result.theVariable);
            setHost(result.host);
        });
    }, []);

    if (theVariable) {
        return (
            <>
            <p>{theVariable}</p>
            </>
        );
    }
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
