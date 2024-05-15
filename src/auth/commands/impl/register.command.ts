import { type ICommand } from '@nestjs/cqrs';

import { type RegisterInput } from '@/auth/dtos';

export class RegisterCommand implements ICommand {
  constructor(public readonly input: RegisterInput) {}
}
