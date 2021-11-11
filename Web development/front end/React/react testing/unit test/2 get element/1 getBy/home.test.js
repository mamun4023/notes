import { render, screen } from '@testing-library/react';
import Home from './home';

// test('renders learn react link', async () => {
//   render(<Home name = "akbar"/>);
//   const linkElement = screen.getByText(/akbar/i);
//   expect(linkElement).toBeInTheDocument();
// });
 

// test('renders learn react link', async () => {
//     render(<Home name = "akbar"/>);
//     const linkElement = screen.getByRole('heading');
//     expect(linkElement).toBeInTheDocument();
//   });



// test('renders learn react link', async () => {
//     render(<Home name = "akbar"/>);
//     const linkElement = screen.getByTitle('Header');
//     expect(linkElement).toBeInTheDocument();
//   });


  test('renders learn react link', async () => {
    render(<Home name = "akbar"/>);
    const linkElement = screen.getByTestId('header-1');
    expect(linkElement).toBeInTheDocument();
  });
