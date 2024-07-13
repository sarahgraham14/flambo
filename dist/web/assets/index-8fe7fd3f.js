import{h as i,o as n,j as e,T as r,P as d,n as a,C as l,A as o}from"./index-0069131d.js";import{t as x}from"./TimeAgo-c4505a68.js";function j(){const s=i(async()=>await n({url:"/main/data/account"}),[]);return s.pending?e.jsx(r,{exception:new d}):s.exception?e.jsx(r,{exception:s.exception.current}):e.jsxs(h,{children:[e.jsx("h2",{children:"Accounts"}),e.jsx("div",{id:"content",children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Created At"}),e.jsx("th",{children:"Email"}),e.jsx("th",{children:"Account Type"}),e.jsx("th",{children:"First Name"}),e.jsx("th",{children:"Last Name"}),e.jsx("th",{children:"Is Artist"})]})}),e.jsx("tbody",{children:s.solve.map(t=>e.jsxs("tr",{children:[e.jsx("td",{children:x(t.createdAt)}),e.jsx("td",{children:t.email}),e.jsx("td",{children:t.type}),e.jsx("td",{children:t.firstName}),e.jsx("td",{children:t.lastName}),e.jsx("td",{children:t.isArtist?"✅":"❌"})]},t.id))})]})})]})}const h=a(l)`
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
                border: 1px solid ${()=>o.schema.COLOR_WHITE.rgba(.3)};
                padding: 10px;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                max-width: 200px;
            }
        }
    }
`;export{j as default};
