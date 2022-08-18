import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEmployerDto } from './dto/create-employer.dto';
import { UpdateEmployerDto } from './dto/update-employer.dto';
import { Employer } from './entities/employer.entity';

@Injectable()
export class EmployerService {
  constructor(
    @InjectRepository(Employer)
    private readonly employerRepository: Repository<Employer>,
  ) {}

  create(createEmployerDto: CreateEmployerDto) {
    return this.employerRepository.insert(createEmployerDto);
  }

  findAll() {
    return this.employerRepository.find();
  }

  findOne(id: number) {
    return this.employerRepository.findOneBy({ id });
  }

  update(id: number, updateEmployerDto: UpdateEmployerDto) {
    return this.employerRepository.update(id, updateEmployerDto);
  }

  async remove(id: number) {
    await this.employerRepository.delete(id);
  }
}
