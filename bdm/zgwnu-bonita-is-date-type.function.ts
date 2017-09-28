export function ZgwnuIsDateTypeFunction (dataObjectKey: string): boolean  {
    return dataObjectKey.startsWith('date') || dataObjectKey.endsWith('Date')
}