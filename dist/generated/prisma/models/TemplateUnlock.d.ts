import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type TemplateUnlockModel = runtime.Types.Result.DefaultSelection<Prisma.$TemplateUnlockPayload>;
export type AggregateTemplateUnlock = {
    _count: TemplateUnlockCountAggregateOutputType | null;
    _min: TemplateUnlockMinAggregateOutputType | null;
    _max: TemplateUnlockMaxAggregateOutputType | null;
};
export type TemplateUnlockMinAggregateOutputType = {
    id: string | null;
    templateId: string | null;
    downloaded: boolean | null;
    createdAt: Date | null;
    userId: string | null;
};
export type TemplateUnlockMaxAggregateOutputType = {
    id: string | null;
    templateId: string | null;
    downloaded: boolean | null;
    createdAt: Date | null;
    userId: string | null;
};
export type TemplateUnlockCountAggregateOutputType = {
    id: number;
    templateId: number;
    downloaded: number;
    createdAt: number;
    userId: number;
    _all: number;
};
export type TemplateUnlockMinAggregateInputType = {
    id?: true;
    templateId?: true;
    downloaded?: true;
    createdAt?: true;
    userId?: true;
};
export type TemplateUnlockMaxAggregateInputType = {
    id?: true;
    templateId?: true;
    downloaded?: true;
    createdAt?: true;
    userId?: true;
};
export type TemplateUnlockCountAggregateInputType = {
    id?: true;
    templateId?: true;
    downloaded?: true;
    createdAt?: true;
    userId?: true;
    _all?: true;
};
export type TemplateUnlockAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TemplateUnlockWhereInput;
    orderBy?: Prisma.TemplateUnlockOrderByWithRelationInput | Prisma.TemplateUnlockOrderByWithRelationInput[];
    cursor?: Prisma.TemplateUnlockWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | TemplateUnlockCountAggregateInputType;
    _min?: TemplateUnlockMinAggregateInputType;
    _max?: TemplateUnlockMaxAggregateInputType;
};
export type GetTemplateUnlockAggregateType<T extends TemplateUnlockAggregateArgs> = {
    [P in keyof T & keyof AggregateTemplateUnlock]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTemplateUnlock[P]> : Prisma.GetScalarType<T[P], AggregateTemplateUnlock[P]>;
};
export type TemplateUnlockGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TemplateUnlockWhereInput;
    orderBy?: Prisma.TemplateUnlockOrderByWithAggregationInput | Prisma.TemplateUnlockOrderByWithAggregationInput[];
    by: Prisma.TemplateUnlockScalarFieldEnum[] | Prisma.TemplateUnlockScalarFieldEnum;
    having?: Prisma.TemplateUnlockScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TemplateUnlockCountAggregateInputType | true;
    _min?: TemplateUnlockMinAggregateInputType;
    _max?: TemplateUnlockMaxAggregateInputType;
};
export type TemplateUnlockGroupByOutputType = {
    id: string;
    templateId: string;
    downloaded: boolean;
    createdAt: Date;
    userId: string;
    _count: TemplateUnlockCountAggregateOutputType | null;
    _min: TemplateUnlockMinAggregateOutputType | null;
    _max: TemplateUnlockMaxAggregateOutputType | null;
};
type GetTemplateUnlockGroupByPayload<T extends TemplateUnlockGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TemplateUnlockGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TemplateUnlockGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TemplateUnlockGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TemplateUnlockGroupByOutputType[P]>;
}>>;
export type TemplateUnlockWhereInput = {
    AND?: Prisma.TemplateUnlockWhereInput | Prisma.TemplateUnlockWhereInput[];
    OR?: Prisma.TemplateUnlockWhereInput[];
    NOT?: Prisma.TemplateUnlockWhereInput | Prisma.TemplateUnlockWhereInput[];
    id?: Prisma.StringFilter<"TemplateUnlock"> | string;
    templateId?: Prisma.StringFilter<"TemplateUnlock"> | string;
    downloaded?: Prisma.BoolFilter<"TemplateUnlock"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"TemplateUnlock"> | Date | string;
    userId?: Prisma.StringFilter<"TemplateUnlock"> | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type TemplateUnlockOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    templateId?: Prisma.SortOrder;
    downloaded?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type TemplateUnlockWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    userId_templateId?: Prisma.TemplateUnlockUserIdTemplateIdCompoundUniqueInput;
    AND?: Prisma.TemplateUnlockWhereInput | Prisma.TemplateUnlockWhereInput[];
    OR?: Prisma.TemplateUnlockWhereInput[];
    NOT?: Prisma.TemplateUnlockWhereInput | Prisma.TemplateUnlockWhereInput[];
    templateId?: Prisma.StringFilter<"TemplateUnlock"> | string;
    downloaded?: Prisma.BoolFilter<"TemplateUnlock"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"TemplateUnlock"> | Date | string;
    userId?: Prisma.StringFilter<"TemplateUnlock"> | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id" | "userId_templateId">;
export type TemplateUnlockOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    templateId?: Prisma.SortOrder;
    downloaded?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    _count?: Prisma.TemplateUnlockCountOrderByAggregateInput;
    _max?: Prisma.TemplateUnlockMaxOrderByAggregateInput;
    _min?: Prisma.TemplateUnlockMinOrderByAggregateInput;
};
export type TemplateUnlockScalarWhereWithAggregatesInput = {
    AND?: Prisma.TemplateUnlockScalarWhereWithAggregatesInput | Prisma.TemplateUnlockScalarWhereWithAggregatesInput[];
    OR?: Prisma.TemplateUnlockScalarWhereWithAggregatesInput[];
    NOT?: Prisma.TemplateUnlockScalarWhereWithAggregatesInput | Prisma.TemplateUnlockScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"TemplateUnlock"> | string;
    templateId?: Prisma.StringWithAggregatesFilter<"TemplateUnlock"> | string;
    downloaded?: Prisma.BoolWithAggregatesFilter<"TemplateUnlock"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"TemplateUnlock"> | Date | string;
    userId?: Prisma.StringWithAggregatesFilter<"TemplateUnlock"> | string;
};
export type TemplateUnlockCreateInput = {
    id?: string;
    templateId: string;
    downloaded?: boolean;
    createdAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutTemplateUnlocksInput;
};
export type TemplateUnlockUncheckedCreateInput = {
    id?: string;
    templateId: string;
    downloaded?: boolean;
    createdAt?: Date | string;
    userId: string;
};
export type TemplateUnlockUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    templateId?: Prisma.StringFieldUpdateOperationsInput | string;
    downloaded?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutTemplateUnlocksNestedInput;
};
export type TemplateUnlockUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    templateId?: Prisma.StringFieldUpdateOperationsInput | string;
    downloaded?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type TemplateUnlockCreateManyInput = {
    id?: string;
    templateId: string;
    downloaded?: boolean;
    createdAt?: Date | string;
    userId: string;
};
export type TemplateUnlockUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    templateId?: Prisma.StringFieldUpdateOperationsInput | string;
    downloaded?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TemplateUnlockUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    templateId?: Prisma.StringFieldUpdateOperationsInput | string;
    downloaded?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type TemplateUnlockListRelationFilter = {
    every?: Prisma.TemplateUnlockWhereInput;
    some?: Prisma.TemplateUnlockWhereInput;
    none?: Prisma.TemplateUnlockWhereInput;
};
export type TemplateUnlockOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type TemplateUnlockUserIdTemplateIdCompoundUniqueInput = {
    userId: string;
    templateId: string;
};
export type TemplateUnlockCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    templateId?: Prisma.SortOrder;
    downloaded?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type TemplateUnlockMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    templateId?: Prisma.SortOrder;
    downloaded?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type TemplateUnlockMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    templateId?: Prisma.SortOrder;
    downloaded?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type TemplateUnlockCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.TemplateUnlockCreateWithoutUserInput, Prisma.TemplateUnlockUncheckedCreateWithoutUserInput> | Prisma.TemplateUnlockCreateWithoutUserInput[] | Prisma.TemplateUnlockUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.TemplateUnlockCreateOrConnectWithoutUserInput | Prisma.TemplateUnlockCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.TemplateUnlockCreateManyUserInputEnvelope;
    connect?: Prisma.TemplateUnlockWhereUniqueInput | Prisma.TemplateUnlockWhereUniqueInput[];
};
export type TemplateUnlockUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.TemplateUnlockCreateWithoutUserInput, Prisma.TemplateUnlockUncheckedCreateWithoutUserInput> | Prisma.TemplateUnlockCreateWithoutUserInput[] | Prisma.TemplateUnlockUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.TemplateUnlockCreateOrConnectWithoutUserInput | Prisma.TemplateUnlockCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.TemplateUnlockCreateManyUserInputEnvelope;
    connect?: Prisma.TemplateUnlockWhereUniqueInput | Prisma.TemplateUnlockWhereUniqueInput[];
};
export type TemplateUnlockUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.TemplateUnlockCreateWithoutUserInput, Prisma.TemplateUnlockUncheckedCreateWithoutUserInput> | Prisma.TemplateUnlockCreateWithoutUserInput[] | Prisma.TemplateUnlockUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.TemplateUnlockCreateOrConnectWithoutUserInput | Prisma.TemplateUnlockCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.TemplateUnlockUpsertWithWhereUniqueWithoutUserInput | Prisma.TemplateUnlockUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.TemplateUnlockCreateManyUserInputEnvelope;
    set?: Prisma.TemplateUnlockWhereUniqueInput | Prisma.TemplateUnlockWhereUniqueInput[];
    disconnect?: Prisma.TemplateUnlockWhereUniqueInput | Prisma.TemplateUnlockWhereUniqueInput[];
    delete?: Prisma.TemplateUnlockWhereUniqueInput | Prisma.TemplateUnlockWhereUniqueInput[];
    connect?: Prisma.TemplateUnlockWhereUniqueInput | Prisma.TemplateUnlockWhereUniqueInput[];
    update?: Prisma.TemplateUnlockUpdateWithWhereUniqueWithoutUserInput | Prisma.TemplateUnlockUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.TemplateUnlockUpdateManyWithWhereWithoutUserInput | Prisma.TemplateUnlockUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.TemplateUnlockScalarWhereInput | Prisma.TemplateUnlockScalarWhereInput[];
};
export type TemplateUnlockUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.TemplateUnlockCreateWithoutUserInput, Prisma.TemplateUnlockUncheckedCreateWithoutUserInput> | Prisma.TemplateUnlockCreateWithoutUserInput[] | Prisma.TemplateUnlockUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.TemplateUnlockCreateOrConnectWithoutUserInput | Prisma.TemplateUnlockCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.TemplateUnlockUpsertWithWhereUniqueWithoutUserInput | Prisma.TemplateUnlockUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.TemplateUnlockCreateManyUserInputEnvelope;
    set?: Prisma.TemplateUnlockWhereUniqueInput | Prisma.TemplateUnlockWhereUniqueInput[];
    disconnect?: Prisma.TemplateUnlockWhereUniqueInput | Prisma.TemplateUnlockWhereUniqueInput[];
    delete?: Prisma.TemplateUnlockWhereUniqueInput | Prisma.TemplateUnlockWhereUniqueInput[];
    connect?: Prisma.TemplateUnlockWhereUniqueInput | Prisma.TemplateUnlockWhereUniqueInput[];
    update?: Prisma.TemplateUnlockUpdateWithWhereUniqueWithoutUserInput | Prisma.TemplateUnlockUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.TemplateUnlockUpdateManyWithWhereWithoutUserInput | Prisma.TemplateUnlockUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.TemplateUnlockScalarWhereInput | Prisma.TemplateUnlockScalarWhereInput[];
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type TemplateUnlockCreateWithoutUserInput = {
    id?: string;
    templateId: string;
    downloaded?: boolean;
    createdAt?: Date | string;
};
export type TemplateUnlockUncheckedCreateWithoutUserInput = {
    id?: string;
    templateId: string;
    downloaded?: boolean;
    createdAt?: Date | string;
};
export type TemplateUnlockCreateOrConnectWithoutUserInput = {
    where: Prisma.TemplateUnlockWhereUniqueInput;
    create: Prisma.XOR<Prisma.TemplateUnlockCreateWithoutUserInput, Prisma.TemplateUnlockUncheckedCreateWithoutUserInput>;
};
export type TemplateUnlockCreateManyUserInputEnvelope = {
    data: Prisma.TemplateUnlockCreateManyUserInput | Prisma.TemplateUnlockCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type TemplateUnlockUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.TemplateUnlockWhereUniqueInput;
    update: Prisma.XOR<Prisma.TemplateUnlockUpdateWithoutUserInput, Prisma.TemplateUnlockUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.TemplateUnlockCreateWithoutUserInput, Prisma.TemplateUnlockUncheckedCreateWithoutUserInput>;
};
export type TemplateUnlockUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.TemplateUnlockWhereUniqueInput;
    data: Prisma.XOR<Prisma.TemplateUnlockUpdateWithoutUserInput, Prisma.TemplateUnlockUncheckedUpdateWithoutUserInput>;
};
export type TemplateUnlockUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.TemplateUnlockScalarWhereInput;
    data: Prisma.XOR<Prisma.TemplateUnlockUpdateManyMutationInput, Prisma.TemplateUnlockUncheckedUpdateManyWithoutUserInput>;
};
export type TemplateUnlockScalarWhereInput = {
    AND?: Prisma.TemplateUnlockScalarWhereInput | Prisma.TemplateUnlockScalarWhereInput[];
    OR?: Prisma.TemplateUnlockScalarWhereInput[];
    NOT?: Prisma.TemplateUnlockScalarWhereInput | Prisma.TemplateUnlockScalarWhereInput[];
    id?: Prisma.StringFilter<"TemplateUnlock"> | string;
    templateId?: Prisma.StringFilter<"TemplateUnlock"> | string;
    downloaded?: Prisma.BoolFilter<"TemplateUnlock"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"TemplateUnlock"> | Date | string;
    userId?: Prisma.StringFilter<"TemplateUnlock"> | string;
};
export type TemplateUnlockCreateManyUserInput = {
    id?: string;
    templateId: string;
    downloaded?: boolean;
    createdAt?: Date | string;
};
export type TemplateUnlockUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    templateId?: Prisma.StringFieldUpdateOperationsInput | string;
    downloaded?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TemplateUnlockUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    templateId?: Prisma.StringFieldUpdateOperationsInput | string;
    downloaded?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TemplateUnlockUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    templateId?: Prisma.StringFieldUpdateOperationsInput | string;
    downloaded?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TemplateUnlockSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    templateId?: boolean;
    downloaded?: boolean;
    createdAt?: boolean;
    userId?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["templateUnlock"]>;
export type TemplateUnlockSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    templateId?: boolean;
    downloaded?: boolean;
    createdAt?: boolean;
    userId?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["templateUnlock"]>;
export type TemplateUnlockSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    templateId?: boolean;
    downloaded?: boolean;
    createdAt?: boolean;
    userId?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["templateUnlock"]>;
export type TemplateUnlockSelectScalar = {
    id?: boolean;
    templateId?: boolean;
    downloaded?: boolean;
    createdAt?: boolean;
    userId?: boolean;
};
export type TemplateUnlockOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "templateId" | "downloaded" | "createdAt" | "userId", ExtArgs["result"]["templateUnlock"]>;
export type TemplateUnlockInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type TemplateUnlockIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type TemplateUnlockIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $TemplateUnlockPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "TemplateUnlock";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        templateId: string;
        downloaded: boolean;
        createdAt: Date;
        userId: string;
    }, ExtArgs["result"]["templateUnlock"]>;
    composites: {};
};
export type TemplateUnlockGetPayload<S extends boolean | null | undefined | TemplateUnlockDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$TemplateUnlockPayload, S>;
export type TemplateUnlockCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<TemplateUnlockFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TemplateUnlockCountAggregateInputType | true;
};
export interface TemplateUnlockDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['TemplateUnlock'];
        meta: {
            name: 'TemplateUnlock';
        };
    };
    findUnique<T extends TemplateUnlockFindUniqueArgs>(args: Prisma.SelectSubset<T, TemplateUnlockFindUniqueArgs<ExtArgs>>): Prisma.Prisma__TemplateUnlockClient<runtime.Types.Result.GetResult<Prisma.$TemplateUnlockPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends TemplateUnlockFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, TemplateUnlockFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__TemplateUnlockClient<runtime.Types.Result.GetResult<Prisma.$TemplateUnlockPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends TemplateUnlockFindFirstArgs>(args?: Prisma.SelectSubset<T, TemplateUnlockFindFirstArgs<ExtArgs>>): Prisma.Prisma__TemplateUnlockClient<runtime.Types.Result.GetResult<Prisma.$TemplateUnlockPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends TemplateUnlockFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, TemplateUnlockFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__TemplateUnlockClient<runtime.Types.Result.GetResult<Prisma.$TemplateUnlockPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends TemplateUnlockFindManyArgs>(args?: Prisma.SelectSubset<T, TemplateUnlockFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TemplateUnlockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends TemplateUnlockCreateArgs>(args: Prisma.SelectSubset<T, TemplateUnlockCreateArgs<ExtArgs>>): Prisma.Prisma__TemplateUnlockClient<runtime.Types.Result.GetResult<Prisma.$TemplateUnlockPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends TemplateUnlockCreateManyArgs>(args?: Prisma.SelectSubset<T, TemplateUnlockCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends TemplateUnlockCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, TemplateUnlockCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TemplateUnlockPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends TemplateUnlockDeleteArgs>(args: Prisma.SelectSubset<T, TemplateUnlockDeleteArgs<ExtArgs>>): Prisma.Prisma__TemplateUnlockClient<runtime.Types.Result.GetResult<Prisma.$TemplateUnlockPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends TemplateUnlockUpdateArgs>(args: Prisma.SelectSubset<T, TemplateUnlockUpdateArgs<ExtArgs>>): Prisma.Prisma__TemplateUnlockClient<runtime.Types.Result.GetResult<Prisma.$TemplateUnlockPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends TemplateUnlockDeleteManyArgs>(args?: Prisma.SelectSubset<T, TemplateUnlockDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends TemplateUnlockUpdateManyArgs>(args: Prisma.SelectSubset<T, TemplateUnlockUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends TemplateUnlockUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, TemplateUnlockUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TemplateUnlockPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends TemplateUnlockUpsertArgs>(args: Prisma.SelectSubset<T, TemplateUnlockUpsertArgs<ExtArgs>>): Prisma.Prisma__TemplateUnlockClient<runtime.Types.Result.GetResult<Prisma.$TemplateUnlockPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends TemplateUnlockCountArgs>(args?: Prisma.Subset<T, TemplateUnlockCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TemplateUnlockCountAggregateOutputType> : number>;
    aggregate<T extends TemplateUnlockAggregateArgs>(args: Prisma.Subset<T, TemplateUnlockAggregateArgs>): Prisma.PrismaPromise<GetTemplateUnlockAggregateType<T>>;
    groupBy<T extends TemplateUnlockGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: TemplateUnlockGroupByArgs['orderBy'];
    } : {
        orderBy?: TemplateUnlockGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, TemplateUnlockGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTemplateUnlockGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: TemplateUnlockFieldRefs;
}
export interface Prisma__TemplateUnlockClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface TemplateUnlockFieldRefs {
    readonly id: Prisma.FieldRef<"TemplateUnlock", 'String'>;
    readonly templateId: Prisma.FieldRef<"TemplateUnlock", 'String'>;
    readonly downloaded: Prisma.FieldRef<"TemplateUnlock", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"TemplateUnlock", 'DateTime'>;
    readonly userId: Prisma.FieldRef<"TemplateUnlock", 'String'>;
}
export type TemplateUnlockFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TemplateUnlockSelect<ExtArgs> | null;
    omit?: Prisma.TemplateUnlockOmit<ExtArgs> | null;
    include?: Prisma.TemplateUnlockInclude<ExtArgs> | null;
    where: Prisma.TemplateUnlockWhereUniqueInput;
};
export type TemplateUnlockFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TemplateUnlockSelect<ExtArgs> | null;
    omit?: Prisma.TemplateUnlockOmit<ExtArgs> | null;
    include?: Prisma.TemplateUnlockInclude<ExtArgs> | null;
    where: Prisma.TemplateUnlockWhereUniqueInput;
};
export type TemplateUnlockFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TemplateUnlockSelect<ExtArgs> | null;
    omit?: Prisma.TemplateUnlockOmit<ExtArgs> | null;
    include?: Prisma.TemplateUnlockInclude<ExtArgs> | null;
    where?: Prisma.TemplateUnlockWhereInput;
    orderBy?: Prisma.TemplateUnlockOrderByWithRelationInput | Prisma.TemplateUnlockOrderByWithRelationInput[];
    cursor?: Prisma.TemplateUnlockWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TemplateUnlockScalarFieldEnum | Prisma.TemplateUnlockScalarFieldEnum[];
};
export type TemplateUnlockFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TemplateUnlockSelect<ExtArgs> | null;
    omit?: Prisma.TemplateUnlockOmit<ExtArgs> | null;
    include?: Prisma.TemplateUnlockInclude<ExtArgs> | null;
    where?: Prisma.TemplateUnlockWhereInput;
    orderBy?: Prisma.TemplateUnlockOrderByWithRelationInput | Prisma.TemplateUnlockOrderByWithRelationInput[];
    cursor?: Prisma.TemplateUnlockWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TemplateUnlockScalarFieldEnum | Prisma.TemplateUnlockScalarFieldEnum[];
};
export type TemplateUnlockFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TemplateUnlockSelect<ExtArgs> | null;
    omit?: Prisma.TemplateUnlockOmit<ExtArgs> | null;
    include?: Prisma.TemplateUnlockInclude<ExtArgs> | null;
    where?: Prisma.TemplateUnlockWhereInput;
    orderBy?: Prisma.TemplateUnlockOrderByWithRelationInput | Prisma.TemplateUnlockOrderByWithRelationInput[];
    cursor?: Prisma.TemplateUnlockWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TemplateUnlockScalarFieldEnum | Prisma.TemplateUnlockScalarFieldEnum[];
};
export type TemplateUnlockCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TemplateUnlockSelect<ExtArgs> | null;
    omit?: Prisma.TemplateUnlockOmit<ExtArgs> | null;
    include?: Prisma.TemplateUnlockInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TemplateUnlockCreateInput, Prisma.TemplateUnlockUncheckedCreateInput>;
};
export type TemplateUnlockCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.TemplateUnlockCreateManyInput | Prisma.TemplateUnlockCreateManyInput[];
    skipDuplicates?: boolean;
};
export type TemplateUnlockCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TemplateUnlockSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TemplateUnlockOmit<ExtArgs> | null;
    data: Prisma.TemplateUnlockCreateManyInput | Prisma.TemplateUnlockCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.TemplateUnlockIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type TemplateUnlockUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TemplateUnlockSelect<ExtArgs> | null;
    omit?: Prisma.TemplateUnlockOmit<ExtArgs> | null;
    include?: Prisma.TemplateUnlockInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TemplateUnlockUpdateInput, Prisma.TemplateUnlockUncheckedUpdateInput>;
    where: Prisma.TemplateUnlockWhereUniqueInput;
};
export type TemplateUnlockUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.TemplateUnlockUpdateManyMutationInput, Prisma.TemplateUnlockUncheckedUpdateManyInput>;
    where?: Prisma.TemplateUnlockWhereInput;
    limit?: number;
};
export type TemplateUnlockUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TemplateUnlockSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TemplateUnlockOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TemplateUnlockUpdateManyMutationInput, Prisma.TemplateUnlockUncheckedUpdateManyInput>;
    where?: Prisma.TemplateUnlockWhereInput;
    limit?: number;
    include?: Prisma.TemplateUnlockIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type TemplateUnlockUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TemplateUnlockSelect<ExtArgs> | null;
    omit?: Prisma.TemplateUnlockOmit<ExtArgs> | null;
    include?: Prisma.TemplateUnlockInclude<ExtArgs> | null;
    where: Prisma.TemplateUnlockWhereUniqueInput;
    create: Prisma.XOR<Prisma.TemplateUnlockCreateInput, Prisma.TemplateUnlockUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.TemplateUnlockUpdateInput, Prisma.TemplateUnlockUncheckedUpdateInput>;
};
export type TemplateUnlockDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TemplateUnlockSelect<ExtArgs> | null;
    omit?: Prisma.TemplateUnlockOmit<ExtArgs> | null;
    include?: Prisma.TemplateUnlockInclude<ExtArgs> | null;
    where: Prisma.TemplateUnlockWhereUniqueInput;
};
export type TemplateUnlockDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TemplateUnlockWhereInput;
    limit?: number;
};
export type TemplateUnlockDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TemplateUnlockSelect<ExtArgs> | null;
    omit?: Prisma.TemplateUnlockOmit<ExtArgs> | null;
    include?: Prisma.TemplateUnlockInclude<ExtArgs> | null;
};
export {};
