import { OHLCV_TYPE } from './Enums'
import Indicators from './Indicators'

describe('Indicators', () => {
  let indicators: Indicators
  beforeAll(() => {
    indicators = new Indicators('binance', 'BTC/USDT', '15m')
  })

  it('SMA', async () => {
    const values = await indicators.SMA(10, OHLCV_TYPE.O)
    expect(values.length).toBeGreaterThan(0)
  })

  it('EMA', async () => {
    const values = await indicators.EMA(10, OHLCV_TYPE.O)
    expect(values.length).toBeGreaterThan(0)
  })
})
