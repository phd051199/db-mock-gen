import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { UserFavoriteUncheckedUpdateManyWithoutScriptNestedInput } from '../user-favorite/user-favorite-unchecked-update-many-without-script-nested.input';
import { BundleDetailUncheckedUpdateOneWithoutScriptNestedInput } from '../bundle-detail/bundle-detail-unchecked-update-one-without-script-nested.input';

@InputType()
export class ScriptUncheckedUpdateWithoutCategoryInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    name?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    icon?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    path?: NullableStringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    authorId?: IntFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => UserFavoriteUncheckedUpdateManyWithoutScriptNestedInput, {nullable:true})
    userFavorite?: UserFavoriteUncheckedUpdateManyWithoutScriptNestedInput;

    @Field(() => BundleDetailUncheckedUpdateOneWithoutScriptNestedInput, {nullable:true})
    bundleDetail?: BundleDetailUncheckedUpdateOneWithoutScriptNestedInput;
}