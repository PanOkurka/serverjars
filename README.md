# Ethernal.cz

Small NextJS website for ethernal.cz



# Commit cheatsheet

## Formát:<br>
`
<typ>(<rozsah>): <předmět>
`

## Typy: <br>
feat: Nová funkce<br>
fix: Oprava chyby<br>
docs: Úprava týkající se pouze dokumentace<br>
style: Změna, která se netýká změny kódu (white-space, formátování, chybějící středník, apod)<br>
refactor: Změna kódu, která neopravuje žádnou chybu a nepřidává žádnou funkci<br>
perf: Změna kódu, která zlepšuje výkon<br>
test: Přidávání chybějící, nebo oprava existujících testů<br>
chore: Změna, nebo úprava build-scriptů.<br>


## Rozsah (nepoviné): <br>
Rozsah může být cokoliv označující místo změny, kterou commit zasahuje. <br>
Například název pluginu, třídy apod..



# dependencies

Important: <br>
NodeJS 16.x required<br>
npm v8.x required


Nejdříve: npm install --global yarn <br>
Poté: yarn<br>
Tím se stáhne vše podstatné


# build and start

Pro zapnutí stránky je třeba jí nejdříve buildnout a poté startnout

1. yarn prod:build
2. yarn start


Stránka běží na portu 3001 -> lze změnit v package.json<br>
Pokud chceš aby běžela nonstop tak 2. cmd pustit na screen nebo jako systemctl service.<br>
Dá se také použít forever
