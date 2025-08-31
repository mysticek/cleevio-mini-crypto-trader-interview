import { Module } from '@nestjs/common';
import { TokensModule } from './tokens/tokens.module';
import { PortfolioModule } from './portfolio/portfolio.module';
import { QuotesModule } from './quotes/quotes.module';

@Module({
  imports: [TokensModule, PortfolioModule, QuotesModule],
})
export class AppModule {}
