/**
 * @author Nguyen Van Nam
 * @description CLASS: helper.ts utils function JavaScript
 */

/**
 * @description so this fallback is mainly for FB/IG Browsers and other old browsers
 * @param text 
 */
function copyToClipbordFallback(text: string) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    textArea.remove();
}

/**
 * @description A helper JavaScript browser function copy to clipboard
 * @param value 
 */
async function copyToClipboard(value: string): Promise<void> {
    try {
        if (navigator.clipboard) {
            await navigator.clipboard.writeText(value);
            console.log(`The text '${value}' is in the Clipboard Now!`);
        } else {
            console.log(`Clipboard API is Not Supported`);
            copyToClipbordFallback(value)
            console.log("Text Copied");
        }
    } catch (err) {
        console.error(`Failed to copy: ${err}`);
        copyToClipbordFallback(value);
        console.log("Text Copied");
    }
}

/**
 * @description A helper JavaScript browser function paste from clipboard
 * @returns string | underfined
 */
async function pasteFromClipboard(): Promise<string | undefined> {
    try {
        if (navigator.clipboard) {
            const fromClipboard = await navigator.clipboard.readText();
            console.log(`The text '${fromClipboard}' is pasted successfully!`);
            return fromClipboard;
        } else {
            console.log(`Clipboard API is Not Supported`);
        }
    } catch (err) {
        console.error(`Failed to paste: ${err}`);
    }
}

/**
 * How to split a string in JavaScript
 */
/**
 * Split a string into substrings using the specified separator and return them as an array.
 * @param word
 * @param separator — A string that identifies character or characters to use in separating the string. If omitted, a single-element array containing the entire string is returned.
 * @param limit — A value used to limit the number of elements returned in the array.
 * @returns string[]
 */
function splitAStringWord(word: string, separator: string | RegExp, limit?: number | undefined): string[] {
    return word.split(separator, limit);
}

/**
 * How to parse JSON in JavaScript
 * Converts a JavaScript Object Notation (JSON) string into an object.
 * @param text — A valid JSON string.
 * @param reviver
 * A function that transforms the results. This function is called for each member of the object. If a member contains nested objects, the nested objects are transformed before the parent object is.
 */
function pasteToJSON(text: string, reviver?: ((this: any, key: string, value: any) => any) | undefined): any {
    try {
        return JSON.parse(text, reviver);
    } catch (error) {
        console.log(`JSON invalid::[${text}]`, error);
        return null;        
    }
}

/**
 * 
 * @param json object
 * @returns 
 */
function pasteFromJson(json: any): string {
    return JSON.stringify(json);
}

function create2DArray(rows: number, cols: number, length: number) {
    let arrRender = Array.from(Array(length).keys());
    let arr = new Array(rows);
    let index = 0;
    let slice_next = rows;
    // 5, 10, 15, 20, 25 -- slice_next
    // 0,  1   2   3   4 -- i

    // x
    for (var i = 0; i < rows; i++) {
        arr[index] = arrRender.slice(index, slice_next); // new Array(cols);
        index = slice_next;
        slice_next += rows;
    }

    // y
    for (let j = 0; j < cols; j++) {
        
    }

    return arr.filter(Boolean);
  }

export default {
    copyToClipboard,
    pasteFromClipboard,
    splitAStringWord,
    pasteToJSON,
    pasteFromJson,
    create2DArray
}
