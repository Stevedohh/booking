import { SetMetadata } from '@nestjs/common';
import { Roles } from '../../types';

export const ROLE_KEY = 'role';

export const Role = (role: Roles) => SetMetadata(ROLE_KEY, role);
