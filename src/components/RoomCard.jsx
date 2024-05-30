import PropTypes from 'prop-types';
import { Box, Text, Badge } from '@chakra-ui/react';

const RoomCard = ({ roomNumber, status }) => {
  const statusColor = {
    available: 'green',
    occupied: 'red',
    maintenance: 'orange'
  };

  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p="6"
      width="200px"
      height="200px"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Text fontWeight="bold" fontSize="xl">
        Quarto {roomNumber}
      </Text>
      <Badge colorScheme={statusColor[status]} mt="2">
        {status}
      </Badge>
    </Box>
  );
};

RoomCard.propTypes = {
  roomNumber: PropTypes.number.isRequired,
  status: PropTypes.oneOf(['available', 'occupied', 'maintenance']).isRequired,
};

export default RoomCard;
