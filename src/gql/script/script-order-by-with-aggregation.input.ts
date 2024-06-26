import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { ScriptCountOrderByAggregateInput } from './script-count-order-by-aggregate.input';
import { ScriptAvgOrderByAggregateInput } from './script-avg-order-by-aggregate.input';
import { ScriptMaxOrderByAggregateInput } from './script-max-order-by-aggregate.input';
import { ScriptMinOrderByAggregateInput } from './script-min-order-by-aggregate.input';
import { ScriptSumOrderByAggregateInput } from './script-sum-order-by-aggregate.input';

@InputType()
export class ScriptOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    name?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    description?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    icon?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    path?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    authorId?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    categoryId?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => ScriptCountOrderByAggregateInput, {nullable:true})
    _count?: ScriptCountOrderByAggregateInput;

    @Field(() => ScriptAvgOrderByAggregateInput, {nullable:true})
    _avg?: ScriptAvgOrderByAggregateInput;

    @Field(() => ScriptMaxOrderByAggregateInput, {nullable:true})
    _max?: ScriptMaxOrderByAggregateInput;

    @Field(() => ScriptMinOrderByAggregateInput, {nullable:true})
    _min?: ScriptMinOrderByAggregateInput;

    @Field(() => ScriptSumOrderByAggregateInput, {nullable:true})
    _sum?: ScriptSumOrderByAggregateInput;
}
