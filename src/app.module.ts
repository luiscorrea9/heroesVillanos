import { Module } from '@nestjs/common';
import { heroesVillanosModule } from './heroesVillanos/heroesVillanos.module';



@Module({
  imports: [heroesVillanosModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
