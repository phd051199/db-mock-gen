import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Action } from '../prisma/action.enum';
import { GraphQLJSON } from 'graphql-type-json';

@InputType()
export class PermissionUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:false})
    roleId!: number;

    @Field(() => Action, {nullable:false})
    action!: keyof typeof Action;

    @Field(() => String, {nullable:false})
    subject!: string;

    @Field(() => Boolean, {nullable:true})
    inverted?: boolean;

    @Field(() => GraphQLJSON, {nullable:true})
    conditions?: any;

    @Field(() => String, {nullable:true})
    reason?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
