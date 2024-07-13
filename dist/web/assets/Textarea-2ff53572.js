import{n as e,A as a,f as r,k as s}from"./index-0069131d.js";const t=e.textarea`
    box-shadow: 0 0 10px inset ${()=>a.schema.COLOR_YELLOW.rgba(.03)};
    border: 1px solid ${()=>a.schema.COLOR_WHITE.rgba(.16)};
    color: ${()=>a.schema.COLOR_WHITE.rgba()};
    font-family: ${()=>a.schema.FONT_MEDIUM};
    border-color: 1px solid transparent;
    background-color: transparent;
    backdrop-filter: blur(5px);
    position: relative;
    overflow: auto;
    outline: none;
    padding: 15px;
    resize: none;

    &:hover, &:active, &:focus {
        box-shadow: 0 0 15px inset ${()=>a.schema.COLOR_YELLOW.rgba(.1)};
    }

    &:focus {
        border-color: ${()=>a.schema.COLOR_YELLOW.rgba(.7)};
    }

    ${o=>o.issue&&r`
        animation: ${s`

            0% {
                box-shadow: 0 0 20px inset rgb(179 0 0 / 70%);
            }

            80% {
                box-shadow: 0 0 20px inset rgb(179 0 0 / 70%);
            }

            100% {
                box-shadow: initial;
            }

        `} ease-in 2s;
    `}
`;export{t as T};
