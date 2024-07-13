import{h as p,r as l,i as f,l as h,j as e,N as j,m as u,b as g,n as v,C as R,u as C,T as m,P as E}from"./index-0069131d.js";import{S as x}from"./Script-4850dac7.js";import{m as S,l as b}from"./index.esm-019fb80e.js";import{T as d}from"./TextInput-bf4bcc19.js";import{T as y}from"./Textarea-2ff53572.js";import{u as w,c as T}from"./Form-75e1d218.js";function P(){const r=x.useContext(),{value:t,update:s}=w(()=>r),a=p(async()=>await r.edit(t)),i=p(async()=>await r.destroy()),c=l.useMemo(()=>a.exception?f(a.exception.current):void 0,[a.exception]),o=l.useMemo(()=>T(c instanceof h?c.issues:[]),[c]);return i.solve?e.jsx(j,{to:".."}):e.jsxs(k,{children:[e.jsx(d,{id:"name",placeholder:"Script name",issue:o.has("name"),value:t.name,onChange:n=>s.name(n)}),e.jsx(y,{id:"content",placeholder:"Script content",issue:o.has("content"),value:t.content,onChange:n=>s.content(n.target.value)}),e.jsx(d,{id:"hrefRegex",placeholder:"RegEx href",issue:o.has("hrefRegex"),value:t.hrefRegex||"",onChange:n=>s.hrefRegex(n||null)}),e.jsx(d,{id:"ipRegex",placeholder:"RegEx ip",issue:o.has("ipRegex"),value:t.ipRegex||"",onChange:n=>s.ipRegex(n||null)}),e.jsxs(u,{id:"delete",onClick:i.safeExecute,disabled:a.pending||i.pending,children:[e.jsx(S,{}),e.jsx(g,{children:"Delete Script"})]}),e.jsxs(u,{id:"create",onClick:a.safeExecute,disabled:a.pending||i.pending,children:[e.jsx(b,{}),e.jsx(g,{children:"Save Script"})]})]})}const k=v(R)`
    display: grid; 
    grid-template-columns: 1fr 1fr 200px 200px; 
    grid-template-rows: auto 1fr auto; 
    grid-template-areas: 
        "name name name name"
        "content content content content"
        "hrefRegex ipRegex delete create";
    gap: 10px;
    padding: 20px;

    > #name {
        grid-area: name;
    }

    > #content {
        grid-area: content;
        background-color: rgb(0 0 0 / 70%);
        color: rgb(45 232 69);
        font-family: SourceCodePro-Regular;
    }

    > #regex {
        grid-area: regex;
    }

    > #delete {
        grid-area: delete;
        text-transform: uppercase;
        background-color: rgb(255 0 0 / 45%);
    }

    > #create {
        grid-area: create;
        text-transform: uppercase;
    }
`;function D(){const{id:r}=C(),t=p(async()=>await x.findOne(+r),[]);return t.pending?e.jsx(m,{exception:new E}):t.exception?e.jsx(m,{exception:t.exception.current}):e.jsx(x.context.Provider,{value:t.solve,children:e.jsx(P,{})})}export{D as default};
