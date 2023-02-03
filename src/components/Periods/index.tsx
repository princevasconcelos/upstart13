import covertDate from '../../utils/format';

import { Container } from './styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import { IPeriods } from '../../utils/types';

const Periods = (props: { periods: IPeriods[] }) => {
  return (
    <>
      <Container id="container-cards">

        {props.periods.map((item) => {
          return (
            <Card key={item.number} id={`card-${item.number}`} variant="outlined" sx={{ maxWidth: 345 }}>
              <CardMedia
                  sx={{ height: 140, backgroundSize: 'contain', marginTop: '16px' }}
                  image={item.icon}
                  title={item.name}
                />
              <CardContent>
                <Typography align="center" gutterBottom variant="h5" component="div">
                  {item.name} - {covertDate(item.startTime)}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.temperature} {item.temperatureUnit}º
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Wind {item.windSpeed} ({item.windDirection})
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.shortForecast}
                </Typography>
              </CardContent>
            </Card>
          );;
        })}
      </Container>
    </>
  );
};

export default Periods;
