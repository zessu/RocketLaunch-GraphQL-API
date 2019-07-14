import { getRepository } from 'typeorm';
import { Launch } from './entities/launch.entity';
import { Mission } from './entities/mission.entity';
import { Passenger } from './entities/passenger.entity';
import { Rocket } from './entities/rocket.entity';
import { AuthenticationError, UserInputError } from 'apollo-server';
import { GraphQLError } from 'graphql';

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
      const userExists = getRepository(Passenger).find({ where: { email: input.email } });
      if (userExists) {
        return new GraphQLError('User with that email already exists');
      }
      const newPassenger = new Passenger();
      newPassenger.firstname = input.firstname;
      newPassenger.lastname = input.lastname;
      newPassenger.email = input.email;
      newPassenger.password = input.password;
      return getRepository(Passenger).save(newPassenger);
    },
    createRocket: async (_, { name, type }) => {
      const rocket = new Rocket();
      rocket.name = name;
      rocket.type = type;
      return await getRepository(Rocket).save(rocket);
    },
    createMission: async (_, { name, description, rocketID }) => {
      const mission = new Mission();
      mission.name = name
      mission.description = description;
      const rocket = await getRepository(Rocket).find({ where: { _id: rocketID } })
      if (!rocket) {
        return new GraphQLError('Rocket does not exist');
      }
      mission.rocket = rocketID;
      const nr = await getRepository(Mission).save(mission);
      console.log(nr);
      return nr;
    },
  },
  Launch: {
    mission: (parent, { id }) => { },
    rocket: (parent, { id }) => { },
    passengers: (parent, { id }) => { },
  },
  Mission: {
    rocket: async (parent) => {
      return await getRepository(Rocket).findOne(parent.rocket);
    },
  },
  Passenger: {
    trips: (parent, { id }) => { },
  }
};

