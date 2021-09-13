import { gql } from "@apollo/client";

export const LOAD_ROCKETS = gql`
 {   
  ships {
    image
    missions {
      flight
      name
    }
    name
    status
    type
    url
    year_built
    weight_kg
  }

}
`
