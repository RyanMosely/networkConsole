import React  from 'react';
import { Header, Card, Divider } from 'semantic-ui-react';

import "./style.css";

import ModemCard from '../ModemCard';

const ModemConfig = () => {

    return (
        <div className="modemContainer">
            <Header as='h1'>Modem Configuration</Header>
            <Divider />
            <Card.Group>
                <ModemCard wanInterface="1"></ModemCard>
                <ModemCard wanInterface="2"></ModemCard>
                <ModemCard wanInterface="3"></ModemCard>
                <ModemCard wanInterface="4"></ModemCard>
            </Card.Group>
        </div>
    )
}

export default ModemConfig