# Mini Crypto Tracker

Projekt obsahuje pripravené NestJS moduly a mock dáta v JSON súboroch (tokens, prices, transfers).

## Úloha

Úlohou je doprogramovať logiku tak, aby fungovali nasledujúce endpointy:

## General

- Pridaj swagger UI

## 🪙 Tokens API

**Endpoint:** `GET /tokens`

- Načíta zoznam tokenov z `tokens.json`
- Doplní k nim USD cenu z `prices.json`

## 💼 Portfolio API

**Endpoint:** `GET /portfolio?address=alice&minUsd=0`

- Spočíta zostatky z `transfers.json` pre danú adresu
- Prepočíta hodnotu do USD podľa `prices.json`
- Výsledok zoradí podľa hodnoty od najväčšej po najmenšiu
- Ak je zadaný parameter `minUsd`, vynechá položky s nižšou hodnotou

## Primitive x-api-key guard

- Pridaj na endpoint /portfolio guard, ktory bude checkovat x-api-key v headers
- API_KEY bude uložený v .env a načítany cez ConfigService

## 💱 Quote API

**Endpoint:** `POST /quotes`

**Body:**

```json
{
  "symbolIn": "ETH",
  "symbolOut": "USDC",
  "amountIn": 0.5
}
```

- Používa ceny z `prices.json`
- Vypočíta výstup s logikou:
  - **fee:** 0.3%
  - **extra slippage:** `min(0.2%, amountIn/100)`

**Vzorec:**

```
amountOut = amountIn × priceInUsd / priceOutUsd × (1 - fee - extra)
minOut = amountOut × 0.995
```
