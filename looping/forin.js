const languages = {
    js: 'javascript',
    rb: 'ruby',
    cpp: 'c++'
}

for (const key in languages) {
    console.log(`languages are ${key} and values are ${languages[key]}`);
} /*
for (const key of languages) {
    console.log(key);
}*/

for (const key in languages) {
    console.log(`languages are ${key} and values are ${languages[key]}`);
} 