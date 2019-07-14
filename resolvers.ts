import { getRepository } from 'typeorm';
import { Launch } from './entities/launch.entity';
import { Mission } from './entities/mission.entity';
import { Passenger } from './entities/passenger.entity';
import { Rocket } from './entities/rocket.entity';
import { GraphQLError } from 'graphql';
import { LaunchSite } from './entities/site.entity';

export const resolvers = {
  Query: {
    launches: (_, { id }) => {
      return getRepository(Launch).find();
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
    launchSites: (_, { id }) => {
      return getRepository(LaunchSite).find();
    },
    launchSite: (_, { id }) => {
      return getRepository(LaunchSite).findOne(id);
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
      return await getRepository(Mission).save(mission);
    },
    createSite: async (_, { name, location }) => {
      const launchSite = new LaunchSite();
      launchSite.name = name;
      launchSite.location = location;
      return await getRepository(LaunchSite).save(launchSite);
    },
    createLaunch: async (_id, { siteID, rocketID, missionID }) => {
      const newLaunch = new Launch();
      newLaunch.mission = missionID;
      newLaunch.rocket = rocketID;
      newLaunch.launchSite = siteID;
      return await getRepository(Launch).save(newLaunch);
    }
  },
  Launch: {
    mission: (parent, { id }) => { },
    rocket: (parent, { id }) => { },
    passengers: (parent, { id }) => { },
  },
  Mission: {
    rocket: async (parent) => {
      return await getRepository(Rocket).findOne(parent.rocket);
    }
  },
  Passenger: {
    trips: (parent, { id }) => { },
  }
}

