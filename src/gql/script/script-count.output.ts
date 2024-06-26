import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ScriptCount {

    @Field(() => Int, {nullable:false})
    userFavorite?: number;
}
