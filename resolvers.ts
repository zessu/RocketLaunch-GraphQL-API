import { getRepository } from 'typeorm';
import { Launch } from './models/launch.entity';
import { Mission } from './models/mission.entity';
import { Passenger } from './models/passenger.entity';
import { Rocket } from './models/rocket.entity';

export const resolvers = {
  Query: {
    launches: (parent, args, context, info) => {
      return getRepository(Launch).find();
    },
    launch: (parent, args, context, info) => {
      return getRepository(Launch).findOne(args.id);
    },
    passengers: (parent, args, context, info) => {
      return getRepository(Passenger).find();
    },
    passenger: (parent, args, context, info) => {
      return getRepository(Passenger).findOne(args.id);
    },
    rockets: (parent, args, context, info) => {
      return getRepository(Rocket).find();
    },
    rocket: (parent, args, context, info) => {
      return getRepository(Rocket).findOne(args.id);
    },
    missions: (parent, args, context, info) => {
      return getRepository(Mission).find();
    },
    mission: (parent, args, context, info) => {
      return getRepository(Mission).findOne(args.id);
    },
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

