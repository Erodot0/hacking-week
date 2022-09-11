Challenge JS - User Management

https://documenter.getpostman.com/view/8858534/SW7dX7JG#c438d742-5050-4dd1-a
338-86f3d00cc4e7

1) Creare una pagina HTML login (email, password) ed una pagina register (email,
password, age, name).

2) Riferendoti alla documentazione fornita, chiama con fetch l’endpoint /user/register
per registrare l’utente e l’endpoint /user/login per effettuare l’accesso.

3) Salvare il Token fornito dalla risposta nel SessionStorage del browser.

4) Creare una pagina profilo con un bottone di logout, una volta premuto richiama
l’endpoint /user/logout e cancella il token dal SessionStorage.

5) Usa l’endpoint /user/me per recuperare i dati utente dopo il login
(N.B: bisogna inserire il campo header Authorization con il Bearer Token fornito in
precedenza nella risposta di login/registrazione, una guida su come usare il Bearer
Token - nonché un approfondimento su fetch - lo trovate a questo link
https://reqbin.com/code/javascript/ricgaie0/javascript-fetch-api-example ).

6) Iniettare i dati della risposta nell’html della pagina profilo usando la manipolazione
del DOM.

Buon divertimento! :)
