var h=Object.defineProperty;var u=(s,o,a)=>o in s?h(s,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):s[o]=a;var p=(s,o,a)=>(u(s,typeof o!="symbol"?o+"":o,a),a);import{j as e,n as g,A as f,f as b,k as j,g as v,U as x,h as w,r as m,i as y,l as C,N as k,b as c,m as L,L as E,C as T}from"./index-0069131d.js";import{T as d}from"./TextInput-bf4bcc19.js";import{h as A}from"./index.esm-019fb80e.js";import{u as F,c as U,F as $}from"./Form-75e1d218.js";import{L as I}from"./Logo-d260254d.js";function R({checked:s,onChange:o,...a}){return e.jsxs(z,{...a,children:[e.jsx("input",{type:"checkbox",checked:s,onChange:n=>o(n.target.checked)}),e.jsx(A,{})]})}const z=g.label`
    border: 1px solid ${()=>f.schema.COLOR_WHITE.rgba(.2)};
    cursor: pointer;
    width: 15px;
    height: 15px;
    position: relative;
    display: block;

    > svg {
        width: 70%;
        height: 70%;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        transform: scale(0);
    }

    > input {
        opacity: 0;
        z-index: -1;
        pointer-events: none;

        &:hover ~ svg {
            transform: scale(0.5);
        }

        &:checked ~ svg {
            transform: scale(1);
        }
    }

    ${s=>s.issue&&b`
        animation: ${j`

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
`;function W(){const s=v(),o=x.useController(),{value:a,update:n}=F(()=>new B),i=w(async()=>o.dispatch(await x.create(a))),t=m.useMemo(()=>i.exception?y(i.exception.current):void 0,[i.exception]),r=m.useMemo(()=>U(t instanceof C?t.issues:[]),[t]);return i.solve?e.jsx(k,{to:"/main"}):e.jsxs(M,{children:[e.jsx(I,{width:200,id:"logo"}),t&&!r.length?t.view():void 0,e.jsxs($,{onSubmit:i.safeExecute,children:[e.jsx(d,{placeholder:s("Email"),issue:r.has("email"),type:"text",value:a.email||"",onChange:l=>n.email(l||void 0)}),e.jsx(d,{placeholder:s("Username"),issue:r.has("username"),type:"text",value:a.username||"",onChange:l=>n.username(l||void 0)}),e.jsx(d,{placeholder:s("Password"),issue:r.has("password"),type:"password",value:a.password||"",onChange:l=>n.password(l||void 0)}),e.jsxs("label",{children:[e.jsx(R,{checked:a.agreeTerms,onChange:n.agreeTerms,issue:r.has("agreeTerms")}),e.jsx("p",{children:e.jsx(c,{children:"Agree terms"})})]}),e.jsx(L,{disabled:i.pending,children:e.jsx(c,{children:"Create Account"})})]}),e.jsx(E,{to:"../login",children:e.jsx(c,{children:"Login"})})]})}class B{constructor(){p(this,"email");p(this,"username");p(this,"password");p(this,"agreeTerms",!1)}}const M=g(T)`
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

        > label {
            display: flex;
            align-items: center;
            gap: 10px;

            > p {
                opacity: 0.7;
                margin: 0;
                user-select: none;
                font-size: 13px;
            }
        }
    }

    > a {
        margin-top: 10px;
        text-align: center;
    }
`;export{W as default};
