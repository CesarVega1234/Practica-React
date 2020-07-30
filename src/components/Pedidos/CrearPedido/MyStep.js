import React from 'react'
import { Step,Container,Icon,Grid} from 'semantic-ui-react'

function MyStep({posicion}) {

  return(
    <Container>

        <Grid textAlign="center">

          <Grid.Row only='tablet computer'>
            <Step.Group fluid size='large'>
              <Step completed={posicion > 1 ? true : false} active={posicion !== 1 ? false : true}>
                <Icon name='user' />
              </Step>
              <Step completed={posicion > 2 ? true : false} active={posicion !== 2 ? false : true}>
                <Icon name='map marker alternate' />
              </Step>
              <Step completed={posicion > 3 ? true : false} active={posicion !== 3 ? false : true}>
              <Icon name='add to cart' />
              </Step>
              <Step completed={posicion > 4 ? true : false} active={posicion !== 3 ? false : true}>
              <Icon name='info' />
              </Step>
            </Step.Group>
          </Grid.Row>

          <Grid.Row only='mobile' columns='equal'>
          
            <Grid.Column >
                <Step.Group>
                  <Step completed={posicion > 1 ? true : false} active={posicion !== 1 ? false : true}>
                    <Icon name='user' size='huge'/>
                  </Step>
                </Step.Group>
            </Grid.Column>

            <Grid.Column>
              <Step.Group>
                <Step completed={posicion > 2 ? true : false} active={posicion !== 2 ? false : true}>
                  <Icon name='map marker alternate' size='huge'/>
                </Step>
              </Step.Group>
            </Grid.Column>

            <Grid.Column>
              <Step.Group>
                <Step completed={posicion > 3 ? true : false} active={posicion !== 3 ? false : true}>
                  <Icon name='add to cart' size='huge'/>
                </Step>
              </Step.Group>
            </Grid.Column>

            <Grid.Column>
              <Step.Group>
                <Step completed={posicion > 4 ? true : false} active={posicion !== 3 ? false : true}>
                  <Icon name='info' size='huge'/>
                </Step>
              </Step.Group>
            </Grid.Column>
            
            {/* <Step.Group size='mini'>
                  <Step completed={posicion > 1 ? true : false} active={posicion !== 1 ? false : true}>
                    <Icon name='user' />
                  </Step>
                <Step completed={posicion > 2 ? true : false} active={posicion !== 2 ? false : true}>
                  <Icon name='map marker alternate' />
                </Step>
                <Step completed={posicion > 3 ? true : false} active={posicion !== 3 ? false : true}>
                <Icon name='add to cart' />
                </Step>
                <Step completed={posicion > 4 ? true : false} active={posicion !== 3 ? false : true}>
                <Icon name='info' />
                </Step>
              </Step.Group> */}

          </Grid.Row>

        </Grid>
    </Container>
  );
}
export default MyStep;