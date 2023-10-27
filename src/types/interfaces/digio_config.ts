import { Environment } from '../enums/environment';
import type { Theme } from './theme';

export interface DigioConfig {
  logo?: string;
  environment?: Environment;
  theme?: Theme;
}
