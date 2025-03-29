import { TextInput } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';

interface SearchProps {
  query: string;
  setQuery: (query: string) => void;
}

export function Search({ query, setQuery }: SearchProps) {
  return (
    <TextInput
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Search..."
      className="mb-4"
      rightSection={<IconSearch size={18} />}
    />
  );
}