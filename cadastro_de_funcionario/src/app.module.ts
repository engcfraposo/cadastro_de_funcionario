import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployerModule } from './employer/employer.module';
import { Employer } from './employer/entities/employer.entity';
import { EmployerGraphModule } from './employer-graph/employer-graph.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'employer.sqlite',
      synchronize: true,
      logging: true,
      entities: [Employer],
    }),
    EmployerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
