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

export default {
    copyToClipboard,
    pasteFromClipboard
}
