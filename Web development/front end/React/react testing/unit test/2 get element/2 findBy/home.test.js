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
    const linkElement = await screen.findByText(/akbar/i);
    expect(linkElement).toBeInTheDocument();
  });


  test('renders learn react link', async () => {
    render(<Home name = "akbar"/>);
    const linkElement = await screen.queryByText(/dddd/i);
    expect(linkElement).not.toBeInTheDocument();
  });


  test('renders learn react link', async () => {
    render(<Home name = "akbar"/>);
    const headingElements = await screen.getAllByRole('heading');
    expect(headingElements.length).toBe(3);
  });


