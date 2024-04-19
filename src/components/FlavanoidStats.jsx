import { Table } from '@mantine/core';
import { flavanoidStatsByAlcohol } from '../utils/Calculate.Flavanoid.js';

const FlavanoidsTable = () => {


  const tableHeaders = Object.keys(flavanoidStatsByAlcohol).map((alcohol) => (
    <Table.Th key={alcohol}>Alcohol {alcohol}</Table.Th>
  ));

  const tableBody = ['Mean', 'Median', 'Mode'].map((measure) => (
    <Table.Tr key={measure}>
      <Table.Td>{measure}</Table.Td>
      {Object.values(flavanoidStatsByAlcohol).map((stats, index) => (
        <Table.Td key={index}>{stats[measure.toLowerCase()]}</Table.Td>
      ))}
    </Table.Tr>
  ));

  return (
    <Table.ScrollContainer minWidth={500}>
      <Table striped highlightOnHover withTableBorder withColumnBorders>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Measure</Table.Th>
            {tableHeaders}
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{tableBody}</Table.Tbody>
      </Table>
    </Table.ScrollContainer>
  );
};

export default FlavanoidsTable;
