import { Module } from "@nestjs/common";
import { heroesVillanosController } from "./heroesVillanos.controller";
import { heroesVillanosService } from "./heroesVillanos.service";
import { PrismaModule } from "src/prisma/prisma.module";


@Module({
    controllers: [heroesVillanosController],
    providers: [heroesVillanosService],
    imports: [PrismaModule]

})
export class heroesVillanosModule{}