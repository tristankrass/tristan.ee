---
title: "Idee"
path: "/blog/idee"
slug: "idee"
date_published: 2019-04-14T14:39:00.000Z
date_updated: 2019-04-14T15:45:45.000Z
tags: eesti, coding
excerpt: Minu ideee teha "time tracking" rakendus. 
---

 Idee on teha avatud lähtekoodiga projekt, mis on mõeldud ajaplaneerimiseks eelkõige tudengitele ja õpilastele. Viimane nädal olen keskendunud sellele, et teha valik, milliseid tehnoloogiaid kasutada. Olles ise suur kanbani ja pomodoro fänn, tuli mul mõte teha rakendus, mis rakendab [kanbani.](https://en.wikipedia.org/wiki/Kanban_(development)) Seni olen kasutanud rakendust nimega [KanbanFlow](https://kanbanflow.com/). Tegu on suurepärase rakendusega, mida olen kiitnud ka varasemalt. Minu ainuke probleem selle rakendusega on asjaolu, et kui ma soovin saada detailsemat ülevaadet ajast, siis see maksab. Mul pole midagi selle vastu, et maksta rakenduse eest, mis on suurepärane. Pigem soovin oma programmeerimisoskused proovile panna ja vaadata, kas suudan teha rakenduse, mis asendaks Kanbanflow.

#### **Kliendipoolne arendus**

 Kliendi poolel olen otsustanud [Reacti](https://reactjs.org/) kasuks, mis on Facebooki poolt loodud avatud lähtekoodiga Javascripti raamistik. Reacti kasutamiseks on oluline kasutada “state manageri”, mis maakeeli on teek, mis vastutab selle eest, mida kasutaja parasjagu näeb. Selle ülesande jaoks tundub sobivat [GraphQl](https://graphql.org/), mis pole teek, vaid päringute tegemiseks mõeldud keel. Kui varasemalt on enamik veebirakendusi tehtud “REST-api” põhimõtetel, mis tähendab reeglina, et meil on mitu “endpoiniti”, millel igaühel on oma eesmärk. GraphQli eelis REST-i ees on see, et ühe päringuga on võimalik saada kogu informatsioon.

#### **Serveripoolne arendus**

Serveri poole pealt pole ma üldse veel selgusele jõudnud, milliseid tehnoloogiaid kasutada. Kandikul on Python ja [Django](https://www.djangoproject.com/) või Javascript ja Express. Mulle meeldib idee, et kogu projekt oleks võimalik kirjutada Javascriptis ja ühendada see MongoDB serveriga. Teisest küljest pole JS pooltki nii ilus keel kui Python. Viimaks tuleb arvesse võtta asjaolu, et [ExpressJS](https://expressjs.com/) ja Django on väga erinevad raamistikud, millest esimene on hästi kerge kaaluga ehk jätab arendajale palju ruumi teha oma valikuid. Django on aga kindlatel põhimõtetel tuginev raamistik, mis soosib seda, et me teeks asju Django moodi. Minule kui algajale programmeerijale on see pigem ilmselt positiivne, et surutakse peale disaini muster, mis suure tõenäosusega on parem kui see, mille ma ise leiutaks.

#### **Kokkuvõtlikult**

 Tegu on veel ideega, mille elluviimisega mul hetkel kooli kõrvalt aega pole, kuid vaheajal hakkan ilmselt projektiga pihta. Viimaks pean nentima, et uuel semestril algab mul Java kursus, mis on populaarne serveri keel ka suuremates ettevõtetes, seega võib juhtuda, et valin serveripoolseks keeleks hoopis Java.




