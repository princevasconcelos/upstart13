import { useState } from 'react';

import Input from '../Input';
import Button from '../Button';

import { Container, Form } from './styles';

interface SearchFormProps {
  onSubmit: (address: string, city: string, state: string) => void;
  loading: boolean
}

const SearchForm = ({ onSubmit, loading }: SearchFormProps) => {
  const [address, setAddress] = useState('4151 W Oak Ridge Rd');
  const [state, setState] = useState('Florida');
  const [city, setCity] = useState('Orlando');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    if (!city || !address || !state) {
      return;
    }

    onSubmit(address, city, state);
  };

  return (
    <Container>
      <Form onSubmit={handleSearch}>
        <Input
          name="Address"
          value={address}
          onChange={(e) => setAddress(e)}
          placeholder="Type your address"
          required
        />
        <Input
          name="City"
          value={city}
          onChange={(e) => setCity(e)}
          placeholder="Type your city"
          required
        />
        <Input
          name="State"
          value={state}
          onChange={(e) => setState(e)}
          placeholder="Type your state"
          required
        />
        <Button disabled={loading}>Search</Button>
      </Form>
    </Container>
  );
};

export default SearchForm;
