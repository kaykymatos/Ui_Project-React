import { Button } from '@mui/material';
import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useAppDrawerContext } from '../shared/contexts';
import { useAppThemeContext } from '../shared/contexts/ThemeContext';

export const AppRoutes = () => {
  const { toggleDrawerOpen, setDrawerOptions } = useAppDrawerContext();

  useEffect(() => {
    setDrawerOptions([

      {
        label:"Página Inicial",
        path:"/pagina-inicial",
        icon:"home"
      }
    ]);
  }, []);
  return (
    <Routes>
      <Route path='/pagina-inicial' element={<Button variant='contained' color='primary' onClick={toggleDrawerOpen}>Teste</Button>} />
      <Route path='*' element={<Navigate to='/pagina-inicial' />} />
    </Routes>
  );
};