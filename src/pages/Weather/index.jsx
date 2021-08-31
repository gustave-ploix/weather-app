import React from 'react';

import { useParams } from 'react-router';

export default function Weather (){

    const zipCode = useParams();

    return(

        <div>
            weather of : {zipCode}
        </div>

    )

}