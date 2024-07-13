import{j as n,n as t,A as o,f as i,k as p}from"./index-0069131d.js";function c({value:a,onChange:e,issue:x,...s}){return n.jsx("input",{...s,value:a,onChange:r=>e(r.target.value)})}const d=t(c)`
    box-shadow: 0 0 15px inset ${()=>o.schema.COLOR_YELLOW.rgba(.03)};
    border: 1px solid ${()=>o.schema.COLOR_WHITE.rgba(.16)};
    color: ${()=>o.schema.COLOR_WHITE.rgba()};
    font-family: ${()=>o.schema.FONT_MEDIUM};
    border-color: 1px solid transparent;
    background-color: transparent;
    backdrop-filter: blur(5px);
    position: relative;
    overflow: hidden;
    outline: none;
    padding: 15px;

    &:hover, &:active, &:focus {
        box-shadow: 0 0 20px inset ${()=>o.schema.COLOR_YELLOW.rgba(.1)};
    }

    &:focus {
        border-color: ${()=>o.schema.COLOR_YELLOW.rgba(.7)};
    }

    ${a=>a.issue&&i`
        animation: ${p`

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
`;export{d as T};
