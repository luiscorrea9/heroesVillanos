import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { HeroesVillanos } from "@prisma/client"


@Injectable()
export class heroesVillanosService{

    constructor(private prisma: PrismaService){}


    async getAllCharacter(): Promise<HeroesVillanos[]>{
        return this.prisma.heroesVillanos.findMany();
    } 

    async getCharacterById(id: number): Promise<HeroesVillanos>{
        return this.prisma.heroesVillanos.findUnique({
            where: {
                id
            }
        });
    } 

    async createHeroeVillanos(data: HeroesVillanos): Promise<HeroesVillanos>{
        return this.prisma.heroesVillanos.create({
            data
        });
    } 

    async updateHeroesVillanos(id: number ,data: HeroesVillanos): Promise<HeroesVillanos>{
        return this.prisma.heroesVillanos.update({
            where: {
                id
            },
            data
        });
    } 

    async deleteHeroesVillanos(id: number): Promise<HeroesVillanos>{
        return this.prisma.heroesVillanos.delete({
            where: {
                id
            },
            
        });
    } 
}