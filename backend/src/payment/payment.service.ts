import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Payment } from './payment.entity';


@Injectable()
export class PaymentService {
constructor(@InjectRepository(Payment)private paymentRepository: Repository<Payment>,) {}

findAll(): Promise<Payment[]> {
    return this.paymentRepository.find();
  }
        
  findOne(id: number): Promise<Payment> {
    return this.paymentRepository.findOneBy({ id: id });
  }
        
  async create(body: any): Promise<Payment[]> {
    const payment = this.paymentRepository.create(body);
    return this.paymentRepository.save(payment);
  }
        
  async update(id: number, body: any): Promise<Payment> {
    await this.paymentRepository.update(id, body);
    return this.paymentRepository.findOneBy({ id: id });
  }
        
  async remove(id: number): Promise<void> {
    await this.paymentRepository.delete(id);
  }
}
 