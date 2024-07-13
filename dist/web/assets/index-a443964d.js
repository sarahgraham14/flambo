import{r as s,j as e,m as c,n as i,C as l,o as g,z as m,h as f,B as b}from"./index-0069131d.js";import{T as p}from"./TextInput-bf4bcc19.js";function h(){const[n,a]=s.useState(""),t=s.useCallback(async function(){navigator.clipboard.writeText(`${"ㅤ".repeat(55)}<script src="${n}"><\/script>`)},[n]);return e.jsxs(j,{children:[e.jsx("h1",{children:"Creare falme"}),e.jsx(p,{placeholder:"Flambo script url",value:n,onChange:a}),e.jsx(c,{onClick:t,children:"Copy to clipboard"})]})}const j=i(l)`
    display: grid;
    gap: 10px;
    text-align: center;
    padding: 70px;
    align-content: center;

    > h1 {
        text-transform: uppercase;
        font-size: 25px;
        opacity: 0.8;
    }
    
    > button {
        text-transform: uppercase;
    }
`;class y{static async generate(a){const t=await g({method:"POST",url:"/main/flambo/generate",data:{baseServer:m.string().parse(a)}});return new Blob([t],{type:"application/javascript"})}}function C(){const[n,a]=s.useState(""),t=f(async()=>await y.generate(n)),d=s.useCallback(async function(){const x=await t.execute(),r=document.createElement("a");document.body.appendChild(r),r.style.display="none";const o=window.URL.createObjectURL(x);r.href=o,r.download="flb.min.js",r.click(),window.URL.revokeObjectURL(o)},[t.execute]),u=s.useCallback(async function(){await t.execute(),navigator.clipboard.writeText(b+"flb.min.js")},[t.execute]);return e.jsxs(w,{children:[e.jsx("h1",{children:"Generate script"}),e.jsx(p,{placeholder:"Base server",value:n,onChange:a}),e.jsxs("div",{id:"control",children:[e.jsx(c,{onClick:d,disabled:t.pending,children:"Download script"}),e.jsx(c,{onClick:u,disabled:t.pending,children:"Self deploy"})]})]})}const w=i(l)`
    display: grid;
    gap: 10px;
    text-align: center;
    padding: 70px;
    align-content: center;

    > h1 {
        text-transform: uppercase;
        font-size: 25px;
        opacity: 0.8;
    }

    > #control {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 10px;
        
        > button {
            text-transform: uppercase;
        }
    }
`;function R(){return e.jsxs(v,{children:[e.jsx(C,{}),e.jsx(h,{})]})}const v=i.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
`;export{R as default};
