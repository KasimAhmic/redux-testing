export const currencyFormatter = new Intl.NumberFormat('en-us', { style: 'currency', currency: 'USD' });

export const formatCurrency = (value: number): string => currencyFormatter.format(value);
