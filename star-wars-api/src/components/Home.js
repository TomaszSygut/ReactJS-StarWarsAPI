import React from 'react'

function Home({ data }) {
    return (
        <>
            <h1>Films</h1>
            <Grid columns={3}>
                {data.map((films, i) => {
                    return (
                        <Grid.Column key={i}>
                            <Card>
                                <Card.Content>
                                    <Card.Header>{films.name}</Card.Header>
                                </Card.Content>
                                <CardDescription>
                                    <strong>Height</strong>
                                    <p>{films.height}</p>
                                    <strong>Mass</strong>
                                    <p>{films.mass}</p>
                                    <strong>Hair Color</strong>
                                    <p>{films.hair_color}</p>
                                </CardDescription>
                            </Card>
                        </Grid.Column>
                    )
                })}
            </Grid>
        </>
    )
}

export default Home
