import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';

@InputType()
export class RoleScalarWhereWithAggregatesInput {

    @Field(() => [RoleScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<RoleScalarWhereWithAggregatesInput>;

    @Field(() => [RoleScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<RoleScalarWhereWithAggregatesInput>;

    @Field(() => [RoleScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<RoleScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeNullableWithAggregatesFilter;
}
