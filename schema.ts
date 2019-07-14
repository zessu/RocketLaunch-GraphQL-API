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
  email: String!
  firstname: String!
  lastname: String!
  password: String!
}

type Mission {
  _id: ID!
  name: String
  description: String
  rocket: Rocket
  passengers: [Passenger]
}

type Launch {
  _id: ID!
  site: String!
  isBooked: Boolean!
  mission: Mission
  rocket: Rocket
  passengers: [Passenger]
}

type OperationResponse {
  success: Boolean!
  message: String!
}

type Query {
  # Get all Launches
launches: [Launch]!

# Get launch by ID
launch(id: ID!): Launch

# Queries for the current Passenger
passengers: [Passenger]!

# Queries for a passenger given an ID
passenger(id: ID!): Passenger

# Queries for all rockets
rockets: [Rocket]

# Queries for a rocket given an ID
rocket(id: ID!): Rocket

# Queries for all missions
missions: [Mission]

# Queries for a mission given an ID
mission(id: ID!): Mission
}

type Mutation {
# if false, booking trips failed-- check error message
bookTrips(launchIds: [ID]!): OperationResponse!

# if false, cancellation failed-- check error message
cancelTrip(launchId: ID!): OperationResponse!

# login token
login(email: String): OperationResponse!

# register a user, the user can then be booked into missions
createPassenger(input: PassengerInput): Passenger!

# create a space mission
createMission(name: String!, description: String!, rocketID: ID!): Mission

# register a rocket for trips and missions
createRocket(name: String!, type:String!): Rocket

}
`;
