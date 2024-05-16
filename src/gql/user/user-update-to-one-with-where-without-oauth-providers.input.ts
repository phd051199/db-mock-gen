import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutOauthProvidersInput } from './user-update-without-oauth-providers.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutOauthProvidersInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutOauthProvidersInput, {nullable:false})
    @Type(() => UserUpdateWithoutOauthProvidersInput)
    data!: UserUpdateWithoutOauthProvidersInput;
}