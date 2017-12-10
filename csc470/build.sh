#!/bin/bash
set -e

compile_and_report(){
    tsc "$1" && echo "compiled $1"
}

find ./ -type f ! -path "./node_modules/*" -iname '*ts' | while read i; do
    hashFile="$i.sha1"
    shaHash="$(sha1sum "$i")"
    if [[ ! -e "$hashFile" || "$(cat "$hashFile")" != "$shaHash" ]]; then
        compile_and_report "$i"
        echo "$shaHash" > "$hashFile"
    fi
done

echo done. running...
node app.js
