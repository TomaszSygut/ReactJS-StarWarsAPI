import React from 'react'
import { Card, CardDescription, Grid } from 'semantic-ui-react';
function Species({ data }) {
    return (
        <>
            <h1>People</h1>
            <Grid columns={3}>
                {data.map((species, i) => {
                    return (
                        <Grid.Column key={i}>
                            <Card>
                                <Card.Content>
                                    <Card.Header className="starwars_header">{species.name}</Card.Header>
                                </Card.Content>
                                <CardDescription>
                                    <strong>Classification</strong>
                                    <p>{species.classification}</p>
                                    <strong>Average Heigt</strong>
                                    <p>{species.average_height}</p>
                                    <strong>Skin Colors</strong>
                                    <p>{species.skin_colors}</p>
                                </CardDescription>
                            </Card>
                        </Grid.Column>
                    )
                })}
            </Grid>
        </>
    )
}

export default Species
