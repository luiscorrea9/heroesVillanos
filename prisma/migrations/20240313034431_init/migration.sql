-- CreateEnum
CREATE TYPE "CharacterType" AS ENUM ('heroe', 'villano');

-- CreateTable
CREATE TABLE "HeroesVillanos" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "character_type" "CharacterType" NOT NULL,
    "image" TEXT NOT NULL,
    "power" TEXT NOT NULL,

    CONSTRAINT "HeroesVillanos_pkey" PRIMARY KEY ("id")
);
