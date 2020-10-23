import React from 'react';
import { Card } from '../card/card.component';

import './card-list.styles.style.css';


export const CardList = props => (
    <div className="cardListMainBox">
        <div className="cardList">
            {props.moreNames.map(moreName => (
                <Card moreNames={moreName} />
            ))}
        </div>
    </div>
);