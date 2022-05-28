import React, { useEffect, useState } from 'react';

const usePart= (id) => {

    const [prt, setPrt] = useState([]);
    useEffect(() => {

        const url = `https://vast-journey-16295.herokuapp.com/parts/${id}`
        fetch(url)
            .then(response => response.json())
            .then(data => setPrt(data))
    }, [prt])
    return { prt, setPrt }
};

export default usePart;