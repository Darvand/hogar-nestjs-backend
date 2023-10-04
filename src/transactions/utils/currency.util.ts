const formatter = new Intl.NumberFormat('es-CO', {
  style: 'currency',
  currency: 'COP',
  maximumFractionDigits: 0,
  minimumFractionDigits: 0,
});

export class CurrencyUtil {
  static toCOP(amount: number): string {
    return formatter.format(+amount);
  }
}
