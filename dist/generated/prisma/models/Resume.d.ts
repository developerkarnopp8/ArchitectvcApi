import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type ResumeModel = runtime.Types.Result.DefaultSelection<Prisma.$ResumePayload>;
export type AggregateResume = {
    _count: ResumeCountAggregateOutputType | null;
    _min: ResumeMinAggregateOutputType | null;
    _max: ResumeMaxAggregateOutputType | null;
};
export type ResumeMinAggregateOutputType = {
    id: string | null;
    title: string | null;
    templateId: string | null;
    status: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    userId: string | null;
};
export type ResumeMaxAggregateOutputType = {
    id: string | null;
    title: string | null;
    templateId: string | null;
    status: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    userId: string | null;
};
export type ResumeCountAggregateOutputType = {
    id: number;
    title: number;
    templateId: number;
    data: number;
    status: number;
    createdAt: number;
    updatedAt: number;
    userId: number;
    _all: number;
};
export type ResumeMinAggregateInputType = {
    id?: true;
    title?: true;
    templateId?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
    userId?: true;
};
export type ResumeMaxAggregateInputType = {
    id?: true;
    title?: true;
    templateId?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
    userId?: true;
};
export type ResumeCountAggregateInputType = {
    id?: true;
    title?: true;
    templateId?: true;
    data?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
    userId?: true;
    _all?: true;
};
export type ResumeAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ResumeWhereInput;
    orderBy?: Prisma.ResumeOrderByWithRelationInput | Prisma.ResumeOrderByWithRelationInput[];
    cursor?: Prisma.ResumeWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ResumeCountAggregateInputType;
    _min?: ResumeMinAggregateInputType;
    _max?: ResumeMaxAggregateInputType;
};
export type GetResumeAggregateType<T extends ResumeAggregateArgs> = {
    [P in keyof T & keyof AggregateResume]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateResume[P]> : Prisma.GetScalarType<T[P], AggregateResume[P]>;
};
export type ResumeGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ResumeWhereInput;
    orderBy?: Prisma.ResumeOrderByWithAggregationInput | Prisma.ResumeOrderByWithAggregationInput[];
    by: Prisma.ResumeScalarFieldEnum[] | Prisma.ResumeScalarFieldEnum;
    having?: Prisma.ResumeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ResumeCountAggregateInputType | true;
    _min?: ResumeMinAggregateInputType;
    _max?: ResumeMaxAggregateInputType;
};
export type ResumeGroupByOutputType = {
    id: string;
    title: string;
    templateId: string;
    data: runtime.JsonValue;
    status: string;
    createdAt: Date;
    updatedAt: Date;
    userId: string;
    _count: ResumeCountAggregateOutputType | null;
    _min: ResumeMinAggregateOutputType | null;
    _max: ResumeMaxAggregateOutputType | null;
};
type GetResumeGroupByPayload<T extends ResumeGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ResumeGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ResumeGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ResumeGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ResumeGroupByOutputType[P]>;
}>>;
export type ResumeWhereInput = {
    AND?: Prisma.ResumeWhereInput | Prisma.ResumeWhereInput[];
    OR?: Prisma.ResumeWhereInput[];
    NOT?: Prisma.ResumeWhereInput | Prisma.ResumeWhereInput[];
    id?: Prisma.StringFilter<"Resume"> | string;
    title?: Prisma.StringFilter<"Resume"> | string;
    templateId?: Prisma.StringFilter<"Resume"> | string;
    data?: Prisma.JsonFilter<"Resume">;
    status?: Prisma.StringFilter<"Resume"> | string;
    createdAt?: Prisma.DateTimeFilter<"Resume"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Resume"> | Date | string;
    userId?: Prisma.StringFilter<"Resume"> | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type ResumeOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    templateId?: Prisma.SortOrder;
    data?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type ResumeWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ResumeWhereInput | Prisma.ResumeWhereInput[];
    OR?: Prisma.ResumeWhereInput[];
    NOT?: Prisma.ResumeWhereInput | Prisma.ResumeWhereInput[];
    title?: Prisma.StringFilter<"Resume"> | string;
    templateId?: Prisma.StringFilter<"Resume"> | string;
    data?: Prisma.JsonFilter<"Resume">;
    status?: Prisma.StringFilter<"Resume"> | string;
    createdAt?: Prisma.DateTimeFilter<"Resume"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Resume"> | Date | string;
    userId?: Prisma.StringFilter<"Resume"> | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id">;
export type ResumeOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    templateId?: Prisma.SortOrder;
    data?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    _count?: Prisma.ResumeCountOrderByAggregateInput;
    _max?: Prisma.ResumeMaxOrderByAggregateInput;
    _min?: Prisma.ResumeMinOrderByAggregateInput;
};
export type ResumeScalarWhereWithAggregatesInput = {
    AND?: Prisma.ResumeScalarWhereWithAggregatesInput | Prisma.ResumeScalarWhereWithAggregatesInput[];
    OR?: Prisma.ResumeScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ResumeScalarWhereWithAggregatesInput | Prisma.ResumeScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Resume"> | string;
    title?: Prisma.StringWithAggregatesFilter<"Resume"> | string;
    templateId?: Prisma.StringWithAggregatesFilter<"Resume"> | string;
    data?: Prisma.JsonWithAggregatesFilter<"Resume">;
    status?: Prisma.StringWithAggregatesFilter<"Resume"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Resume"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Resume"> | Date | string;
    userId?: Prisma.StringWithAggregatesFilter<"Resume"> | string;
};
export type ResumeCreateInput = {
    id?: string;
    title?: string;
    templateId: string;
    data: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    status?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutResumesInput;
};
export type ResumeUncheckedCreateInput = {
    id?: string;
    title?: string;
    templateId: string;
    data: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    status?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    userId: string;
};
export type ResumeUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    templateId?: Prisma.StringFieldUpdateOperationsInput | string;
    data?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutResumesNestedInput;
};
export type ResumeUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    templateId?: Prisma.StringFieldUpdateOperationsInput | string;
    data?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ResumeCreateManyInput = {
    id?: string;
    title?: string;
    templateId: string;
    data: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    status?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    userId: string;
};
export type ResumeUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    templateId?: Prisma.StringFieldUpdateOperationsInput | string;
    data?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ResumeUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    templateId?: Prisma.StringFieldUpdateOperationsInput | string;
    data?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ResumeListRelationFilter = {
    every?: Prisma.ResumeWhereInput;
    some?: Prisma.ResumeWhereInput;
    none?: Prisma.ResumeWhereInput;
};
export type ResumeOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ResumeCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    templateId?: Prisma.SortOrder;
    data?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type ResumeMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    templateId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type ResumeMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    templateId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type ResumeCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.ResumeCreateWithoutUserInput, Prisma.ResumeUncheckedCreateWithoutUserInput> | Prisma.ResumeCreateWithoutUserInput[] | Prisma.ResumeUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ResumeCreateOrConnectWithoutUserInput | Prisma.ResumeCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.ResumeCreateManyUserInputEnvelope;
    connect?: Prisma.ResumeWhereUniqueInput | Prisma.ResumeWhereUniqueInput[];
};
export type ResumeUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.ResumeCreateWithoutUserInput, Prisma.ResumeUncheckedCreateWithoutUserInput> | Prisma.ResumeCreateWithoutUserInput[] | Prisma.ResumeUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ResumeCreateOrConnectWithoutUserInput | Prisma.ResumeCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.ResumeCreateManyUserInputEnvelope;
    connect?: Prisma.ResumeWhereUniqueInput | Prisma.ResumeWhereUniqueInput[];
};
export type ResumeUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.ResumeCreateWithoutUserInput, Prisma.ResumeUncheckedCreateWithoutUserInput> | Prisma.ResumeCreateWithoutUserInput[] | Prisma.ResumeUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ResumeCreateOrConnectWithoutUserInput | Prisma.ResumeCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.ResumeUpsertWithWhereUniqueWithoutUserInput | Prisma.ResumeUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.ResumeCreateManyUserInputEnvelope;
    set?: Prisma.ResumeWhereUniqueInput | Prisma.ResumeWhereUniqueInput[];
    disconnect?: Prisma.ResumeWhereUniqueInput | Prisma.ResumeWhereUniqueInput[];
    delete?: Prisma.ResumeWhereUniqueInput | Prisma.ResumeWhereUniqueInput[];
    connect?: Prisma.ResumeWhereUniqueInput | Prisma.ResumeWhereUniqueInput[];
    update?: Prisma.ResumeUpdateWithWhereUniqueWithoutUserInput | Prisma.ResumeUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.ResumeUpdateManyWithWhereWithoutUserInput | Prisma.ResumeUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.ResumeScalarWhereInput | Prisma.ResumeScalarWhereInput[];
};
export type ResumeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.ResumeCreateWithoutUserInput, Prisma.ResumeUncheckedCreateWithoutUserInput> | Prisma.ResumeCreateWithoutUserInput[] | Prisma.ResumeUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ResumeCreateOrConnectWithoutUserInput | Prisma.ResumeCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.ResumeUpsertWithWhereUniqueWithoutUserInput | Prisma.ResumeUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.ResumeCreateManyUserInputEnvelope;
    set?: Prisma.ResumeWhereUniqueInput | Prisma.ResumeWhereUniqueInput[];
    disconnect?: Prisma.ResumeWhereUniqueInput | Prisma.ResumeWhereUniqueInput[];
    delete?: Prisma.ResumeWhereUniqueInput | Prisma.ResumeWhereUniqueInput[];
    connect?: Prisma.ResumeWhereUniqueInput | Prisma.ResumeWhereUniqueInput[];
    update?: Prisma.ResumeUpdateWithWhereUniqueWithoutUserInput | Prisma.ResumeUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.ResumeUpdateManyWithWhereWithoutUserInput | Prisma.ResumeUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.ResumeScalarWhereInput | Prisma.ResumeScalarWhereInput[];
};
export type ResumeCreateWithoutUserInput = {
    id?: string;
    title?: string;
    templateId: string;
    data: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    status?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ResumeUncheckedCreateWithoutUserInput = {
    id?: string;
    title?: string;
    templateId: string;
    data: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    status?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ResumeCreateOrConnectWithoutUserInput = {
    where: Prisma.ResumeWhereUniqueInput;
    create: Prisma.XOR<Prisma.ResumeCreateWithoutUserInput, Prisma.ResumeUncheckedCreateWithoutUserInput>;
};
export type ResumeCreateManyUserInputEnvelope = {
    data: Prisma.ResumeCreateManyUserInput | Prisma.ResumeCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type ResumeUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.ResumeWhereUniqueInput;
    update: Prisma.XOR<Prisma.ResumeUpdateWithoutUserInput, Prisma.ResumeUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.ResumeCreateWithoutUserInput, Prisma.ResumeUncheckedCreateWithoutUserInput>;
};
export type ResumeUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.ResumeWhereUniqueInput;
    data: Prisma.XOR<Prisma.ResumeUpdateWithoutUserInput, Prisma.ResumeUncheckedUpdateWithoutUserInput>;
};
export type ResumeUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.ResumeScalarWhereInput;
    data: Prisma.XOR<Prisma.ResumeUpdateManyMutationInput, Prisma.ResumeUncheckedUpdateManyWithoutUserInput>;
};
export type ResumeScalarWhereInput = {
    AND?: Prisma.ResumeScalarWhereInput | Prisma.ResumeScalarWhereInput[];
    OR?: Prisma.ResumeScalarWhereInput[];
    NOT?: Prisma.ResumeScalarWhereInput | Prisma.ResumeScalarWhereInput[];
    id?: Prisma.StringFilter<"Resume"> | string;
    title?: Prisma.StringFilter<"Resume"> | string;
    templateId?: Prisma.StringFilter<"Resume"> | string;
    data?: Prisma.JsonFilter<"Resume">;
    status?: Prisma.StringFilter<"Resume"> | string;
    createdAt?: Prisma.DateTimeFilter<"Resume"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Resume"> | Date | string;
    userId?: Prisma.StringFilter<"Resume"> | string;
};
export type ResumeCreateManyUserInput = {
    id?: string;
    title?: string;
    templateId: string;
    data: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    status?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ResumeUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    templateId?: Prisma.StringFieldUpdateOperationsInput | string;
    data?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ResumeUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    templateId?: Prisma.StringFieldUpdateOperationsInput | string;
    data?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ResumeUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    templateId?: Prisma.StringFieldUpdateOperationsInput | string;
    data?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ResumeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    templateId?: boolean;
    data?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    userId?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["resume"]>;
export type ResumeSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    templateId?: boolean;
    data?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    userId?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["resume"]>;
export type ResumeSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    templateId?: boolean;
    data?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    userId?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["resume"]>;
export type ResumeSelectScalar = {
    id?: boolean;
    title?: boolean;
    templateId?: boolean;
    data?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    userId?: boolean;
};
export type ResumeOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "title" | "templateId" | "data" | "status" | "createdAt" | "updatedAt" | "userId", ExtArgs["result"]["resume"]>;
export type ResumeInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type ResumeIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type ResumeIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $ResumePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Resume";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        title: string;
        templateId: string;
        data: runtime.JsonValue;
        status: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
    }, ExtArgs["result"]["resume"]>;
    composites: {};
};
export type ResumeGetPayload<S extends boolean | null | undefined | ResumeDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ResumePayload, S>;
export type ResumeCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ResumeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ResumeCountAggregateInputType | true;
};
export interface ResumeDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Resume'];
        meta: {
            name: 'Resume';
        };
    };
    findUnique<T extends ResumeFindUniqueArgs>(args: Prisma.SelectSubset<T, ResumeFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ResumeClient<runtime.Types.Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ResumeFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ResumeFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ResumeClient<runtime.Types.Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ResumeFindFirstArgs>(args?: Prisma.SelectSubset<T, ResumeFindFirstArgs<ExtArgs>>): Prisma.Prisma__ResumeClient<runtime.Types.Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ResumeFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ResumeFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ResumeClient<runtime.Types.Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ResumeFindManyArgs>(args?: Prisma.SelectSubset<T, ResumeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ResumeCreateArgs>(args: Prisma.SelectSubset<T, ResumeCreateArgs<ExtArgs>>): Prisma.Prisma__ResumeClient<runtime.Types.Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ResumeCreateManyArgs>(args?: Prisma.SelectSubset<T, ResumeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ResumeCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ResumeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ResumeDeleteArgs>(args: Prisma.SelectSubset<T, ResumeDeleteArgs<ExtArgs>>): Prisma.Prisma__ResumeClient<runtime.Types.Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ResumeUpdateArgs>(args: Prisma.SelectSubset<T, ResumeUpdateArgs<ExtArgs>>): Prisma.Prisma__ResumeClient<runtime.Types.Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ResumeDeleteManyArgs>(args?: Prisma.SelectSubset<T, ResumeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ResumeUpdateManyArgs>(args: Prisma.SelectSubset<T, ResumeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ResumeUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ResumeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ResumeUpsertArgs>(args: Prisma.SelectSubset<T, ResumeUpsertArgs<ExtArgs>>): Prisma.Prisma__ResumeClient<runtime.Types.Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ResumeCountArgs>(args?: Prisma.Subset<T, ResumeCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ResumeCountAggregateOutputType> : number>;
    aggregate<T extends ResumeAggregateArgs>(args: Prisma.Subset<T, ResumeAggregateArgs>): Prisma.PrismaPromise<GetResumeAggregateType<T>>;
    groupBy<T extends ResumeGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ResumeGroupByArgs['orderBy'];
    } : {
        orderBy?: ResumeGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ResumeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResumeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ResumeFieldRefs;
}
export interface Prisma__ResumeClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ResumeFieldRefs {
    readonly id: Prisma.FieldRef<"Resume", 'String'>;
    readonly title: Prisma.FieldRef<"Resume", 'String'>;
    readonly templateId: Prisma.FieldRef<"Resume", 'String'>;
    readonly data: Prisma.FieldRef<"Resume", 'Json'>;
    readonly status: Prisma.FieldRef<"Resume", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Resume", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Resume", 'DateTime'>;
    readonly userId: Prisma.FieldRef<"Resume", 'String'>;
}
export type ResumeFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ResumeSelect<ExtArgs> | null;
    omit?: Prisma.ResumeOmit<ExtArgs> | null;
    include?: Prisma.ResumeInclude<ExtArgs> | null;
    where: Prisma.ResumeWhereUniqueInput;
};
export type ResumeFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ResumeSelect<ExtArgs> | null;
    omit?: Prisma.ResumeOmit<ExtArgs> | null;
    include?: Prisma.ResumeInclude<ExtArgs> | null;
    where: Prisma.ResumeWhereUniqueInput;
};
export type ResumeFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ResumeSelect<ExtArgs> | null;
    omit?: Prisma.ResumeOmit<ExtArgs> | null;
    include?: Prisma.ResumeInclude<ExtArgs> | null;
    where?: Prisma.ResumeWhereInput;
    orderBy?: Prisma.ResumeOrderByWithRelationInput | Prisma.ResumeOrderByWithRelationInput[];
    cursor?: Prisma.ResumeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ResumeScalarFieldEnum | Prisma.ResumeScalarFieldEnum[];
};
export type ResumeFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ResumeSelect<ExtArgs> | null;
    omit?: Prisma.ResumeOmit<ExtArgs> | null;
    include?: Prisma.ResumeInclude<ExtArgs> | null;
    where?: Prisma.ResumeWhereInput;
    orderBy?: Prisma.ResumeOrderByWithRelationInput | Prisma.ResumeOrderByWithRelationInput[];
    cursor?: Prisma.ResumeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ResumeScalarFieldEnum | Prisma.ResumeScalarFieldEnum[];
};
export type ResumeFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ResumeSelect<ExtArgs> | null;
    omit?: Prisma.ResumeOmit<ExtArgs> | null;
    include?: Prisma.ResumeInclude<ExtArgs> | null;
    where?: Prisma.ResumeWhereInput;
    orderBy?: Prisma.ResumeOrderByWithRelationInput | Prisma.ResumeOrderByWithRelationInput[];
    cursor?: Prisma.ResumeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ResumeScalarFieldEnum | Prisma.ResumeScalarFieldEnum[];
};
export type ResumeCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ResumeSelect<ExtArgs> | null;
    omit?: Prisma.ResumeOmit<ExtArgs> | null;
    include?: Prisma.ResumeInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ResumeCreateInput, Prisma.ResumeUncheckedCreateInput>;
};
export type ResumeCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ResumeCreateManyInput | Prisma.ResumeCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ResumeCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ResumeSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ResumeOmit<ExtArgs> | null;
    data: Prisma.ResumeCreateManyInput | Prisma.ResumeCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ResumeIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ResumeUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ResumeSelect<ExtArgs> | null;
    omit?: Prisma.ResumeOmit<ExtArgs> | null;
    include?: Prisma.ResumeInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ResumeUpdateInput, Prisma.ResumeUncheckedUpdateInput>;
    where: Prisma.ResumeWhereUniqueInput;
};
export type ResumeUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ResumeUpdateManyMutationInput, Prisma.ResumeUncheckedUpdateManyInput>;
    where?: Prisma.ResumeWhereInput;
    limit?: number;
};
export type ResumeUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ResumeSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ResumeOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ResumeUpdateManyMutationInput, Prisma.ResumeUncheckedUpdateManyInput>;
    where?: Prisma.ResumeWhereInput;
    limit?: number;
    include?: Prisma.ResumeIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ResumeUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ResumeSelect<ExtArgs> | null;
    omit?: Prisma.ResumeOmit<ExtArgs> | null;
    include?: Prisma.ResumeInclude<ExtArgs> | null;
    where: Prisma.ResumeWhereUniqueInput;
    create: Prisma.XOR<Prisma.ResumeCreateInput, Prisma.ResumeUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ResumeUpdateInput, Prisma.ResumeUncheckedUpdateInput>;
};
export type ResumeDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ResumeSelect<ExtArgs> | null;
    omit?: Prisma.ResumeOmit<ExtArgs> | null;
    include?: Prisma.ResumeInclude<ExtArgs> | null;
    where: Prisma.ResumeWhereUniqueInput;
};
export type ResumeDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ResumeWhereInput;
    limit?: number;
};
export type ResumeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ResumeSelect<ExtArgs> | null;
    omit?: Prisma.ResumeOmit<ExtArgs> | null;
    include?: Prisma.ResumeInclude<ExtArgs> | null;
};
export {};
