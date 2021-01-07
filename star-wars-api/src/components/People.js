import React from 'react'
import { Card, CardDescription, Grid } from 'semantic-ui-react';
import './styles/style.css'
function People({ data }) {
    return (
        <>
            <h1>People</h1>
            <Grid columns={3}>
                {data.map((people, i) => {
                    return (

                        <Grid.Column key={i}>
                            <Card>
                                <Card.Content >
                                    <Card.Header className="starwars_header">{people.name}</Card.Header>
                                </Card.Content>
                                <CardDescription className="description">
                                    <strong>Height</strong>
                                    <p>{people.height}</p>
                                    <strong>Mass</strong>
                                    <p>{people.mass}</p>
                                    <strong>Hair Color</strong>
                                    <p>{people.hair_color}</p>
                                </CardDescription>
                            </Card>
                        </Grid.Column>
                    )
                })}
            </Grid>
        </>
    )
}

export default People
