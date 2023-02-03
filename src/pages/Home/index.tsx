import { useState } from 'react';

import SearchForm from '../../components/SearchForm';
import Periods from '../../components/Periods';
import Loading from '../../components/Loading';
import Alert from '../../components/Alert';

import { getWeather } from '../../utils/getWeather';
import { IPeriods } from '../../utils/types';

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [periods, setPeriods] = useState<IPeriods[]>([]);

  const handleSearch = async (
    address: string,
    city: string,
    state: string,
  ) => {
    setLoading(true);
    setError('')

    const weather = await getWeather(address, city, state);
    setLoading(false);

    if (weather.error) {
      return setError(`${weather.data}`);
    }

    setPeriods(weather.data as IPeriods[]);
  };

  return (
    <>
      <SearchForm onSubmit={handleSearch} loading={loading} />

      {error && <Alert text={error} />}

      {loading && <Loading />}

      {!loading && periods.length > 1 && <Periods periods={periods} />}
    </>
  );
};

export default Home;
