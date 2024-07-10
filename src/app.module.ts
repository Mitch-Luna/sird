import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './modules/database/database.module';
import { ProfessionsModule } from './modules/professions/profession.module';
import { GradesModule } from './modules/grades/grades.module';
import { GenderModule } from './modules/gender/gender.module';
import { AcademicLevelModule } from './modules/academiclevel/academiclevel.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    DatabaseModule,
    ProfessionsModule,
    GradesModule,
    GenderModule,
    AcademicLevelModule

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
