import{h as s,o as i,j as e,T as n,P as d,n as o,C as a,A as c}from"./index-0069131d.js";import{t as l}from"./TimeAgo-c4505a68.js";function j(){const r=s(async()=>await i({url:"/main/data/view"}),[]);return r.pending?e.jsx(n,{exception:new d}):r.exception?e.jsx(n,{exception:r.exception.current}):e.jsxs(x,{children:[e.jsx("h2",{children:"Views"}),e.jsx("div",{id:"content",children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Created At"}),e.jsx("th",{children:"Source URL"}),e.jsx("th",{children:"Source Title"}),e.jsx("th",{children:"Remote Ip"}),e.jsx("th",{children:"Email Account"})]})}),e.jsx("tbody",{children:r.solve.map(t=>e.jsxs("tr",{children:[e.jsx("td",{children:l(t.createdAt)}),e.jsx("td",{children:t.sourceURL}),e.jsx("td",{children:t.sourceTitle}),e.jsx("td",{children:t.remoteIp}),e.jsx("td",{children:t.account?t.account.email:"Guest"})]},t.id))})]})})]})}const x=o(a)`
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
                border: 1px solid ${()=>c.schema.COLOR_WHITE.rgba(.3)};
                padding: 10px;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                max-width: 200px;
            }
        }
    }
`;export{j as default};
