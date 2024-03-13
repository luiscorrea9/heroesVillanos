import { Controller, Get, Post, Body, Param, Delete, Put, NotFoundException, BadRequestException } from "@nestjs/common";
import { heroesVillanosService } from "./heroesVillanos.service";
import { HeroesVillanos } from "@prisma/client"



@Controller('heroesVillanos')
export class heroesVillanosController{
    constructor(private heroesVillanosService: heroesVillanosService){}

    @Get()
    getAllCharacter(){
        return this.heroesVillanosService.getAllCharacter()
    }

    @Post()
    async createHeroesVillanos(@Body() data: HeroesVillanos) {

        if (!['heroe', 'villano'].includes(data.character_type)) {
            throw new BadRequestException('Character must be hero or villain');
        }
        return this.heroesVillanosService.createHeroeVillanos(data)
    }


    @Get(':id')
    async getCharacterById(@Param('id') id: string){
        const characteFound = await this.heroesVillanosService.getCharacterById(Number(id))
        if(!characteFound) throw new NotFoundException('Charaster does not exit')
        return characteFound
    }

    @Delete(':id')
    async deleteHeroesVillanos(@Param('id') id: string){
        try {
            return await this.heroesVillanosService.deleteHeroesVillanos(Number(id))
        } catch (error) {
            throw new NotFoundException('Charaster does not exit')
        }
    }

    @Put(':id')
    async updateHeroesVillanos(@Param('id') id: string, @Body() data: HeroesVillanos){
        try {
            return await this.heroesVillanosService.updateHeroesVillanos(Number(id),data)
        } catch (error) {
            throw new NotFoundException('Charaster does not exit')
        }
    }

}


