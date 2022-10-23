import { render } from '@testing-library/react';
import { Annotations } from './Annotations';

describe('Annotations', () => {
    it('renders', () => {
        const { asFragment, getByText } = render(<Annotations title="foo" />);
        expect(asFragment()).toMatchSnapshot();
        expect(getByText('foo')).toBeInTheDocument();
    });
});
