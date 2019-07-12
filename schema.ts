import { gql } from 'apollo-server';

export const typeDefs = gql`
type Rocket {
  _id: ID!
  name: String!
  type: String!
}

type Passenger {
  _id: ID!
  email: String!
  firstname: String!
  lastname: String!
  password: String!
  trips: [Launch]
}

input PassengerInput {
  _id: ID
  email: String!
  firstname: String!
  lastname: String!
  password: String!
}

type Mission {
  _id: ID!
  name: String!
}

type Launch {
  _id: ID!
  site: String!
  isBooked: Boolean!
  mission: Mission
  rocket: Rocket
  passengers: [Passenger]
}

type OperationUpdateResponse {
  success: Boolean!
  message: String!
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
  rocket(id: ID!): Rocket
  missions: [Mission]
  mission(id: ID!): Mission
}

type Mutation {
  # if false, booking trips failed -- check error message
  bookTrips(launchIds: [ID]!): OperationUpdateResponse!

  # if false, cancellation failed -- check error message
  cancelTrip(launchId: ID!): OperationUpdateResponse!

  # login token
  login(email: String): OperationUpdateResponse
  
  # register a user, the user can then be booked into missions 
  createPassenger(input: PassengerInput): Passenger!
}
`;
