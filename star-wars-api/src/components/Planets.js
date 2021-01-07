import React from 'react'
import { Card, CardDescription, Grid } from 'semantic-ui-react';
function Planets({ data }) {
    return (
        <>
            <h1>Planets</h1>
            <Grid columns={3}>
                {data.map((planets, i) => {
                    return (
                        <Grid.Column key={i}>
                            <Card>
                                <Card.Content>
                                    <Card.Header className="starwars_header">{planets.name}</Card.Header>
                                </Card.Content>
                                <CardDescription>
                                    <strong>Rotation Peroid</strong>
                                    <p>{planets.rotation_period}</p>
                                    <strong>Orbital Peroid</strong>
                                    <p>{planets.orbital_period}</p>
                                    <strong>Diameter</strong>
                                    <p>{planets.diameter}</p>
                                    <strong>Climate</strong>
                                    <p>{planets.climate}</p>

                                </CardDescription>
                            </Card>
                        </Grid.Column>
                    )
                })}

            </Grid>
        </>
    )
}

export default Planets
