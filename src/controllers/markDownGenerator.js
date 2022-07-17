// import { marked } from 'marked' 
const { marked } = require('marked')
let markdown = `# Sola et erat victa minimo aures oculis

## Esse imum et

Lorem markdownum [se sunt et](http://www.invitaque-vestemque.io/) amor promptu;
quod non voragine Terea percutimurque inter; inpugnante sua corpora? Nec
faciente vidit lato altera sperantemque atque mihi fassus parum dolor iuvencos
animi.

> Ipsa et terrae ora avulsumque nactus et Amorque vestigia ferus ignoscere
> coniuge latentia respondit. Praestant Atque: gestae sumo temone exaudi
> nostroque ceperunt natarum, ardeat conscelero maeonis festas.

## Plangitur animalia populo nato flavescere amorem

**Circen pronaque**, triste, et mihi. Esse lintea digna: crimen licet [sibi
fessam ad](http://www.porrigit.io/mantopedum.html) cornu flaventibus exsiluit
[viriles](http://www.styx-pavidus.io/exspiravit), solio in putes errat, Lyrcea.

> Utque si Mopsus fontis: est tuo fatum orbem; sed sit membra genua fuit caput,
> tumulos. Dato et iuncta, urbem canescere, per fert similisque rex aestum
> operis, frondem, [duas](http://vitiataque.org/etaustri.html) agros. Latos
> praesens. Victor mitem faticinasque rapta opemque procumbit liquidis metuenda
> verus, tangere aliquid et, aut decentior ferre! Per haec procerum sustinuere
> regia exponit, metuens velimus.

## Recondidit gelidaeque tamen litore viri

Fieri caelataeque auras, tum morer remugis ut vultus nitido. Ut fiet, undamque
peregit Latini? Sua fuit, mora adspicit dixit coniunx, cum in Iuno qui clamavit?
Nemus unde, omnia imagine, saepe et summa ictibus crura ademi; mei deum innuba
clamore.

- Harpyia flumina dummodo Procrusten et illis et
- Pariter potest
- Structis Stymphalides Harpyia quam borean vana caerulus
- Cervus vaticinor est mutasse
- Ad piorum ut aquis
- Radiorum artus Herculeamque

## Limina nuntia vacca vertuntur spectare

Hamadryadas innitens Ancaeus pleno si non maius restat utilitas ne ad poterat
licet, qua lacus qua puellae! Inter nuda, luctus placet piumque gurgite mea:
Alcimedon senectae et cervi sparsit.

Quidem nunc! Rerum qui *dira sed*, litore. Te parum, quae aliquis tamen si
sanguine huc minorem, veni [bello](http://illomiseram.org/animosque). Cuique
eluserat, esse iaculum fallat in accipe nocebant! Ius deorum selige natorumque
quae nec annis serpentis natura per nec.

Par frustra et cornua agmen, futuri verba sequentia, quid velles tria arte
capit. Turbata populos remoliri eodem letalibus, iussa utiliter adhibent turget.
Saxumque quem. Consensu Abantiades consumpta. Ille his litore pharetra, incautus
ut cum senioribus ferrum Fluctibus rapite."`

let html = marked.parse(markdown)

console.log(html)

