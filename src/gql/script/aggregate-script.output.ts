import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ScriptCountAggregate } from './script-count-aggregate.output';
import { ScriptAvgAggregate } from './script-avg-aggregate.output';
import { ScriptSumAggregate } from './script-sum-aggregate.output';
import { ScriptMinAggregate } from './script-min-aggregate.output';
import { ScriptMaxAggregate } from './script-max-aggregate.output';

@ObjectType()
export class AggregateScript {

    @Field(() => ScriptCountAggregate, {nullable:true})
    _count?: ScriptCountAggregate;

    @Field(() => ScriptAvgAggregate, {nullable:true})
    _avg?: ScriptAvgAggregate;

    @Field(() => ScriptSumAggregate, {nullable:true})
    _sum?: ScriptSumAggregate;

    @Field(() => ScriptMinAggregate, {nullable:true})
    _min?: ScriptMinAggregate;

    @Field(() => ScriptMaxAggregate, {nullable:true})
    _max?: ScriptMaxAggregate;
}
