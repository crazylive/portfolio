import { container } from 'tsyringe';
import { HomePageResolver } from '@models/home-page/home-page.resolver';

export const resolvers = {
  homepage: container.resolve<HomePageResolver>(HomePageResolver),
};
