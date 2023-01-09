import { Injectable } from '@nestjs/common';
import { Contract } from './contract.entity';

@Injectable()
export class ContractService {
  private contracts: Contract[] = [];

  create(contract: Contract) {
    this.contracts.push(contract);
  }

  findAll(): Contract[] {
    return this.contracts;
  }
}
