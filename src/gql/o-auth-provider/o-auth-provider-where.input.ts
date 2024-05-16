import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnumOAuthProvidersFilter } from '../prisma/enum-o-auth-providers-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';

@InputType()
export class OAuthProviderWhereInput {

    @Field(() => [OAuthProviderWhereInput], {nullable:true})
    AND?: Array<OAuthProviderWhereInput>;

    @Field(() => [OAuthProviderWhereInput], {nullable:true})
    OR?: Array<OAuthProviderWhereInput>;

    @Field(() => [OAuthProviderWhereInput], {nullable:true})
    NOT?: Array<OAuthProviderWhereInput>;

    @Field(() => EnumOAuthProvidersFilter, {nullable:true})
    provider?: EnumOAuthProvidersFilter;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;
}