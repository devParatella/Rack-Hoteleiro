import useState from 'react';
import { SimpleGrid, Box, Heading, Button } from '@chakra-ui/react';
import RoomCard from './components/RoomCard';
import Options from './components/Options';

const allRooms = [
  { roomNumber: 101, status: 'available' },
  { roomNumber: 102, status: 'occupied' },
  { roomNumber: 103, status: 'maintenance' },
  { roomNumber: 104, status: 'available' },
  { roomNumber: 105, status: 'occupied' },
  { roomNumber: 106, status: 'available' },
  { roomNumber: 107, status: 'occupied' }
];

const App = () => {
  const [rooms, setRooms] = useState(allRooms);
  const [showOptions, setShowOptions] = useState(false);

  const handleApplyOptions = (start, end) => {
    const filteredRooms = allRooms.filter(
      (room) => room.roomNumber >= start && room.roomNumber <= end
    );
    setRooms(filteredRooms);
    setShowOptions(false);
  };

  return (
    <Box p="5">
      <Heading mb="6">Rack de Hotelaria</Heading>
      <Button mb="4" onClick={() => setShowOptions(!showOptions)}>
        Opções
      </Button>
      {showOptions && <Options onApply={handleApplyOptions} />}
      <SimpleGrid columns={[1, null, 3]} spacing="6">
        {rooms.map((room) => (
          <RoomCard key={room.roomNumber} roomNumber={room.roomNumber} status={room.status} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default App;
