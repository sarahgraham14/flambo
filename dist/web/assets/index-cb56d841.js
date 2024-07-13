import{h as s,o as t,j as e,T as i,P as a,B as o,n as d,C as l,A as x}from"./index-0069131d.js";function h(){const n=s(async()=>await t({url:"/main/data/page"}),[]);return n.pending?e.jsx(i,{exception:new a}):n.exception?e.jsx(i,{exception:n.exception.current}):e.jsxs(c,{children:[e.jsx("h2",{children:"Views"}),e.jsx("div",{id:"content",children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsx("tr",{children:e.jsx("th",{children:"Link"})})}),e.jsx("tbody",{children:n.solve.map(r=>e.jsx("tr",{children:e.jsx("td",{children:e.jsx("a",{href:o+r,children:r})})},r))})]})})]})}const c=d(l)`
    padding: 20px;
    display: grid;
    grid-template-rows: auto 1fr;
    overflow: auto;
    gap: 20px;

    > h2 {
        margin: 0;
    }

    > #content {
        overflow: auto;

        &::-webkit-scrollbar {
            display: none;
        }

        > table {
            width: 100%;
            border-collapse: collapse;
            font-size: 14px;

            td, th {
                border: 1px solid ${()=>x.schema.COLOR_WHITE.rgba(.3)};
                padding: 10px;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                max-width: 200px;
            }
        }
    }
`;export{h as default};
