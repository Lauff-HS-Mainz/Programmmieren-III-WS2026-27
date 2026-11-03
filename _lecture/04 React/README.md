# React Tutorial 

Dieses Tutorial zeigt wie Komponenten in React grundlegend funktionieren.

In diesem Tutorial erstellen wir eine Mini-React-App (basierend auf dem Next.js template). 

Es wird angenommen, dass die Schritte aus "01 Getting Started" bekannt sind.


## Dev Container in VS Code erstellen

Für das Tutorial einen neuen Dev Container mit `Node.js & TypeScript` erstellen und starten.

## Mini-App erstellen

Mit  `pnpm create next-app@latest my-app --yes` die Skeleton App für Next.js im Verzeichnis `my-app` installieren und ins dieses Verzeichnis wechseln.

Mit `pnpm dev` den Entwicklungsmodus von Next.js starten und App im Browser unter http://localhost:3000/ öffnen.


## Mini-App anpassen

Im Verzeichnis `my-app/app` die Datei `page.tsx` öffnen und eine kleine Änderung "im Text" vornehmen.

Also zum Beispiel 

```ts
To get started, edit the{" "}
<code className="rounded bg-black/[.06] px-1.5 py-0.5 font-mono text-[0.9em] dark:bg-white/[.08]">
   page.tsx
</code>{" "}
file.
```
durch 

```ts
I got started!
```

ersetzen.

Danach mit `File` > `Save` oder `Strg-s` speichern und die Änderung wird direkt im Browser angezeigt.
