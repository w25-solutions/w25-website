import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Header from "@/components/header/header";

test('contains the necessary links', () => {
    render(<Header />);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Company')).toBeInTheDocument();
    expect(screen.getByText('Services')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
});

test('contains a quotation button', () => {
    render(<Header />);
    const button = screen.getByRole('button', { name: 'Quotation' });
    expect(button).toBeInTheDocument();
});
