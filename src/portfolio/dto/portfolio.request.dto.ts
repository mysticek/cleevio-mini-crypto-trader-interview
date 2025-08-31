import { IsNumber, IsPositive, IsString } from 'class-validator';

export class QuoteRequestDto {
  @IsString()
  symbolIn!: string;

  @IsString()
  symbolOut!: string;

  @IsNumber()
  @IsPositive()
  amountIn!: number;
}
