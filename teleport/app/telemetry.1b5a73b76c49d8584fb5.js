"use strict";(self.webpackChunk_gravitational_teleport=self.webpackChunk_gravitational_teleport||[]).push([[913],{1560:(e,n,t)=>{t.r(n),t.d(n,{instantiateTelemetry:()=>f});var r=t(7402),a=t(9876),o=t(3488),i=t(2171),w=t(8793),s=t(4084),p=t(4877),c=t(7188),l=t(435),u=t(2786),g=t(7844),_=t(2883),d=t(2614),m=t(6793),E=t(8877);function f(){(0,i.X)({instrumentations:[new c.K,new _.u,new l.W,new u.V]});const e=r._.default().merge(new r._({[a.R9.SERVICE_NAME]:"teleport-web-ui",[a.R9.SERVICE_VERSION]:"0.1.0"})),n=new o.m({resource:e});n.addSpanProcessor(new w.p(new s.g)),n.addSpanProcessor(new w.p(new p.M({timeoutMillis:15e3,url:`${window.location.origin}/v1/webapi/traces`,concurrencyLimit:10}))),n.register({contextManager:new E.X,propagator:new d.Y({propagators:[new g.P,new m.jf]})})}}}]);