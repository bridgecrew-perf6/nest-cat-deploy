"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AwsModule = void 0;
const common_1 = require("@nestjs/common");
const aws_service_1 = require("./aws.service");
const mongoose_1 = require("@nestjs/mongoose");
const cats_schema_1 = require("../cats/cats.schema");
const cats_module_1 = require("../cats/cats.module");
let AwsModule = class AwsModule {
};
AwsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            cats_module_1.CatsModule,
            mongoose_1.MongooseModule.forFeature([{ name: cats_schema_1.Cat.name, schema: cats_schema_1.CatSchema }]),
        ],
        providers: [aws_service_1.AwsService],
        exports: [aws_service_1.AwsService],
    })
], AwsModule);
exports.AwsModule = AwsModule;
//# sourceMappingURL=aws.module.js.map