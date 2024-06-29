"use strict";exports.id=366,exports.ids=[366],exports.modules={4405:(e,s,l)=>{l.r(s),l.d(s,{default:()=>o});var i=l(997);l(6689);var r=l(9114),a=l(1664),d=l.n(a),t=l(8096),c=l.n(t);l(8278),l(1598);let n=(0,r.gql)`
  query GetBlogPosts {
    posts(first: 5) {
      nodes {
        id
        title
        excerpt
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
  }
`,o=function(){let{loading:e,error:s,data:l}=(0,r.useQuery)(n);return e?i.jsx("p",{children:"Loading..."}):s?(0,i.jsxs)("p",{children:["Error: ",s.message]}):i.jsx("section",{id:"blog",children:(0,i.jsxs)("div",{className:"container",children:[i.jsx("div",{className:"row header-text text-center blog-header",children:i.jsx("div",{className:"col-lg-12",children:(0,i.jsxs)("h3",{children:["BL",i.jsx("span",{children:"O"}),"G"]})})}),(0,i.jsxs)("div",{className:"row blog-pa",children:[i.jsx("div",{className:"col-lg-8",children:i.jsx(c(),{dots:!0,infinite:!0,speed:500,autoplay:!0,autoplaySpeed:5e3,slidesToShow:2,slidesToScroll:1,initialSlide:0,responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0,dots:!0}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:2,initialSlide:2}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}],className:"blog-main",children:l?.posts.nodes.map(e=>i.jsx("div",{className:"w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-4 mb-8",children:i.jsxs("div",{children:[i.jsx("img",{src:e.featuredImage?.node?.sourceUrl,alt:"blog-img",className:"img-fluid w-100"}),i.jsxs("div",{className:"blog-item-txt",children:[i.jsx("h3",{children:e.title}),i.jsx("p",{className:"excerpt",dangerouslySetInnerHTML:{__html:e.excerpt}}),i.jsx(d(),{href:`/blog/${e.id}`,style:{paddingBottom:"20px"},children:"Read More"})]})]})},e.id))})}),(0,i.jsxs)("div",{className:"col-lg-4 col-md-10 m-md-auto blog-text",children:[i.jsx("form",{children:(0,i.jsxs)("div",{className:"input-group contact-input mb-3",children:[i.jsx("input",{type:"text",className:"form-control box-bg",placeholder:"Search here...","aria-label":"Search"}),i.jsx("button",{type:"submit",className:"search-btn",children:i.jsx("i",{className:"fa fa-search","aria-hidden":"true"})})]})}),(0,i.jsxs)("div",{className:"tags",children:[i.jsx("h4",{children:"Hash Tags"}),i.jsx("a",{href:"#",children:"Marketing"}),i.jsx("a",{href:"#",children:"Branding"}),i.jsx("a",{href:"#",children:"Success"}),(0,i.jsxs)("div",{className:"tag-pa",children:[i.jsx("a",{href:"#",children:"Strategy"}),i.jsx("a",{href:"#",children:"Digital"}),i.jsx("a",{href:"#",children:"Growth"})]}),(0,i.jsxs)("div",{className:"tag-pa",children:[i.jsx("a",{href:"#",children:"Creative"}),i.jsx("a",{href:"#",children:"Innovation"})]})]})]})]})]})})}}};