export const resolvers = {
  Query: {
    launches: (parent, args, context, info) => {
    },
    launch: (parent, args, context, info) => { },
    passengers: (parent, args, context, info) => { },
    passenger: (parent, args, context, info) => { },
    rockets: (parent, args, context, info) => { },
    rocket: (parent, args, context, info) => { },
    missions: (parent, args, context, info) => { },
    mission: (parent, args, context, info) => { },
  },
  Launch: {
    mission: (parent, args, context, info) => { },
    rocket: (parent, args, context, info) => { },
    passengers: (parent, args, context, info) => { },
  },
  Passenger: {
    trips: (parent, args, context, info) => { },
  }
};
