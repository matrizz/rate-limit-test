import { RadioCanadaBig } from '../layout';

type TextElements = PreProps
    | SpanProps
    | ButtonProps
    | AnchorProps
    | ParagraphProps
    | HeadingProps
    ;

type PreProps = React.ComponentProps<'pre'> & { as: 'pre' }
type ButtonProps = React.ComponentProps<'button'> & { as: 'button' }
type AnchorProps = React.ComponentProps<'a'> & { as: 'a' }
type ParagraphProps = React.ComponentProps<'p'> & { as?: 'p' }
type SpanProps = React.ComponentProps<'span'> & { as: 'span' }
type HeadingProps = React.ComponentProps<'h1'> & { as: 'h1' }


type CustomComponentProps = TextElements


const FontProviderComponent: React.FC<CustomComponentProps> = (props) => {

    const { as = 'p', className, ...restProps } = props

    if (as === 'a') {
        return <a className={RadioCanadaBig.className+' '+className} {...(restProps as React.ComponentProps<'a'>)} />;
    }
    else if (as === 'p') {
        return <p className={RadioCanadaBig.className+' '+className} {...(restProps as React.ComponentProps<'p'>)} />;
    }
    else if (as === 'button') {
        return <button className={RadioCanadaBig.className+' '+className} {...(restProps as React.ComponentProps<'button'>)} />;
    }
    else if (as === 'h1') {
        return <h1 className={RadioCanadaBig.className+' '+className} {...(restProps as React.ComponentProps<'h1'>)} />;
    }
    else if (as === 'pre') {
        return <pre className={RadioCanadaBig.className+' '+className} {...(restProps as React.ComponentProps<'pre'>)} />;
    }
    else {
        return <span className={RadioCanadaBig.className+' '+className} {...(restProps as React.ComponentProps<'span'>)} />;
    }
};

export default FontProviderComponent
