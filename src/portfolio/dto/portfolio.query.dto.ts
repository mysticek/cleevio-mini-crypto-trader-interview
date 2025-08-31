import { IsOptional, IsString } from 'class-validator';

export class PortfolioQueryDto {
  @IsString()
  address!: string;

  @IsOptional()
  minUsd?: number;
}
