import React from 'react';

export const Card = props => (
<div className="cardListItem">
    <img src={`https://robohash.org/${props.moreNames.id}.png?set=set2&size=180x180`} alt={props.moreNames.name}/>
    <h1>{props.moreNames.name}</h1>
    <p>{props.moreNames.email}</p>
</div>
)