import { render, screen } from '@testing-library/react';
import App from './App';

it("should render message in given component", () =>{

  const component = render(<App/>);

  const value = component.getByTestId("welcome");

  expect(value).toHaveTextContent("Welcome to todo list app..")
})
