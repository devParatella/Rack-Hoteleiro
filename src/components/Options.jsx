import useState from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Input, FormControl, FormLabel } from '@chakra-ui/react';

const Options = ({ onApply }) => {
  const [start, setStart] = useState(101);
  const [end, setEnd] = useState(105);

  const handleApply = () => {
    onApply(start, end);
  };

  return (
    <Box borderWidth="1px" borderRadius="lg" p="4" mb="4">
      <FormControl id="start-room">
        <FormLabel>Número inicial do quarto</FormLabel>
        <Input
          type="number"
          value={start}
          onChange={(e) => setStart(parseInt(e.target.value))}
        />
      </FormControl>
      <FormControl id="end-room" mt="4">
        <FormLabel>Número final do quarto</FormLabel>
        <Input
          type="number"
          value={end}
          onChange={(e) => setEnd(parseInt(e.target.value))}
        />
      </FormControl>
      <Button mt="4" colorScheme="blue" onClick={handleApply}>
        Aplicar
      </Button>
    </Box>
  );
};

Options.propTypes = {
  onApply: PropTypes.func.isRequired,
};

export default Options;
