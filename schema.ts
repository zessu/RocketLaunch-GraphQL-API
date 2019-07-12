import { gql } from 'apollo-server';

export const typeDefs = gql`
type Rocket {
  id: ID!
  name: String
  type: String
}

type Passenger {
  id: ID!
  email: String!
  trips: [Launch]!
}

type Mission {
  name: String
}

type Launch {
  id: ID!
  site: String
  mission: Mission
  rocket: Rocket
  isBooked: Boolean!
  passengers: [Passenger]!
}

type TripUpdateResponse {
  success: Boolean!
  message: String
  launches: [Launch]
}

type Query {
  # Get all Launches
  launches: [Launch]!

  # Get launch by ID
  launch(id: ID!): Launch

  # Queries for the current Passenger
  passengers: [Passenger]!
  passenger(id: ID!): Passenger
  rockets: [Rocket]!
  rocket(id: Id!): Rocket;
  missions: [Mission],
  mission(id: Id!): Mission
}

type Mutation {
  # if false, booking trips failed -- check error message
  bookTrips(launchIds: [ID]!): TripUpdateResponse!

  # if false, cancellation failed -- check error message
  cancelTrip(launchId: ID!): TripUpdateResponse!

  # login token
  login(email: String): String
}
`;

module.exports = typeDefs;
