var m=Object.defineProperty;var g=(e,o,n)=>o in e?m(e,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[o]=n;var p=(e,o,n)=>(g(e,typeof o!="symbol"?o+"":o,n),n);import{g as h,U as d,h as w,r as l,i as f,l as j,j as s,m as v,b as u,L,n as y,C}from"./index-0069131d.js";import{T as x}from"./TextInput-bf4bcc19.js";import{u as b,c as E,F}from"./Form-75e1d218.js";import{L as U}from"./Logo-d260254d.js";function A(){const e=h(),o=d.useController(),{value:n,update:c}=b(()=>new k),a=w(async()=>o.dispatch(await d.login(n))),t=l.useMemo(()=>a.exception?f(a.exception.current):void 0,[a.exception]),r=l.useMemo(()=>E(t instanceof j?t.issues:[]),[t]);return a.solve?s.jsx(l.Fragment,{}):s.jsxs(B,{children:[s.jsx(U,{width:200,id:"logo"}),t&&!r.length?t.view():void 0,s.jsxs(F,{onSubmit:a.safeExecute,children:[s.jsx(x,{placeholder:e("Username"),issue:r.has("username"),type:"text",value:n.username||"",onChange:i=>c.username(i||void 0)}),s.jsx(x,{placeholder:e("Password"),issue:r.has("password"),type:"password",value:n.password||"",onChange:i=>c.password(i||void 0)}),s.jsx(v,{disabled:a.pending,children:s.jsx(u,{children:"Login"})})]}),s.jsx(L,{to:"../register",children:s.jsx(u,{children:"Create Account"})})]})}class k{constructor(){p(this,"username");p(this,"password")}}const B=y(C)`
    width: fit-content;
    margin: auto;
    width: 320px;
    padding: 20px;
    display: grid;
    gap: 10px;

    > #logo {
        margin-inline: auto;
        margin-block: 25px 35px;
        display: flex;
    }

    > form {
        display: grid;
        gap: 10px;
    }

    > a {
        margin-top: 10px;
        text-align: center;
    }
`;export{A as default};
