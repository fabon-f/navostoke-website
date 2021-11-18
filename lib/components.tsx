import React from "https://deno.land/x/react_deno@17.0.2/react.ts";

export const ExternalLink = ({href, icon = true, children, ...props}: { href: string, icon?: boolean, children: React.ReactNode }) => {
    // https://iconmonstr.com/external-link-thin-svg/
    const iconElement = <svg xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 24 22" height="0.9em" width="0.9em" aria-hidden="true" fill="currentColor" style={{verticalAlign:"text-bottom"}}><path d="M14 4h-13v18h20v-11h1v12h-22v-20h14v1zm10 5h-1v-6.293l-11.646 11.647-.708-.708 11.647-11.646h-6.293v-1h8v8z"/></svg>;
    return <a href={href} target="_blank" rel="noopener noreferrer">{children}{icon && iconElement}</a>;
}

export const WebpImage = ({ width, height, src, alt }: { width?: string|number, height?: string|number, src: string, alt?: string }) =>
    <picture>
        <source srcSet={`${src}.webp`} width={width} height={height} type="image/webp" />
        <source srcSet={`${src}.png`} width={width} height={height} type="image/png" />
        <img src={`${src}.png`} width={width} height={height} alt={alt} />
    </picture>;
