var u=[],s=[];function h(t,n,g){var a,r,i,c,e,o;if(t===n)return 0;if(t.length===0)return n.length;if(n.length===0)return t.length;for(g&&(t=t.toLowerCase(),n=n.toLowerCase()),e=0;e<t.length;)u[e]=t.charCodeAt(e),s[e]=++e;for(o=0;o<n.length;)for(a=n.charCodeAt(o),r=i=o++,e=-1;++e<t.length;)c=a===u[e]?i:i+1,i=s[e],s[e]=r=i>r?c>r?r+1:c:c>i?i+1:c;return r}var l=document.querySelectorAll("input"),p=l[0],f=l[1],v=document.querySelector("output");p.addEventListener("input",d);f.addEventListener("input",d);d();function d(){v.textContent=h(p.value,f.value)}