import { getRepository } from 'typeorm';
import { Launch } from './entities/launch.entity';
import { Mission } from './entities/mission.entity';
import { Passenger } from './entities/passenger.entity';
import { Rocket } from './entities/rocket.entity';

export const resolvers = {
  Query: {
    launches: (_, { id }) => {
      return getRepository(Launch).findOne(id);
    },
    launch: (_, { id }) => {
      return getRepository(Launch).findOne(id);
    },
    passengers: (_, { id }) => {
      return getRepository(Passenger).find();
    },
    passenger: (_, { id }) => {
      return getRepository(Passenger).findOne(id);
    },
    rockets: (_, { id }) => {
      return getRepository(Rocket).find();
    },
    rocket: (_, { id }) => {
      return getRepository(Rocket).findOne(id);
    },
    missions: (_, { id }) => {
      return getRepository(Mission).find();
    },
    mission: (_, { id }) => {
      return getRepository(Mission).findOne(id);
    },
  },
  Mutation: {
    login: (_, { email, password }) => { },
    createPassenger: (_, { input }) => {
      const newPassenger = new Passenger();
      newPassenger.firstname = input.firstname;
      newPassenger.lastname = input.lastname;
      newPassenger.email = input.email;
      newPassenger.password = input.password;
      return getRepository(Passenger).save(newPassenger);
    }
  },
  Launch: {
    mission: (parent, { id }) => { },
    rocket: (parent, { id }) => { },
    passengers: (parent, { id }) => { },
  },
  Passenger: {
    trips: (parent, { id }) => { },
  }
};

