import { render } from '@testing-library/react';
import { PostCss } from './PostCss';

describe('PostCss', () => {
    it('renders', () => {
        const { asFragment } = render(<PostCss />);
        expect(asFragment()).toMatchSnapshot();
    });
});
