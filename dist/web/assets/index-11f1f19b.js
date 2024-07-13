import{j as e,E as v,r as a,T as f,P as _,R as b,a as n,N as L,_ as s,n as o,U as c,L as w,b as p,u as E,c as I,A as i,B as C,C as j,G as x,d as y,e as g}from"./index-0069131d.js";import{L as R}from"./Logo-d260254d.js";import{G as N,a as O,b as z,c as A,d as k,e as P,f as T,g as $}from"./index.esm-019fb80e.js";const G=a.lazy(()=>s(()=>import("./index-033546aa.js"),["assets/index-033546aa.js","assets/index-0069131d.js"])),B=a.lazy(()=>s(()=>import("./index-a443964d.js"),["assets/index-a443964d.js","assets/index-0069131d.js","assets/TextInput-bf4bcc19.js"])),D=a.lazy(()=>s(()=>import("./index-394ef20b.js"),["assets/index-394ef20b.js","assets/index-0069131d.js","assets/TimeAgo-c4505a68.js"])),S=a.lazy(()=>s(()=>import("./index-8fe7fd3f.js"),["assets/index-8fe7fd3f.js","assets/index-0069131d.js","assets/TimeAgo-c4505a68.js"])),V=a.lazy(()=>s(()=>import("./index-99ec91f0.js"),["assets/index-99ec91f0.js","assets/index-0069131d.js","assets/TimeAgo-c4505a68.js"])),F=a.lazy(()=>s(()=>import("./index-cb56d841.js"),["assets/index-cb56d841.js","assets/index-0069131d.js"]));function M(){return e.jsx(U,{children:e.jsx(v,{children:e.jsx(a.Suspense,{fallback:e.jsx(f,{exception:new _}),children:e.jsxs(b,{children:[e.jsx(n,{index:!0,element:e.jsx(L,{to:"script"})}),e.jsx(n,{path:"script/*",element:e.jsx(G,{})}),e.jsx(n,{path:"view/*",element:e.jsx(D,{})}),e.jsx(n,{path:"flambo/*",element:e.jsx(B,{})}),e.jsx(n,{path:"account/*",element:e.jsx(S,{})}),e.jsx(n,{path:"store/*",element:e.jsx(V,{})}),e.jsx(n,{path:"page/*",element:e.jsx(F,{})})]})})})})}const U=o.div`
    grid-area: content;
    position: relative;
    overflow: hidden;
    display: grid;
`;function W(){const t=c.useController(),l=a.useCallback(function(){c.logout(),t.dispatch(void 0)},[]);return e.jsxs(w,{to:"",onClick:l,children:[e.jsx(N,{}),e.jsx(p,{children:"Logout"})]})}function H(){var u;const l=(u=E()["*"])==null?void 0:u.split("/")[0];return e.jsx(Y,{children:q.map(r=>e.jsxs(I,{to:r.route,className:l===r.route?"active":void 0,children:[e.jsx(r.Icon,{size:20,strokeWidth:1.5}),e.jsx("p",{children:e.jsx(p,{children:r.name})}),e.jsx("div",{className:"line right bottom horizontal"}),e.jsx("div",{className:"line left bottom horizontal"}),e.jsx("div",{className:"line right bottom vertical"}),e.jsx("div",{className:"line right top horizontal"}),e.jsx("div",{className:"line left bottom vertical"}),e.jsx("div",{className:"line left top horizontal"}),e.jsx("div",{className:"line right top vertical"}),e.jsx("div",{className:"line left top vertical"})]},r.route))})}const Y=o.div`
    overflow: hidden;
    display: grid;
    gap: 10px;
    height: fit-content;
    margin-top: 10px;
    margin-inline: 5px;

    > a {
        font-family: ${()=>i.schema.FONT_REGULAR};
        display: flex;
        align-items: center;
        gap: 2px;
        color: ${()=>i.schema.COLOR_WHITE.rgba()};
        text-decoration: none;
        padding-inline-end: 70px;
        padding-inline-start: 15px;
        position: relative;

        &.active, &:hover {
            
            > .line {

                &.horizontal {
                    width: 10px;
                }

                &.vertical {
                    height: 10px;
                }
            }
        }

        > p {
            margin: 15px;
        }

        > .line {
            background-color: ${()=>i.schema.COLOR_WHITE.rgba()};
            box-shadow: 0 0 5px white;
            position: absolute;

            &.left {
                left: 0;
            }

            &.right {
                right: 0;
            }

            &.top {
                top: 0;
            }

            &.bottom {
                bottom: 0;
            }

            &.horizontal {
                width: 0;
                height: 1px;
            }

            &.vertical {
                width: 1px;
                height: 0;
            }
        }
    }
`,q=[{route:"script",name:"Scripts",Icon:O},{route:"view",name:"Views",Icon:z},{route:"account",name:"Accounts",Icon:A},{route:"store",name:"Stores",Icon:k},{route:"page",name:"Pages",Icon:P},{route:"flambo",name:"Flambo",Icon:T},{route:C+"backup.sqlite",name:"Backup",Icon:$}];function K(){return e.jsxs(J,{children:[e.jsx(R,{width:150,id:"logo"}),e.jsx(H,{}),e.jsx(W,{})]})}const J=o(j)`
    grid-area: sidebar;
    display: grid;
    grid-template-rows: auto 1fr;
    padding: 10px;
    justify-items: center;
    gap: 30px;
    padding-block: 35px;
`;function h(t){return x({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"}}]})(t)}function m(t){return x({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"}}]})(t)}function Q(t){return x({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M433 288.8c-7.7 0-14.3 5.9-14.9 13.6-6.9 83.1-76.8 147.9-161.8 147.9-89.5 0-162.4-72.4-162.4-161.4 0-87.6 70.6-159.2 158.2-161.4 2.3-.1 4.1 1.7 4.1 4v50.3c0 12.6 13.9 20.2 24.6 13.5L377 128c10-6.3 10-20.8 0-27.1l-96.1-66.4c-10.7-6.7-24.6.9-24.6 13.5v45.7c0 2.2-1.7 4-3.9 4C148 99.8 64 184.6 64 288.9 64 394.5 150.1 480 256.3 480c100.8 0 183.4-76.7 191.6-175.1.8-8.7-6.2-16.1-14.9-16.1z"}}]})(t)}const d=o.button`
    color: ${()=>i.schema.COLOR_WHITE.rgba()};
    background-color: transparent;
    font-family: ${()=>i.schema.FONT_MEDIUM};
    padding: 5px;
    font-size: 17px;
    border: none;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    gap: 10px;

    &:active {
        background-color: ${()=>i.theme.schema.BACKGROUND_PRIMARY.rgba()};
    }
`;function X(){const t=y();return e.jsxs(Z,{children:[e.jsx(d,{onClick:()=>t(-1),children:g.value.direction==="rtl"?e.jsx(m,{}):e.jsx(h,{})}),e.jsx(d,{onClick:()=>t(1),children:g.value.direction==="rtl"?e.jsx(h,{}):e.jsx(m,{})}),e.jsx(d,{onClick:()=>location.reload(),children:e.jsx(Q,{})})]})}const Z=o.div`
    display: flex;
    gap: 10px;
`;function ee(){const t=c.useContext();return e.jsxs(te,{children:[e.jsx(p,{children:"Welcome"}),", ",e.jsx("b",{children:t.username})]})}const te=o.div`
    display: flex;
    align-items: center;
    gap: 7px;

    > b {
        color: ${()=>i.schema.COLOR_YELLOW.rgba()};
        display: flex;
        align-items: center;
        gap: 7px;
    }
`;function ae(){return e.jsxs(oe,{children:[e.jsx(X,{}),e.jsx(ee,{})]})}const oe=o(j)`
    grid-area: navbar;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
`;function ce({user:t}){return e.jsx(ne,{children:e.jsxs(c.context.Provider,{value:t,children:[e.jsx(ae,{}),e.jsx(K,{}),e.jsx(M,{})]})})}const ne=o.div`
    display: grid; 
    grid-template-columns: auto 1fr; 
    grid-template-rows: auto 1fr; 
    gap: 10px; 
    grid-template-areas: 
        "sidebar navbar"
        "sidebar content";
    height: 100%;
    overflow: hidden;
`;export{ce as default};
