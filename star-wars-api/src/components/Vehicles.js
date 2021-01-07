import React from 'react'
import { Card, CardDescription, Grid } from 'semantic-ui-react';

function Vehicles({ data }) {
    return (
        <>
            <h1>Vehicles</h1>
            <Grid columns={3}>
                {data.map((vehicles, i) => {
                    return (
                        <Grid.Column key={i}>
                            <Card>
                                <Card.Content>
                                    <Card.Header className="starwars_header">{vehicles.name}</Card.Header>
                                </Card.Content>
                                <CardDescription>
                                    <strong>Model</strong>
                                    <p>{vehicles.model}</p>
                                    <strong>Manufacturer</strong>
                                    <p>{vehicles.manufacturer}</p>
                                    <strong>Vehicle Class</strong>
                                    <p>{vehicles.vehicle_class}</p>

                                </CardDescription>
                            </Card>
                        </Grid.Column>
                    )
                })}
            </Grid>
        </>
    )
}

export default Vehicles
