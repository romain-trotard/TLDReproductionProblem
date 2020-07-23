import React from 'react';
import { render } from '@testing-library/react';
import { getAllByLabelText } from '@testing-library/dom';

function TestComponent() {
    return (
        <div
            aria-labelledby="dropdown-dropaction"
        >
            <button
                id="dropaction"
            >
                <span
                    id="dropdown-dropaction"
                >
                    global.more.action
                </span>
            </button>
            <div
                aria-labelledby="dropaction"
            >
                A div element
            </div>
        </div>
    );
}

it('getAllByLabelText', () => {
    const { container } = render(<TestComponent />);
    const selectedElements = getAllByLabelText(container, 'global.more.action');
    expect(selectedElements).toHaveLength(1);
});

