import {Volume} from './volume';

export type Volumes = {
  kind: string;
  search: string;
  items: [Volume];
  totalItems: number;
  isLoading?: boolean;
};
