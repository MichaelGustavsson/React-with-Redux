# React Redux Toolkit och REST API anrop Del 2.

I förra övningen anropade vi ett REST baserat api genom att använda oss av **useEffect** och skapade hela anropet med hjälp av JavaScripts fetch api.

Vad vi egentligen gjorde då var att skapa det som kallas för en **Fat Component**. Vilket är helt i sin ordning.
Vad vi i denna övning istället ska göra är att skapa en **Fat Reducer** och använda oss av React Redux _Thunk_.

_Thunk_ är en funktion som returnerar en annan funktion.
