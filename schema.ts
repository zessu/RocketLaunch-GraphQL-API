import { gql } from 'apollo-server';

export const typeDefs = gql`
type Rocket {
  id: ID!
  name: String
  type: String
}

type User {
  id: ID!
  email: String!
  trips: [Launch]!
}

type Mission {
  name: String
  missionPatch(size: PatchSize): String
}

enum PatchSize {
  SMALL
  LARGE
}

type Launch {
  id: ID!
  site: String
  mission: Mission
  rocket: Rocket
  isBooked: Boolean!
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

  # Queries for the current user
  passengers: [User]!
  passenger(id: ID!): User
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
