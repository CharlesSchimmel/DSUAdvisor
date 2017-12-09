#!/bin/bash
compile_and_report(){
    tsc "$1" && echo "compiled $1"
}
find ./ -type f ! -path "./node_modules/*" -iname '*ts' | while read i; do
    compile_and_report "$i"
done
echo done. running...
node app.js
