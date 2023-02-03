import { render, screen} from '@testing-library/react'

import Periods from './index'

const MOCK_PERIODS = [
  {
      "number": 1,
      "name": "Today",
      "startTime": "2023-02-01T07:00:00-05:00",
      "endTime": "2023-02-01T18:00:00-05:00",
      "isDaytime": true,
      "temperature": 84,
      "temperatureUnit": "F",
      "temperatureTrend": null,
      "windSpeed": "5 to 10 mph",
      "windDirection": "W",
      "icon": "https://api.weather.gov/icons/land/day/fog/sct?size=medium",
      "shortForecast": "Areas Of Fog then Mostly Sunny",
      "detailedForecast": "Areas of fog before 8am. Mostly sunny, with a high near 84. West wind 5 to 10 mph."
  }
]

describe('Periods', () => {
  it('should render an Periods with data and image', async () => {
    render(<Periods periods={MOCK_PERIODS} />)

    expect(screen.getByRole('img').style.backgroundImage).toBe("url(https://api.weather.gov/icons/land/day/fog/sct?size=medium)")
    expect(screen.getByText('Today - 02/01/2023')).toBeDefined()
    expect(screen.getByText('84 Fº')).toBeDefined()
    expect(screen.getByText('Wind 5 to 10 mph (W)')).toBeDefined()
    expect(screen.getByText('Areas Of Fog then Mostly Sunny')).toBeDefined()
  })
})
