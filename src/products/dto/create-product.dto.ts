import {
  MaxLength,
  IsNotEmpty,
  IsString,
  IsPositive,
  IsNumber,
} from 'class-validator';

export class CreateProductDto {
  @MaxLength(225)
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsPositive()
  @IsNumber({ maxDecimalPlaces: 2 })
  @IsNotEmpty()
  price: number;
}
