"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPrismaClientClass = getPrismaClientClass;
const runtime = __importStar(require("@prisma/client/runtime/client"));
const config = {
    "previewFeatures": [
        "driverAdapters"
    ],
    "clientVersion": "7.5.0",
    "engineVersion": "280c870be64f457428992c43c1f6d557fab6e29e",
    "activeProvider": "postgresql",
    "inlineSchema": "generator client {\n  provider        = \"prisma-client\"\n  output          = \"../generated/prisma\"\n  previewFeatures = [\"driverAdapters\"]\n}\n\ndatasource db {\n  provider = \"postgresql\"\n}\n\nmodel User {\n  id          String   @id @default(cuid())\n  name        String\n  email       String   @unique\n  password    String\n  plan        String   @default(\"free\") // \"free\" | \"pro\"\n  mpPaymentId String?\n  createdAt   DateTime @default(now())\n  updatedAt   DateTime @updatedAt\n\n  resumes Resume[]\n}\n\nmodel Resume {\n  id         String   @id @default(cuid())\n  title      String   @default(\"Meu Currículo\")\n  templateId String\n  data       Json\n  status     String   @default(\"draft\") // \"draft\" | \"complete\"\n  createdAt  DateTime @default(now())\n  updatedAt  DateTime @updatedAt\n\n  userId String\n  user   User   @relation(fields: [userId], references: [id], onDelete: Cascade)\n}\n\nmodel Template {\n  id          String   @id\n  name        String\n  category    String // \"moderno\" | \"criativo\" | \"executivo\" | \"minimalista\"\n  isPremium   Boolean  @default(false)\n  description String\n  createdAt   DateTime @default(now())\n}\n",
    "runtimeDataModel": {
        "models": {},
        "enums": {},
        "types": {}
    },
    "parameterizationSchema": {
        "strings": [],
        "graph": ""
    }
};
config.runtimeDataModel = JSON.parse("{\"models\":{\"User\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"email\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"password\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"plan\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"mpPaymentId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"resumes\",\"kind\":\"object\",\"type\":\"Resume\",\"relationName\":\"ResumeToUser\"}],\"dbName\":null},\"Resume\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"title\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"templateId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"data\",\"kind\":\"scalar\",\"type\":\"Json\"},{\"name\":\"status\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"userId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"user\",\"kind\":\"object\",\"type\":\"User\",\"relationName\":\"ResumeToUser\"}],\"dbName\":null},\"Template\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"category\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"isPremium\",\"kind\":\"scalar\",\"type\":\"Boolean\"},{\"name\":\"description\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":null}},\"enums\":{},\"types\":{}}");
config.parameterizationSchema = {
    strings: JSON.parse("[\"where\",\"orderBy\",\"cursor\",\"user\",\"resumes\",\"_count\",\"User.findUnique\",\"User.findUniqueOrThrow\",\"User.findFirst\",\"User.findFirstOrThrow\",\"User.findMany\",\"data\",\"User.createOne\",\"User.createMany\",\"User.createManyAndReturn\",\"User.updateOne\",\"User.updateMany\",\"User.updateManyAndReturn\",\"create\",\"update\",\"User.upsertOne\",\"User.deleteOne\",\"User.deleteMany\",\"having\",\"_min\",\"_max\",\"User.groupBy\",\"User.aggregate\",\"Resume.findUnique\",\"Resume.findUniqueOrThrow\",\"Resume.findFirst\",\"Resume.findFirstOrThrow\",\"Resume.findMany\",\"Resume.createOne\",\"Resume.createMany\",\"Resume.createManyAndReturn\",\"Resume.updateOne\",\"Resume.updateMany\",\"Resume.updateManyAndReturn\",\"Resume.upsertOne\",\"Resume.deleteOne\",\"Resume.deleteMany\",\"Resume.groupBy\",\"Resume.aggregate\",\"Template.findUnique\",\"Template.findUniqueOrThrow\",\"Template.findFirst\",\"Template.findFirstOrThrow\",\"Template.findMany\",\"Template.createOne\",\"Template.createMany\",\"Template.createManyAndReturn\",\"Template.updateOne\",\"Template.updateMany\",\"Template.updateManyAndReturn\",\"Template.upsertOne\",\"Template.deleteOne\",\"Template.deleteMany\",\"Template.groupBy\",\"Template.aggregate\",\"AND\",\"OR\",\"NOT\",\"id\",\"name\",\"category\",\"isPremium\",\"description\",\"createdAt\",\"equals\",\"in\",\"notIn\",\"lt\",\"lte\",\"gt\",\"gte\",\"not\",\"contains\",\"startsWith\",\"endsWith\",\"title\",\"templateId\",\"status\",\"updatedAt\",\"userId\",\"string_contains\",\"string_starts_with\",\"string_ends_with\",\"array_starts_with\",\"array_ends_with\",\"array_contains\",\"email\",\"password\",\"plan\",\"mpPaymentId\",\"every\",\"some\",\"none\",\"is\",\"isNot\",\"connectOrCreate\",\"upsert\",\"createMany\",\"set\",\"disconnect\",\"delete\",\"connect\",\"updateMany\",\"deleteMany\"]"),
    graph: "kAEaMAwEAABnACA8AABlADA9AAAJABA-AABlADA_AQAAAAFAAQBaACFEQABcACFTQABcACFbAQAAAAFcAQBaACFdAQBaACFeAQBmACEBAAAAAQAgDAMAAGoAIAsAAGkAIDwAAGgAMD0AAAMAED4AAGgAMD8BAFoAIURAAFwAIVABAFoAIVEBAFoAIVIBAFoAIVNAAFwAIVQBAFoAIQEDAACKAQAgDAMAAGoAIAsAAGkAIDwAAGgAMD0AAAMAED4AAGgAMD8BAAAAAURAAFwAIVABAFoAIVEBAFoAIVIBAFoAIVNAAFwAIVQBAFoAIQMAAAADACABAAAEADACAAAFACABAAAAAwAgAQAAAAEAIAwEAABnACA8AABlADA9AAAJABA-AABlADA_AQBaACFAAQBaACFEQABcACFTQABcACFbAQBaACFcAQBaACFdAQBaACFeAQBmACECBAAAiQEAIF4AAHYAIAMAAAAJACABAAAKADACAAABACADAAAACQAgAQAACgAwAgAAAQAgAwAAAAkAIAEAAAoAMAIAAAEAIAkEAACIAQAgPwEAAAABQAEAAAABREAAAAABU0AAAAABWwEAAAABXAEAAAABXQEAAAABXgEAAAABAQsAAA4AIAg_AQAAAAFAAQAAAAFEQAAAAAFTQAAAAAFbAQAAAAFcAQAAAAFdAQAAAAFeAQAAAAEBCwAAEAAwAQsAABAAMAkEAAB7ACA_AQBuACFAAQBuACFEQABwACFTQABwACFbAQBuACFcAQBuACFdAQBuACFeAQB6ACECAAAAAQAgCwAAEwAgCD8BAG4AIUABAG4AIURAAHAAIVNAAHAAIVsBAG4AIVwBAG4AIV0BAG4AIV4BAHoAIQIAAAAJACALAAAVACACAAAACQAgCwAAFQAgAwAAAAEAIBIAAA4AIBMAABMAIAEAAAABACABAAAACQAgBAUAAHcAIBgAAHkAIBkAAHgAIF4AAHYAIAs8AABgADA9AAAcABA-AABgADA_AQBPACFAAQBPACFEQABRACFTQABRACFbAQBPACFcAQBPACFdAQBPACFeAQBhACEDAAAACQAgAQAAGwAwFwAAHAAgAwAAAAkAIAEAAAoAMAIAAAEAIAEAAAAFACABAAAABQAgAwAAAAMAIAEAAAQAMAIAAAUAIAMAAAADACABAAAEADACAAAFACADAAAAAwAgAQAABAAwAgAABQAgCQMAAHUAIAuAAAAAAT8BAAAAAURAAAAAAVABAAAAAVEBAAAAAVIBAAAAAVNAAAAAAVQBAAAAAQELAAAkACAIC4AAAAABPwEAAAABREAAAAABUAEAAAABUQEAAAABUgEAAAABU0AAAAABVAEAAAABAQsAACYAMAELAAAmADAJAwAAdAAgC4AAAAABPwEAbgAhREAAcAAhUAEAbgAhUQEAbgAhUgEAbgAhU0AAcAAhVAEAbgAhAgAAAAUAIAsAACkAIAgLgAAAAAE_AQBuACFEQABwACFQAQBuACFRAQBuACFSAQBuACFTQABwACFUAQBuACECAAAAAwAgCwAAKwAgAgAAAAMAIAsAACsAIAMAAAAFACASAAAkACATAAApACABAAAABQAgAQAAAAMAIAMFAABxACAYAABzACAZAAByACALCwAAXgAgPAAAXQAwPQAAMgAQPgAAXQAwPwEATwAhREAAUQAhUAEATwAhUQEATwAhUgEATwAhU0AAUQAhVAEATwAhAwAAAAMAIAEAADEAMBcAADIAIAMAAAADACABAAAEADACAAAFACAJPAAAWQAwPQAAOAAQPgAAWQAwPwEAAAABQAEAWgAhQQEAWgAhQiAAWwAhQwEAWgAhREAAXAAhAQAAADUAIAEAAAA1ACAJPAAAWQAwPQAAOAAQPgAAWQAwPwEAWgAhQAEAWgAhQQEAWgAhQiAAWwAhQwEAWgAhREAAXAAhAAMAAAA4ACABAAA5ADACAAA1ACADAAAAOAAgAQAAOQAwAgAANQAgAwAAADgAIAEAADkAMAIAADUAIAY_AQAAAAFAAQAAAAFBAQAAAAFCIAAAAAFDAQAAAAFEQAAAAAEBCwAAPQAgBj8BAAAAAUABAAAAAUEBAAAAAUIgAAAAAUMBAAAAAURAAAAAAQELAAA_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-AABlADA_AQBaACFAAQBaACFEQABcACFTQABcACFbAQBaACFcAQBaACFdAQBaACFeAQBmACFiAAAJACBjAAAJACAAAAABZwEAAAABAWcgAAAAAQFnQAAAAAEAAAAFEgAAjAEAIBMAAI8BACBkAACNAQAgZQAAjgEAIGoAAAEAIAMSAACMAQAgZAAAjQEAIGoAAAEAIAAAAAABZwEAAAABCxIAAHwAMBMAAIEBADBkAAB9ADBlAAB-ADBmAAB_ACBnAACAAQAwaAAAgAEAMGkAAIABADBqAACAAQAwawAAggEAMGwAAIMBADAHC4AAAAABPwEAAAABREAAAAABUAEAAAABUQEAAAABUgEAAAABU0AAAAABAgAAAAUAIBIAAIcBACADAAAABQAgEgAAhwEAIBMAAIYBACABCwAAiwEAMAwDAABqACALAABpACA8AABoADA9AAADABA-AABoADA_AQAAAAFEQABcACFQAQBaACFRAQBaACFSAQBaACFTQABcACFUAQBaACECAAAABQAgCwAAhgEAIAIAAACEAQAgCwAAhQEAIAsLAABpACA8AACDAQAwPQAAhAEAED4AAIMBADA_AQBaACFEQABcACFQAQBaACFRAQBaACFSAQBaACFTQABcACFUAQBaACELCwAAaQAgPAAAgwEAMD0AAIQBABA-AACDAQAwPwEAWgAhREAAXAAhUAEAWgAhUQEAWgAhUgEAWgAhU0AAXAAhVAEAWgAhBwuAAAAAAT8BAG4AIURAAHAAIVABAG4AIVEBAG4AIVIBAG4AIVNAAHAAIQcLgAAAAAE_AQBuACFEQABwACFQAQBuACFRAQBuACFSAQBuACFTQABwACEHC4AAAAABPwEAAAABREAAAAABUAEAAAABUQEAAAABUgEAAAABU0AAAAABBBIAAHwAMGQAAH0AMGYAAH8AIGoAAIABADAAAgQAAIkBACBeAAB2ACAHC4AAAAABPwEAAAABREAAAAABUAEAAAABUQEAAAABUgEAAAABU0AAAAABCD8BAAAAAUABAAAAAURAAAAAAVNAAAAAAVsBAAAAAVwBAAAAAV0BAAAAAV4BAAAAAQIAAAABACASAACMAQAgAwAAAAkAIBIAAIwBACATAACQAQAgCgAAAAkAIAsAAJABACA_AQBuACFAAQBuACFEQABwACFTQABwACFbAQBuACFcAQBuACFdAQBuACFeAQB6ACEIPwEAbgAhQAEAbgAhREAAcAAhU0AAcAAhWwEAbgAhXAEAbgAhXQEAbgAhXgEAegAhAgQGAgUAAwEDAAEBBAcAAAAAAwUACBgACRkACgAAAAMFAAgYAAkZAAoBAwABAQMAAQMFAA8YABAZABEAAAADBQAPGAAQGQARAAAAAwUAFxgAGBkAGQAAAAMFABcYABgZABkGAgEHCAEICwEJDAEKDQEMDwENEQQOEgUPFAEQFgQRFwYUGAEVGQEWGgQaHQcbHgscHwIdIAIeIQIfIgIgIwIhJQIiJwQjKAwkKgIlLAQmLQ0nLgIoLwIpMAQqMw4rNBIsNhMtNxMuOhMvOxMwPBMxPhMyQAQzQRQ0QxM1RQQ2RhU3RxM4SBM5SQQ6TBY7TRo"
};
async function decodeBase64AsWasm(wasmBase64) {
    const { Buffer } = await Promise.resolve().then(() => __importStar(require('node:buffer')));
    const wasmArray = Buffer.from(wasmBase64, 'base64');
    return new WebAssembly.Module(wasmArray);
}
config.compilerWasm = {
    getRuntime: async () => await Promise.resolve().then(() => __importStar(require("@prisma/client/runtime/query_compiler_fast_bg.postgresql.js"))),
    getQueryCompilerWasmModule: async () => {
        const { wasm } = await Promise.resolve().then(() => __importStar(require("@prisma/client/runtime/query_compiler_fast_bg.postgresql.wasm-base64.js")));
        return await decodeBase64AsWasm(wasm);
    },
    importName: "./query_compiler_fast_bg.js"
};
function getPrismaClientClass() {
    return runtime.getPrismaClient(config);
}
//# sourceMappingURL=class.js.map