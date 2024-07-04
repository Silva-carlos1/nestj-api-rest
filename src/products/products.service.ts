import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ProductsService {
  constructor(private PrismaService: PrismaService) {}

  create(createProductDto: CreateProductDto) {
    return this.PrismaService.product.create({
      data: {
        ...createProductDto,
        quantity: 0,
      },
    });
  }

  findAll() {
    return this.PrismaService.product.findMany();
  }

  findOne(id: number) {
    return this.PrismaService.product.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
