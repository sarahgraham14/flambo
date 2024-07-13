import{h as r,o as s,j as e,T as i,P as d,n as a,C as l,A as o}from"./index-0069131d.js";import{t as x}from"./TimeAgo-c4505a68.js";function j(){const n=r(async()=>await s({url:"/main/data/store"}),[]);return n.pending?e.jsx(i,{exception:new d}):n.exception?e.jsx(i,{exception:n.exception.current}):e.jsxs(c,{children:[e.jsx("h2",{children:"Stores"}),e.jsx("div",{id:"content",children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Created At"}),e.jsx("th",{children:"Front URL"}),e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Next Payment"}),e.jsx("th",{children:"Total Earnings"}),e.jsx("th",{children:"Total Designs"}),e.jsx("th",{children:"Reference"}),e.jsx("th",{children:"Is Active"})]})}),e.jsx("tbody",{children:n.solve.map(t=>e.jsxs("tr",{children:[e.jsx("td",{children:x(t.createdAt)}),e.jsx("td",{children:t.frontURL}),e.jsx("td",{children:t.name}),e.jsxs("td",{children:["$",t.nextPayment.toFixed(2)]}),e.jsxs("td",{children:["$",t.totalEarnings?t.totalEarnings.toFixed(2):"NULL"]}),e.jsx("td",{children:t.totalDesigns}),e.jsx("td",{children:t.parent?t.parent.frontURL:"Without"}),e.jsx("td",{children:t.isActive?"✅":"❌"})]},t.id))})]})})]})}const c=a(l)`
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
