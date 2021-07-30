import { useContext } from 'react';
import DataContext from 'contexts/DataContext';

const useDataContext = () => {
  return useContext(DataContext);
};

export default useDataContext;
