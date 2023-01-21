import {screen, render, waitFor, cleanup, fireEvent, getByTestId} from '@testing-library/react';
import TodoIndex from './index';
// test.afterEach(cleanup)
test ('todo test', async()=> {
    render(<TodoIndex />)
   await screen.findByRole('heading')
   expect(screen.getByRole('heading')).toHaveTextContent('Todo App without Redux')
   expect(screen.getByRole('button')).toBeInTheDocument();
})
test ('No task found', async()=> {
    render(<TodoIndex />)
    expect(screen.getByTestId('noTask')).toBeInTheDocument();
    expect(screen.getByText('No task found')).toBeInTheDocument();
})

test('add value in click button', async()=> {
    render(<TodoIndex />);
    // fireEvent.click()
})