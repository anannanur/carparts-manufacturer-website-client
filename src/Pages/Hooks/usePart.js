import React, { useEffect, useState } from 'react';

const usePart= (id) => {

    const [prt, setPrt] = useState([]);
    useEffect(() => {

        const url = `http://localhost:5000/parts/${id}`
        fetch(url)
            .then(response => response.json())
            .then(data => setPrt(data))
    }, [prt])
    return { prt, setPrt }
};

export default usePart;