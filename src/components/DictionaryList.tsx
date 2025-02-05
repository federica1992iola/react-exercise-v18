import { useEffect, useState } from "react";

//object data type
interface Dictionary {
    [key: string]: string; 
}

export const DictionaryList = () => {
    let content;
    const [wordInputValue, setWordInputValue] = useState<string>("");
    const [descriptionInputValue, setDescriptionInputValue] = useState<string>("");
    const [dictionary, setDictionary] = useState<Map<string,string>>();

    //componentDidMount
    useEffect(() => {
        setDictionary(new Map<string,string>());
    }, []);

    const addItemsToDictionary = () => {
        if(wordInputValue.length > 0 && descriptionInputValue.length > 0 && dictionary){
            if(dictionary.has(wordInputValue) === false){
                dictionary.set(wordInputValue,descriptionInputValue);
                const updateDictionary = new Map(dictionary);
                setDictionary(updateDictionary);
                setWordInputValue("");
                setDescriptionInputValue("");
            } else {
                alert('Item with the same word key exists!');
            }
        } else {
            alert('Cannot insert item without word and/or description!');
        }
    }

    const removeItemFromDictionary = (word: string) => {
        if(dictionary && dictionary.has(word) === true){
            dictionary.delete(word);
            const updateDictionary = new Map(dictionary);
            setDictionary(updateDictionary);
        }
    }

    const renderDictionary = () => {
        return Array.from(dictionary.entries()).map(
            (value: [string, string], index: number) =>  (
                <li key={value[0] + value[1] + index}>
                    <strong>{value[0]}</strong>: {value[1]}
                    <button onClick={() => removeItemFromDictionary(value[0])}>Rimuovi</button>
                </li>
            )
        )
      };
      
    if (dictionary !== undefined) {
        content = renderDictionary();
    } else {
        content = <div>Loading...</div>;
    }

    return (
        <div>
            <h3>Dizionario</h3>
            <input 
                type="text"
                placeholder="Inserire la parola"
                value={wordInputValue}
                onChange={(event: HTMLInputElement) => setWordInputValue(event.target.value)} />
            <input 
                type="text"
                placeholder="Inserire la descrizione"
                value={descriptionInputValue}
                onChange={(event: HTMLInputElement) => setDescriptionInputValue(event.target.value)} />
            <button onClick={addItemsToDictionary}>Aggiungi</button>
            <div>
                <h4>Elementi del dizionario</h4>
                {content}
            </div>
        </div>
    )
}