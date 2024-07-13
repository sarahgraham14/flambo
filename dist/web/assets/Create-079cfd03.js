var x=Object.defineProperty;var g=(e,a,t)=>a in e?x(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t;var s=(e,a,t)=>(g(e,typeof a!="symbol"?a+"":a,t),t);import{h as m,r as p,i as d,l,j as r,N as u,m as f,b as h,n as R,C as v}from"./index-0069131d.js";import{T as c}from"./TextInput-bf4bcc19.js";import{T as j}from"./Textarea-2ff53572.js";import{u as C,c as S}from"./Form-75e1d218.js";import{l as E}from"./index.esm-019fb80e.js";import{S as b}from"./Script-4850dac7.js";function B(){const{value:e,update:a}=C(()=>new w),t=m(async()=>await b.create(e)),i=p.useMemo(()=>t.exception?d(t.exception.current):void 0,[t.exception]),o=p.useMemo(()=>S(i instanceof l?i.issues:[]),[i]);return t.solve?r.jsx(u,{to:".."}):r.jsxs(y,{children:[r.jsx(c,{id:"name",placeholder:"Script name",issue:o.has("name"),value:e.name||"",onChange:n=>a.name(n||void 0)}),r.jsx(j,{id:"content",placeholder:"Script content",issue:o.has("content"),value:e.content||"",onChange:n=>a.content(n.target.value||void 0)}),r.jsx(c,{id:"hrefRegex",placeholder:"RegEx href",issue:o.has("hrefRegex"),value:e.hrefRegex||"",onChange:n=>a.hrefRegex(n||void 0)}),r.jsx(c,{id:"ipRegex",placeholder:"RegEx ip",issue:o.has("ipRegex"),value:e.ipRegex||"",onChange:n=>a.ipRegex(n||void 0)}),r.jsxs(f,{id:"create",onClick:t.safeExecute,disabled:t.pending,children:[r.jsx(E,{}),r.jsx(h,{children:"Create Script"})]})]})}class w{constructor(){s(this,"name");s(this,"content");s(this,"hrefRegex");s(this,"ipRegex")}}const y=R(v)`
    display: grid; 
    grid-template-columns: 1fr 1fr 200px; 
    grid-template-rows: auto 1fr auto; 
    grid-template-areas: 
        "name name name"
        "content content content"
        "hrefRegex ipRegex create";
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

    > #create {
        grid-area: create;
        text-transform: uppercase;
    }
`;export{B as default};
